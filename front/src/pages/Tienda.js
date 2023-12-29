import React, {useState, useEffect} from "react";
import Filtro from "../components/layout/Filtro";
import Sort from "../components/layout/Ordenador";
import Product from "./Producto";
import "../styles/Tienda.css"

const Tienda =() => {
    const [productos, setProductos] = useState([]);
    const [filtro, setFiltro] = useState([]);
    const [orden, setOrden] = useState(`lowToHigh`);
    useEffect(()=>{}, [filtro, orden])
    const handleFilterChange =(newFilter) =>{
        setFiltro(newFilter);
    };
    const handleSortChange = (newSortOption) =>{
        setOrden(newSortOption);
    };
    return (
        <div className="tienda-container">
          <h1>Tienda</h1>
          <div className="tienda-container2">
             <div className="sidebar">  
                 <Filtro onFilterChange={handleFilterChange} />
                 <Sort onSortChange={handleSortChange} />
             </div>
             <div className="productos-lista">
                 {productos.map((producto)=>(
                 <Product key={producto.id} producto={producto}/>
                  ))};
                 <Product/>
             </div>
          </div>
        </div>
    );
};
export default Tienda;