const { query } = require('express');
var pool = require ('./bd');

async function getContacto() {
    var query = 'select * from contacto';
    var rows = await pool.query(query);
    return rows;
}
async function insertContacto(obj){
    try{
        var query = 'insert into contacto set ?'
        var rows = await pool.query(query,[obj])
        return rows;  
    } catch (error){
        console.log(error);
        throw error;
    }
}
async function deleteContactoById(id){
    var query = 'delete from contacto where id = ? '
    var rows = await pool.query(query,[id]);
    return rows;
}




async function getContactoById(id) {
    try {
        const query = 'select * from contacto where id = ?';
        const rows = await pool.query(query, [id]);
        return rows[0];
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateEstadoContacto(id, nuevoEstado) {
    try {
        const query = 'update contacto set estado = ? where id = ?';
        const rows = await pool.query(query, [nuevoEstado, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}



module.exports = {getContacto, insertContacto, deleteContactoById,getContactoById,updateEstadoContacto}