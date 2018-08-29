import * as actions from './UserActionTypes'
import request from 'axios'

const api = "http://localhost:3030"

export const retrieveUsers = () => {
    return dispatch =>{
        request.get(api +"/users")
            .then(result =>{
                dispatch({
                    type: actions.RETRIEVE_USER_LIST,
                    data: result.data
                })
            })
    }
  }

export const getUser = (id) => {
    return dispatch =>{
        request.get(api +"/users/"+id)
            .then(result =>{
                dispatch({
                    type: actions.GET_USER_DETAIL,
                    data: result.data
                })
            })
    }
  }

export const createUser = (data) => {
    return dispatch =>{
        request.post(api +"/users", data)
            .then(result =>{
                dispatch({
                    type: actions.CREATE_USER,
                    data: result.data
                })

                dispatch({
                    type: actions.RESET_FORM
                })
            })
    }
  }

export const updateUser = (data) => {
    return dispatch =>{
        request.put(api +"/users/"+data._id, {...data})
            .then(result =>{
                dispatch({
                    type: actions.UPDATE_USER,
                    data: result.data
                })
            })
    }
}

export const deleteUser = (id) => {
    return dispatch =>{
        request.delete(api +"/users/"+id)
            .then(result =>{
                dispatch({
                    type: actions.DELETE_USER,
                    data: result.data
                })
            })
    }
  }
export const updateCurrentUser = (data) => {
    return {
        type: actions.UPDATE_CURRENT_USER,
        data
    }
  }

  export const loginUser = (data) => {
    return dispatch =>{
        request.post(api +"/login", {...data})
            .then(result =>{
                dispatch({
                    type: actions.LOGIN_USER,
                    data: result.data
                })
            })
    }
  }

  export const resetForm = (data) => {
    return {
        type: actions.RESET_FORM,
        data
    }
  }