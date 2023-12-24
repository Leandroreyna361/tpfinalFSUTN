import React from "react";
const Filtro = ({onFilterChange}) => {
    const handleSugarChange = (event) =>{
        const selectedSugarType = event.target.value;
        onFilterChange ({sugarType: selectedSugarType})
    };
   return(
     <div>
         <h3>Filtros</h3>
         <label htmlFor="sugarType">Tipo de Azucar:</label>
         <select id="sugarType" onChange={handleSugarChange}>
             <option value="">Todos</option>
             <option value="Comun Blanca">Comun Blanca</option>
             <option value="Organica Mascabo">Mascabo</option>
         </select>
     </div>
    );
};
export default Filtro;