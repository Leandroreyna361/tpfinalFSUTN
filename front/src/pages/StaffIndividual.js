import "../styles/StaffIndividual.css"

const StaffIndividual = ({ staff }) => {
    
    return (
        <div className="staff">
            <img className="img-staff"src={`https://res.cloudinary.com/diwxzlrtz/image/upload/c_fill,h_500,w_400/${staff.img_id}`} alt={staff.title} />
            <h5>{staff.nombre}</h5>
            <h6>{staff.posicion}</h6>
            <p>{staff.descripcion}</p>
            
        </div>
    );
};

export default StaffIndividual;
