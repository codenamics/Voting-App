import {
    SET_POLLS,
    SET_CURRENT_POLL
} from '../actionTypes'
import {
    addError,
    removeError
} from './index'
import api from '../../services/api'

export const setPolls = polls => ({
    type: SET_POLLS,
    polls
})

export const setCurrentPolls = poll => ({
    type: SET_CURRENT_POLL,
    poll
})

export const getPolls = () => {
    return async dispatch => {
        try {
            const polls = await api.call('get', 'polls')
            dispatch(setPolls(polls))
            dispatch(removeError())
        } catch (err) {
            const
                error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

export const getUserPolls = () => {
    return async dispatch => {
        try {
            const polls = await api.call('get', 'polls/user')
            dispatch(setPolls(polls))
            dispatch(removeError())
        } catch (err) {
            const
                error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

export const createPoll = data => {
    return async dispatch => {
        try {
            const poll = await api.call('post', 'polls', data)
            dispatch(setCurrentPolls(poll))
            dispatch(removeError())
        } catch (err) {
            const
                error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

export const getCurrentPoll = id => {
    return async dispatch => {
        try {
            const poll = await api.call('get', `polls/${id}`)
            dispatch(setCurrentPolls(poll))
            dispatch(removeError())
        } catch (err) {
            const
                error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}

export const vote = (id, data) => {
    return async dispatch => {
        try {
            const poll = await api.call('post', `polls/${id}`, data)
            dispatch(setCurrentPolls(poll))
            dispatch(removeError())
        } catch (err) {
            const
                error = err.response.data;
            dispatch(addError(error.message));
        }
    }
}