import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanCharacterDetail, getCharacterDetail } from "../../redux/actions";




const CharacterDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {image, name, species,origin,gender,status } = useSelector(state => state.CharacterDetail)

    useEffect(() => {
        dispatch(getCharacterDetail(id))

        return () => {
            dispatch(cleanCharacterDetail())
        }
    }, [])


    return(
        <div>
            <img src={image} alt={name}/>
            <h1>{name}</h1>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Origin: {origin?.name}</p>
        </div>
    )
}


export default CharacterDetail