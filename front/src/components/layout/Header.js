import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css"
const Header = (props) => {
    return (
     <header>     
     <nav>
        <div className="holder">
            <Link to="/"><img src="/logo7.png" width="100" alt="MiLogo" className="logo-img"/></Link>
        </div>
        <div className="nav-links">
           <ul>
             <li><Link to="/Contacto">Contacto</Link></li>
             <li><Link to="/SobreMi">Sobre Mi</Link></li>
             <li><Link to="/Tienda">Tienda</Link></li>
             <li><Link to="/Carrito">Carrito</Link></li>
            </ul>
        </div>
    </nav>             
    </header>
    )
}
export default Header;