import {CLEAN_CHARACTER_DETAIL, GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL} from './action-types'

const initilaState = {
    characters: [],
    characterDetail: {}
}


const reducer = (state = initilaState, {type, payload}) => {
    switch (type) {
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: payload
            }

        case GET_CHARACTER_DETAIL:
            return{
                ...state,
                characterDetail: payload
            }

        case CLEAN_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: {}
            }

        default:
            return {...state}
    }
}


export default reducer;