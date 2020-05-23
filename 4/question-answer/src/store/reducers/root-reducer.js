import { combineReducers } from 'redux';
import userReducer from './user-reducer'
import questionsReducer from './questions-reducer'
import answersReducer from './answers-reducer'


const rootReducer = combineReducers({
  userReducer,
  questionsReducer,
  answersReducer
})

export default rootReducer;
