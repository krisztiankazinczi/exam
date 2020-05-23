import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_TYPES.ADD_USER:
          const idx = state.users.findIndex(s => s.username === action.username)
          if (idx > -1) {
            return {
              ...state
            }
          }
          return {
            ...state,
            users: [...state.users, action.username]
          }
          
      default:
        return state
    }
}

export default userReducer;
