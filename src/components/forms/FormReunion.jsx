import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const FormReunion = () => {

        // function la(src)
        // {
        // window.location=src;
        // }

  return (
    <div>
        <div className="container">
            <div className="wrapper">
                <div className="title"><span> Tipo de Reunion </span></div>
                <img src={logo} width="300" height="400" />

                <form action="#">
                    <select id ="comision">
                        <option value ="comision"> Seleccionar Tipo de Reunion </option>
                        <option value ="form4.html" > Reunion1 </option> 
                        <option value ="transportacion"> Reunion2 </option>
                        <option value ="laborales"> Reunion3 </option>
                        <option value ="comision"> Reunion4 </option>
                        <option value ="comision"> Reunion5 </option>
                        <option value ="comision"> Reunion6 </option>
                        <option value ="comision"> Reunion7</option>
                    </select>
                    <div className="row button">
                        <Link to="/form4" >Next </Link>
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
