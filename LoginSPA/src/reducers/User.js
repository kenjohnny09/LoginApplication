import * as actions from './../actions/UserActionTypes'
const initialState = {
  currentUser: {},
  userList: []
}

const User = (state = initialState, payload) => {
  switch (payload.type) {
    case actions.RETRIEVE_USER_LIST:
      return Object.assign({}, state, { 
        userList: payload.data,
        currentUser: {}
      })
    case actions.CREATE_USER:
      return Object.assign({}, state, { 
          userList: [...state.userList, payload.data]
        })
    case actions.DELETE_USER:
        console.log(payload.data.user)
      return Object.assign({}, state, {
          userList: state.userList.filter(o => o._id !== payload.data.user._id)
        })
    case actions.GET_USER_DETAIL:
      return Object.assign({}, state, { 
          currentUser: payload.data 
        })
    case actions.CLEAR_CURRENT_USER:
      return Object.assign({}, state, { 
          currentUser: {}
        })
    case actions.UPDATE_CURRENT_USER:
      return Object.assign({}, state, { 
          currentUser: {...state.currentUser, ...payload.data }
        })
    case actions.UPDATE_USER:
      return Object.assign({}, state, { 
          userList: [...state.userList, payload.data]
        })
    case actions.LOGIN_USER:
        return Object.assign({}, state, { 
          currentUser: payload.data 
        })
    case actions.RESET_FORM:
        return Object.assign({}, state, { 
          currentUser: {...state.currentUser = ""}
        })
    default:
      return state;
  }
}

export default User