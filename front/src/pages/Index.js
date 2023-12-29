import React from "react";
import "../styles/Index.css"
const Index= (props)=>{
    return(
      <main className="main-holder">
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos a mi tienda en linea!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="homeimg">
              <img src="mamimisraices500px.png" alt="HildaGallina"/>
          </div>
        </div>
        <div className="testimonios">
           <h2>Testimonios</h2>
           <div className="testimonio">
            <div className="testimonio-columna" >
                <span class="cita">Una maravilla</span>
                <span class="autor">Rosa</span>
            </div>
            <div className="testimonio-columna" >
                <span class="cita">Exelente</span>
                <span class="autor">Juan Pablo</span>
            </div>
            <div className="testimonio-columna" >
                <span class="cita">Buenisima calidad</span>
                <span class="autor">Arturo</span>
            </div>
           </div> 
      </div>    
        
     </main>
    )
}
export default Index;