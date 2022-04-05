import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const FormMediaAsunto = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="title"> 
            <span> Medida & Asunto </span>
          </div>
          <img src={logo} width="300" height="400" />

          <form action="#">
            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Medida" required />
            </div>

            <div className="row">
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Asunto" required/>
            </div>


            <div className="row button">
              <Link to="/tabla" >Next </Link>
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
