import {useSelector, useDispatch} from "react-redux"
import {useEffect} from "react";
import { getAllCharacters } from '../../redux/actions'
import CharacterCard from '../characterCard/CharacterCard'

// useSelector >> hook que funciona igual que el mapStateToprops
// useDispartch >> hook que funciona igual que el mapDispatchToProps
// useEffect >> hook que emula los ciclos de vida de un componente

const Characters = () => {
    const dispatch = useDispatch();
    //const characters = useSelector(state => state.characters)
    const {characters} = useSelector(state => state)

    useEffect(() => {
        dispatch(getAllCharacters())
    },[])

    console.log(characters)
    return (
        <> 
            {
                characters.map(character => {
                    return <CharacterCard
                        key={character.id}
                        name={character.name}
                        id={character.id}
                        image={character.image}
                        gender={character.gender}
                    />
                })
            }
        </>
    )
}

export default Characters