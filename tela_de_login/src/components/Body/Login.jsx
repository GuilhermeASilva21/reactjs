import React from 'react';
import './Login.css';

const Login = () => {
 

 ;

  return (
    <div className="login-container">
      <div className="loginCorpo">
        <div className="ladoEsquerdo">
          <h1 className='tituoLogin'>Faça o Login</h1>
          <label className='labelLogin' htmlFor="email">E-mail</label>
          <input input className='input'  type="email" id="email" placeholder="Digite seu E-mail" />
          
          <label className='labelLogin' htmlFor="password">Senha</label>
          <input className='input' type="password" id="password" placeholder="Digite sua Senha" />
          <div className='parteDeBaixo'>
             <button className="botaoDeLogin">
            LOGIN
          </button>
          </div>
         
        </div>
        <div className="login-right">
          <div className="brand-logo">
            <h2>FUT AGENDA</h2>
          </div>
          <p>Não possui Cadastro?</p>
          <button className="register-button" >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
