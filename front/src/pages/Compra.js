import React, { useState } from "react";
const Compra=()=>{
    const [medioPago, setMedioPago] = useState(``);
    const [datosPersonales, setDatosPersonales] = useState ({
        nombre:'',
        apellido:'',
        email: '',
        telefono: '',
        dni:'',
    });
    const [envio, setEnvio] = useState('retiroTienda');
    const calcularTotalCarrito = () =>{
        return 0;
    };
    const handleMedioPagoChange = (event) =>{
        setMedioPago(event.target.value);
    };
    const handleDatosPersonalesChange = (event)=> {
        const{name, value} = event.target;
        setDatosPersonales((prevDatos)=>({...prevDatos,[name]:value}));
    };
    const handleEnvioChange =(event) =>{
        setEnvio(event.target.value);
    }
    const enviarPedido =()=> {
        console.log('Pedido enviado:', {medioPago,datosPersonales,envio});
    };
    return(
        <div>
            <h1>Compra</h1>
            <form>
                <label>
                    Medio de Pago:
                    <select value={medioPago} onChange={handleMedioPagoChange}>
                        <option value="tarjeta">Debito / Credito</option>
                        <option value="efectivo">Efectivo</option>
                    </select>
                </label>
                <label>
                    Datos Personales:
                    <input type="text" name="nombre" placeholder="Nombre" value={datosPersonales.nombre} onChange={handleDatosPersonalesChange}/>
                    <input type="text" name="apellido" placeholder="Apellido" value={datosPersonales.apellido} onChange={handleDatosPersonalesChange}/>
                    <input type="text" name="email" placeholder="Email" value={datosPersonales.email} onChange={handleDatosPersonalesChange}/>
                    <input type="number" name="telefono" placeholder="Telefono" value={datosPersonales.telefono} onChange={handleDatosPersonalesChange}/>
                    <input type="number" name="dni" placeholder="DNI" value={datosPersonales.dni} onChange={handleDatosPersonalesChange}/>
                </label>
                <label>
                    Metodo de Envio:
                    <select value={envio} onChange={handleEnvioChange}>
                        <option value="envioDomicilio">Envio a Domicilio</option>
                        <option value="retiroTienda">Retiro en Tienda</option>
                    </select>
                </label>
                <div>Total del Carrito: ${calcularTotalCarrito()}</div>
                <button type="button" onClick={enviarPedido}>Confirmar Compra</button>
            </form>
        </div>
    );
};
export default Compra;