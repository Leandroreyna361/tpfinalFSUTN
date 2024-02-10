/*import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffItem = ({ name, description, position, img_id }) => {
  const [imagen1, setImagen1] = useState('');

  useEffect(() => {
    const fetchImagen1 = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/staff/${img_id}`);
        console.log('Datos de la API:', response.data);
        setImagen1(response.data.imagen1);
      } catch (error) {
        console.error('Error al obtener imagen:', error);
      }
    };

    fetchImagen1();
  }, [img_id]);

  return (
    <div className="staff-persona">
      <img src={imagen1} alt="personal" />
      <h3>{name}</h3>
      <h4>{position}</h4>
      <p>{description}</p>
    </div>
  );
};

export default StaffItem;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffItem = (props) => {
    const { name, description, position, img_id } = props;
    const [imagen1, setImagen1] = useState('');

    useEffect(() => {
        const fetchImagen1 = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/staff/${img_id}`);
                setImagen1(response.data.imagen1);
            } catch (error) {
                console.error('Error al obtener imagen:', error);
            }
        };

        fetchImagen1();
    }, [img_id]);

    return (
        <div className="staff">
            <img src={imagen1} alt={name} />
            <h5>{name}</h5>
            <p>{description}</p>
            <h6>{position}</h6>
           
            
        </div>
    )
}

export default StaffItem;

