// import "./Login.css";

// export function Login() {
//   return (
//     <section>
//       <div className="div-login">
//         <h1>Gerencia<span>Vagas</span></h1>

//         <form action="">
//           <label htmlFor="">Nome ou E-Mail</label>
//           <input type="text" />

//           <label htmlFor="">Senha</label>
//           <input type="text" />
//         </form>
//       </div>
//     </section>
//   );
// }

import "./Login.css";

export function Login() {
  return (
    <section>
      <div className="div-login">
        <h1>Gerencia<span>Vagas</span></h1>

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
        </form>
      </div>
    </section>
  );
}

