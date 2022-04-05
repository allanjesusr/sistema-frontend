import React from 'react'

export const Dashboard = () => {

    // let list = document.querySelectorAll(".navigation li");

    // function activeLink() {
    // list.forEach((item) => {
    //     item.classList.remove("hovered");
    // });
    // this.classList.add("hovered");
    // }

    // list.forEach((item) => item.addEventListener("mouseover", activeLink));

    // // Menu Toggle
    // let toggle = document.querySelector(".toggle");
    // let navigation = document.querySelector(".navigation");
    // let main = document.querySelector(".main");

    // toggle.onclick = function () {
    // navigation.classList.toggle("active");
    // main.classList.toggle("active");
    // };

    return (
        <div>
            <div className="container">
        {/* <div className="navigation">
            <ul>
               
               

                <div className="logo">

                    
                   /
                    <img src="img/logo.png" width="150px" height="150px"  />

                </div>


               
                

                
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="book-outline"></ion-icon>
                        </span>
                        <span className="title">Reporte de Asistencias </span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="help-outline"></ion-icon>
                        </span>
                        <span className="title">Help</span>
                    </a>
                </li>

             
                <li>
                    <a href="#">
                        <span className="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        <span className="title">Sign Out</span>
                    </a>
                </li>

                
            </ul>

            
        </div> */}

        <div className="main">
            <div className="topbar">
                <div className="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div className="user">
                    <img src="img/customer01.jpg" alt=""/>
                </div>
            </div>

           
            <h1> Certificacion de Asistencia  </h1>

           
       
    <div className="table_responsive">

        

      <table>

        <div className="cont" >

        <div className="row">
            
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Asunto" required />
          </div>
          
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Asunto" required />
          </div>
          
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Asunto" required />
          </div>

          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Asunto" required />
          </div>
        </div>

        <div className="contt" >

            
              <a className="row-button" href="home.html" > <input  value="Login" /> </a>
          
  
           
              <a className= "row-button" href="home.html" > <input  value="Login" /> </a>
           

           
                <a  className= "row-button"  href="home.html" > <input  value="Login" /> </a>
             

             
                <a className="row-button" href="home.html" > <input  value="Login" /> </a>
              
  
          </div>

          
          
          
          <thead>
            <tr>
              <th></th>
              <th> Nombres </th>
              <th></th>
              <th>Presente</th>
              <th>Ausente</th>
              <th>Excusado</th>
            </tr>
          </thead>
    
          <tbody>
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido </td>
              <td> 28 </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt=""/></td>
              <td>Nombre Apellido </td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt=""/></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt=""/></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
            </tr>
    
            <tr>
              
              <td><img src="https://assets.codepen.io/2147066/internal/avatars/users/default.png?fit=crop&format=auto&height=100&version=1608664176&width=100" alt="" /></td>
              <td>Nombre Apellido</td>
              <td>28</td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
    
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                 
                </span>
              </td>
              <td>
                <span className="action_btn">
                  <a href="#">X</a>
                  
                </span>
              </td>
              
            </tr>
    
    
            
           
          </tbody>
          
    
        </table>
    </div>
    </div>
    </div>

        </div>
    )
}
