import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <section className="display-flex alturaLogin">
        <article className="width-p-50 backgroundForm position-relative">
          <div className="login-form width-p-60">
            <h1 className="Spotlight-bold">Cadastro</h1>
            <form className="margin-bottom-2" action="">
              <div className="form-label margin-bottom-1">
                <label className="Body2-bold margin-bottom-1"> Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  className="form-control"
                  autoComplete="off"
                  value={props.nome}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite o nome..."
                />
              </div>
              <div className="form-label margin-bottom-1">
                <label className="Body2-bold margin-bottom-1"> Email</label>
                <input
                  type="text"
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  autoComplete="off"
                  value={props.email}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite o e-mail..."
                />
              </div>
              <div className="form-label margin-bottom-1">
                <label className="Body2-bold margin-bottom-1"> Tipo</label>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <label class="input-group-text" for="tipo">
                      Opções
                    </label>
                  </div>
                  <select
                    class="custom-select"
                    id="tipo"
                    name="tipo"
                    id="tipo"
                    value={props.tipo}
                    onChange={(e) => props.updateField(e)}
                    onKeyPress={props.handleEnterPress}
                  >
                    <option selected>Choose...</option>
                    <option value="Aluno">Aluno</option>
                    <option value="Empresa">Empresa</option>
                    <option value="Professor">Professor</option>
                  </select>
                </div>
              </div>

              <div className="form-label margin-bottom-1">
                <label className="Body2-bold margin-bottom-1"> CPF/RG</label>
                <input
                  type="text"
                  name="cpf_rg"
                  id="cpf_rg"
                  className="form-control"
                  autoComplete="off"
                  value={props.cpf_rg}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite o Cpf/Rg..."
                />
              </div>
              <div className="form-label margin-bottom-2">
                <label className="Body2-bold margin-bottom-1"> Senha </label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  className="form-control"
                  autoComplete="off"
                  value={props.senha}
                  onChange={(e) => props.updateField(e)}
                  onKeyPress={props.handleEnterPress}
                  placeholder="Digite a senha..."
                />
              </div>
              <div className="form-label">
                <Link
                  className="btn btn-primary"
                  type="submit"
                  value="Cadastrar"
                  to="/cadastro"
                  onClick={props.save}
                >
                  Cadastrar
                </Link>
              </div>
            </form>
          </div>
        </article>
      </section>
    </body>
  </html>
);
