import * as ACTION_TYPES from './action_types'


export const addUser = (username) => {
  return {
    type: ACTION_TYPES.ADD_USER,
    username
  }
}


export const addQuestion = (payload) => {
  return {
    type: ACTION_TYPES.ADD_QUESTION,
    payload
  }
}

export const addAnswer = (payload) => {
  return {
    type: ACTION_TYPES.ADD_ANSWER,
    payload
  }
}

export const acceptAnswer = (id) => {
  return {
    type: ACTION_TYPES.ACCEPT_ANSWER,
    id
  }
}
