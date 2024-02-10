var pool = require ('./bd');

async function getStaff() {
    var query = 'select * from staff';
    var rows = await pool.query(query);
    return rows;
}
async function insertStaff(obj){
    try{
        var query = 'insert into staff set ?'
        var rows = await pool.query(query,[obj])
        return rows;
    } catch (error) {
        console.log(error)
        throw error;
    }
}
async function deleteStaffById(id){
    var query = 'delete from staff where id = ?'
    var rows = await pool.query(query,[id]);
    return rows;
}
async function getStaffById(id){
    var query = 'select * from staff where id = ?';
    var rows = await pool.query(query,[id]);
    //console.log("Resultado de la consulta:", rows);
    return rows[0];
}
async function modificarStaffById(obj,id){
    try {
        //console.log("Datos recibidos en modificarStaffById:", obj);
        //console.log("ID recibido en modificarStaffById:", id);
        var query = 'update staff set ? where id = ?';
        var rows = await pool.query(query, [obj,id]);
        return rows;
    } catch (error){
        throw error;
    }
}

module.exports = {getStaff, insertStaff, deleteStaffById, getStaffById, modificarStaffById}