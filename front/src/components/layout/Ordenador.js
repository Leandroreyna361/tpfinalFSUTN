import React from "react";
const Sort = ({onSortChange}) => {
    const handleSortChange = (event) => {
        const selectedSortOption = event.target.value;
        onSortChange (selectedSortOption);
    };
    return (
        <div>
            <h3>Ordenar por:</h3>
            <label htmlFor="sortOption">Opciones de Orden:</label>
            <select id="sortOption" onChange={handleSortChange}>
                <option value="lowToHigh">Precio bajo a alto</option>
                <option value="highToLow">Precio alto a bajo</option>
                <option value="aToZ">A-Z</option>
                <option value="zToA">Z-A</option>
            </select>
        </div>
    );
};
export default Sort;