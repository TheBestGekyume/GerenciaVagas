import "./Login.scss";
import { useState } from "react";

export function Login() {
  const [registrado, setRegistrado] = useState(true);

  function alterarForm (){
    setRegistrado(!registrado);
  };

  let conteudoForm;
  if (registrado) {
    conteudoForm = (
      <form action="">
        <div className="form-group">
          <label htmlFor="username">Nome ou E-Mail</label>
          <input type="text" id="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" />
        </div>

        <input type="submit" value="Fazer Login"/>

        <a href="#" onClick={alterarForm}>Não tem login? Realize o seu cadastro</a>
      </form>
    );
  } else {
    conteudoForm = (
      <form action="">
        <div className="form-group">
          <label htmlFor="new-username">Nome</label>
          <input type="text" id="new-username" />
        </div>

        <div className="form-group">
          <label htmlFor="new-email">E-Mail</label>
          <input type="email" id="new-email" />
        </div>

        <div className="form-group">
          <label htmlFor="new-password">Senha</label>
          <input type="password" id="new-password" />
        </div>

        <input type="submit" value="Cadastrar"/>

        <a href="#" onClick={alterarForm}>Já tem login? Faça o login</a>
      </form>
    );
  }

  return (
    <section>
      <div className="div-login">
        <h1>Gerencia<span>Vagas</span></h1>
        {conteudoForm}
      </div>
    </section>
  );
}
