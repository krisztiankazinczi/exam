import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
  questions: []
}

const questionsReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_TYPES.ADD_QUESTION:
          return {
            ...state,
            questions: [...state.questions, action.payload]
          }
          
      default:
        return state
    }
}

export default questionsReducer;
