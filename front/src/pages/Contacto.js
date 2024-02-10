import React from "react";
import { useState } from "react";
import axios from 'axios';
import "../styles/Contacto.css"
const Contacto =(props) => {

    const initialForm = {
        nombre: '',
        email:'',
        telefono:'',
        mensaje:''
    }
    const [sending, setSending] =useState(false);
    const [msg, setMsg] =useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e =>{
        const {name, value} = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]:value
        }))
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }


    return (
      <div className="holder">


        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p className="contactoBox">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p className="contactoBox"> 
                        <label for="email">Email</label> 
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p className="contactoBox">
                        <label for="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p className="contactoBox">
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar"/>
                    </p>
                    {sending ? <p>Enviando....</p> :null}
                    {msg ? <p>{msg}</p> :null}
                </form>
            </div>
            <div className="datos">
                <h2>Vias de Contacto</h2>
                <p>Mediante redes sociales!</p>
                <ul>
                    <li>Configurar liks e iconos</li>
                    <li>Email</li>
                    <li>wpp</li>
                    <li>insta</li>
                </ul>
            </div>
        </main>
        <section className="holder1">
          <h2>Novedades</h2>
          <h3>titulo</h3>
          <h4>subtitulo</h4>
          <p>Cuerpo</p>
        </section>
      </div>
    )
} 
export default Contacto;