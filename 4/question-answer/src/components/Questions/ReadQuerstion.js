import React from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header'
import Question from './Question'
import AnswerWriter from './AnswerWriter'
import Answer from './Answer'


const ReadQuestion = (props) => {
     return (
      <div>
        <Header />
        {
          props.question  
          ?
          <div>
          <Question data={props.question} />
          <AnswerWriter id={props.question.id} />
          </div>
          :
          ""
        }
        {
            props.answers.length 
            ?
            props.answers.map( (a, idx) => {
              return (<Answer key={idx} data={a} />)
            })
            :
            ""
          }
        
      </div>
    );

}

function mapStateToProps(state, props) {
    const id = props.match.params.id
    const questions = state.questionsReducer.questions
    let question
    if (questions.length) {
      question = questions.find(q => q.id == id)
    }
    console.log(question)
  return {
    question,
    answers: Object.values(state.answersReducer.answers)
  }
}


export default connect(mapStateToProps)(ReadQuestion);