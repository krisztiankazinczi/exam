import * as ACTION_TYPES from '../actions/action_types'


const initialState = {
  answers: {}
}

const answersReducer = (state = initialState, action) => {
  let isItInState
    switch(action.type) {
        case ACTION_TYPES.ADD_ANSWER:
          isItInState = action.payload.question_id in state.answers 
          console.log(action.payload)
          return {
            ...state,
            answers: isItInState ?
                      {...state.answers, [action.payload.question_id]: [...state.answers[action.payload.question_id], action.payload]}
                      :
                      {...state.answers, [action.payload.question_id]: [action.payload]}
          }
          case ACTION_TYPES.ACCEPT_ANSWER:
            isItInState = action.payload.question_id in state.answers 
            return {
              ...state,
              answers: isItInState 
                          ?
                            {...state.answers, [action.payload.question_id]: {...state.answers[action.payload.question_id], accepted: true}}
                            :
                            {...state.answers}
            }
          
      default:
        return state
    }
}

export default answersReducer;
