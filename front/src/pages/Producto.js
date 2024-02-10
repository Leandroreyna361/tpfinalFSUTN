import React, { useState } from 'react';
import "../styles/Producto.css"

const Product = ({ producto }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    const addToCart = () => {
        console.log(`Agregado al carrito: ${producto.title} - Cantidad: ${quantity}`);
    };

    return (
        <div className="product">
            <img src={`https://res.cloudinary.com/diwxzlrtz/image/upload/c_fill,h_500,w_400/${producto.img_id}`} alt={producto.title} />
            <h3>{producto.titulo}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <label>Cantidad:</label>
            <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
            />
            <button onClick={addToCart}>Agregar al Carrito</button>
        </div>
    );
};

export default Product;