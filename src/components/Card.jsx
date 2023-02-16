
function Card (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <img  src={props.image} alt="" />
        </div>
    )
}

export default Card