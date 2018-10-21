import {
    addError,
    removeError
} from './actionErrors'
import {
    SET_CURRENT_USER
} from './types'
import api from '../service/api'

export const setCurrentsUser = user => ({
    type: SET_CURRENT_USER,
    user
})


export const setToken = token => {
    api.setToken(token)
}

export const logout = () => {
    return dispatch => {
        localStorage.clear()
        api.setToken(null)
        dispatch(setCurrentsUser({}))
        dispatch(removeError())
    }
}


export const authUser = (path, data) => {
    return async dispatch => {
        try {
            const {
                token,
                ...user
            } = await api.call('post', `auth/${path}`, data)
            localStorage.setItem('jwtToken', token)
            api.setToken(token)
            dispatch(setCurrentsUser(user))
            dispatch(removeError())
        } catch (err) {
            const {
                error
            } = err.response.data
            dispatch(addError(error))
        }
    }
}