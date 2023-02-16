import { Link } from "react-router-dom"

const CharacterCard = ({name,id,gender,image}) => {
    return(
        <div style={{display: "flex", justifyContent: "center", padding: "2rem" }}>
            <img src={image}  alt="inamsad" />
            <Link to={`dateil/${id}`}>
                <h1>{name}</h1>
            </Link>
            <h3>Gender: {gender}</h3>
        </div>
    )
}

export default CharacterCard