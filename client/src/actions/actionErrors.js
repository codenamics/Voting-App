import {
    ADD_ERROR,
    REMOVE_ERROR
} from './types';

export const addError = error => ({
    type: ADD_ERROR,
    error
})


export const removeError = () => ({
    type: REMOVE_ERROR,
})