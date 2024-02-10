import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffIndividual from './StaffIndividual';
import "../styles/SobreMi.css";

const SobreMi = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/staff');
                setStaff(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchStaff();
    }, []);

    return (
        <div>
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="Staff">
                <h2>Staff</h2>
                <div className="equipo">
                    <div>
                        <img className="equipo-img" src="/equipo.jpg" alt="equipo"/>
                    </div>
                </div>
            </div>
        </main>
        <div className="staff-lista">
                    {staff.map((staff) => (
                        <StaffIndividual key={staff.id} staff={staff} />
                    ))}
                </div>
        </div>
    );
    
};

export default SobreMi;
