import {
    ADD_ERROR,
    REMOVE_ERROR
} from './types';

export const addError = error => {
    return {
        type: ADD_ERROR,
        error
    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR,
    }
}