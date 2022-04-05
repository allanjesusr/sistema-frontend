import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.png'


export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/form1')
  }

  return (
    <div>
     <div className="container">
      <div className="wrapper">
        <div className="title"> 
          <span>Login</span>
        </div>
        <img src={ logo } width="300" height="400" />

        <form action="#">
          <div className="row button pointer" onClick={ handleLogin }>
            Login
          </div>
        </form>
      </div>
    </div>


	<footer className="fot">

	 © 2022.Todos los derechos reservados.
	</footer>

      
    </div>
  )
}
