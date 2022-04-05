import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const FormSelectDepartment = () => {

    
    // function la(src)
    // {
    //   window.location=src;
    // }


  return (
    <>
        <div className="container">
            <div className="wrapper">
                <div className="title"> Departamento </div>
                <img src={logo} width="300" height="400"/>
                    
                <form action="#">
                    <select id ="comision">
                        <option value ="comision"> Seleccionar Departamento </option>
                        <option value ="form2.html" > Departamento1 </option> 
                        <option value ="transportacion"> Departamento2 </option>
                        <option value ="laborales"> Departamento3 </option>
                        <option value ="comision"> Departamento4 </option>
                        <option value ="comision"> Departamento5</option>
                        <option value ="comision"> Departamento6 </option>
                        <option value ="comision"> Departamento7 </option>
                    </select>

                    <div className="row button">
                    
                    <Link to="/form2" > Next </Link>
                    </div>
                </form>
            </div>
        </div>
        <footer className="fot">
		    © 2022.Todos los derechos reservados.
	    </footer>
    </>
  )
}
