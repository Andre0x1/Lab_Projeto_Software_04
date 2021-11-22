import React from "react";
import axios from "axios";
import Cadastro from "./Cadastro";
import Itens from "./Itens";

import { NotificationManager } from "react-notifications";

const baseUrl = "http://localhost:3001/users";

const initialState = {
  user: {
    nome: "",
    email: "",
    tipo: "",
    cpf_rg: "",
    senha: "",
  },
  list: [],
};

export default class User extends React.Component {
  constructor() {
    super();

    this.state = { ...initialState };

    this.clear = this.clear.bind(this);
    this.save = this.save.bind(this);
    this.getUpdatedList = this.getUpdatedList.bind(this);
    this.updateField = this.updateField.bind(this);
    this.load = this.load.bind(this);
    this.remove = this.remove.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  componentWillMount() {
    axios.get(baseUrl).then((response) => {
      this.setState({ list: response.data });
    });
  }

  handleEnterPress(event) {
    if (event.key === "Enter") {
      this.save();
    }
  }

  clear() {
    this.setState({ user: initialState.user });
  }

  save() {
    const user = this.state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    if (
      user.nome === "" ||
      user.email === "" ||
      user.cpf_rg === "" ||
      user.senha === "" ||
      user.tipo === ""
    ) {
      NotificationManager.warning(
        "Dados obrigatórios sem informações",
        "Preencha os campos"
      );
    } else {
      axios[method](url, user).then((response) => {
        const list = this.getUpdatedList(response.data);
        this.setState({ user: initialState.user, list });
        if (method === "post")
          NotificationManager.success(
            "Usuário criado com sucesso",
            "Criar Usuário"
          );
      });
    }
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((response) => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
      NotificationManager.success(
        "Usuário excluído com sucesso",
        "Excluir Usuário"
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <Cadastro
          nome={this.state.user.nome}
          email={this.state.user.email}
          tipo={this.state.user.tipo}
          cpf_rg={this.state.user.cpf_rg}
          senha={this.state.user.senha}
          clear={this.clear}
          save={this.save}
          updateField={this.updateField}
          handleEnterPress={this.handleEnterPress}
        />
        <Itens list={this.state.list} load={this.load} remove={this.remove} />
      </React.Fragment>
    );
  }
}
