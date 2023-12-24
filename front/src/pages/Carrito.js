import React,{useState} from "react";
import { Link } from "react-router-dom";
const Carrito =() => {
    const [carrito, setCarrito] = useState([
        {id: 1, titulo: 'Producto 1', imagen:'', precio: 14, cantidad: 2},
        {id: 2, titulo: 'Producto 2', imagen:'', precio: 11, cantidad: 1},
    ]);
    const actualizarCantidad = (id, nuevaCantidad) =>{
        setCarrito((prevCarrito)=>
        prevCarrito.map((producto)=>
        producto.id === id ? {...producto, cantidad: nuevaCantidad} : producto))
    }
    const calcularTotal =() =>{
        return carrito.reduce((total, producto)=> total + producto.precio * producto.cantidad, 0); 
    }
    return (
        <div>
            <h1>Carrito de Compras</h1>
            <div>
                {carrito.map((producto)=>(
                    <div key={producto.id} className="producto-en-carrito">
                        <img src={producto.imagen} alt={producto.titulo}/>
                        <div>
                            <h3>{producto.titulo}</h3>
                            <p>Precio: ${producto.precio}</p>
                            <label>Cantidad:</label>
                            <input type="number" value={producto.cantidad} onChange={(e) => actualizarCantidad(producto.id, parseInt(e.target.value, 10) )}/>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p>Total: ${calcularTotal().toFixed(2)}</p>
                <Link to="/compra">
                    <button>Ir a Comprar</button>
                </Link>
            </div>
        </div>

    )
} 
export default Carrito;