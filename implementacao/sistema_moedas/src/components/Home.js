import { Link } from "react-router-dom";

function Home() {
  return (
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
        <div class="page-login"></div>
        <div class="container navless-container">
          <div class="content">
            <div
              class="flash-container flash-container-page sticky"
              data-qa-selector="flash_container"
            ></div>
            <div class="row mt-3">
              <div class="col-sm-12">
                <h1 class="mb-3 font-weight-normal">
                  Sistemas de Moedas academicas
                </h1>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-sm-7 order-12 order-sm-1 brand-holder">
                <img
                  alt="home img"
                  src={`${process.env.PUBLIC_URL}/assets/images/Brasao_PUC.png`}
                />
              </div>
              <div class="col-sm-5 order-1 order-sm-12 new-session-forms-container">
                <div id="signin-container">
                  <div class="tab-content">
                    <div
                      class="login-box tab-pane active"
                      id="ldapmain"
                      role="tabpanel"
                    >
                      <div class="login-body">
                        <form>
                          <div class="form-group">
                            <label for="username">Login</label>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              class="form-control gl-form-input top"
                              title="This field is required."
                              autofocus="autofocus"
                              data-qa-selector="username_field"
                              required="required"
                            />
                          </div>
                          <div class="form-group">
                            <label for="password">Password</label>
                            <input
                              type="password"
                              name="password"
                              id="password"
                              class="form-control gl-form-input bottom"
                              title="This field is required."
                              data-qa-selector="password_field"
                              required="required"
                            />
                          </div>
                          <div class="remember-me">
                            <label for="remember_me">
                              <input
                                type="checkbox"
                                name="remember_me"
                                id="remember_me"
                                value="1"
                              />
                              <span>Lembre-me</span>
                            </label>
                          </div>
                          <div class="form-label">
                            <input
                              type="submit"
                              value="Entrar"
                              class="btn btn-primary"
                            ></input>
                          </div>
                          <div class="form-label">
                            <Link
                              class="Small-bold color-primaria_2 margin-left-12"
                              to="/cadastro"
                            >
                              Não tem login ? Cadastre-se.
                            </Link>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container footer-container">
          <div class="footer-links">
            <a href="https://github.com/Andre0x1/Lab_Projeto_Software_04">
              Dados Repositorio
            </a>
          </div>
        </div>
        <div></div>
        <div></div>
      </body>
    </html>
  );
}
export default Home;
