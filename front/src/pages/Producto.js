import React, {useState} from "react";
const Product = ({id, title, description, price, image}) => {
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) =>{
        setQuantity (parseInt(event.target.value, 10))
    };
    const addToCart =() =>{
        console.log(`Agregado al carrito: ${title} - Cantidad: ${quantity}`);
    };
    return(
        <div className="product">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Precio: ${price}</p>
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