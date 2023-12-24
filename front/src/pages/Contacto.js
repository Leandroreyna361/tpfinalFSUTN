import React from "react";
const Contacto =(props) => {
    return (
      <div className="holder">
       <section className="holder">
          <h2>Novedades</h2>
          <h3>titulo</h3>
          <h4>subtitulo</h4>
          <p>Cuerpo</p>
        </section>

        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label> 
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="Enviar"/>
                    </p>
                </form>
            </div>
            <div class="datos">
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
      </div>
    )
} 
export default Contacto;