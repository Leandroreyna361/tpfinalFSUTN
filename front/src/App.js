//import logo from './logo.svg';
//import './App.css';
import Header from "../src/components/layout/Header.js";
import Footer from "../src/components/layout/Footer.js";
import Carrito from "../src/pages/Carrito.js";
import Contacto from "../src/pages/Contacto.js";
import SobreMi from "../src/pages/SobreMi.js";
import Tienda from "../src/pages/Tienda.js";
import Index from "../src/pages/Index.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
    <div className="App">
    <BrowserRouter>
     <Header/>  
     <Routes>
       <Route path="/" element={<Index/>}/>
       <Route path="Carrito" element={<Carrito/>}/>
       <Route path="Contacto" element={<Contacto/>}/>
       <Route path="SobreMi" element={<SobreMi/>}/>
       <Route path="Tienda" element={<Tienda/>}/>
      </Routes>
    </BrowserRouter> 
    <Footer/>
    </div>
  </>
  );
}

export default App;
