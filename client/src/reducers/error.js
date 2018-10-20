import {
    ADD_ERROR,
    REMOVE_ERROR
} from '../actions/actionErrors'

export default (state = {}, action) => {
    switch (action.types) {
        case ADD_ERROR:
            return {
                ...state,
                message: action.error
            }
        case REMOVE_ERROR:
            return {
                ...state,
                message: null
            }
        default:
            return state
    }
}