
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductoItem = (props) => {
    const { title, description, price, quantity, img_id } = props;
    const [imagen1, setImagen1] = useState('');

    useEffect(() => {
        const fetchImagen1 = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/panel/${img_id}`);
                setImagen1(response.data.imagen1);
            } catch (error) {
                console.error('Error al obtener imagen:', error);
            }
        };

        fetchImagen1();
    }, [img_id]);

    return (
        <div className="product">
            <img src={imagen1} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <label>Cantidad:</label>
            <input
                type="number"
                min="1"
                value={quantity}
                //onChange={handleQuantityChange}
            />
        </div>
    )
}

export default ProductoItem;