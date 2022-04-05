import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const FormDate = () => {
  return (
    <div>
        <div className="container">
            <div className="wrapper">
                <div className="title"><span> Fecha </span></div>
                <img src={logo} width="300" height="400" />

                <form action="#">
                    <input type="date" />
                    <div className="row button">
                        <Link to="/form3" > Next </Link>
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
