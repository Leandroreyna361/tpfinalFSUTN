import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filtro from '../components/layout/Filtro';
import Sort from '../components/layout/Ordenador';
import Producto from './Producto';
import "../styles/Tienda.css";

const Tienda = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/panel');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="tienda-container">
            <h1>Tienda</h1>
            <div className="tienda-container2">
                <div className="sidebar">
                    <Filtro />
                    <Sort />
                </div>
                <div className="productos-lista">
                    {productos.map((producto) => (
                        <Producto key={producto.id} producto={producto} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tienda;
