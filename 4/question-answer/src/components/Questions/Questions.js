import React from 'react';
import { connect } from 'react-redux';


import CreateQuestion from './CreateQuestion'
import Question from './Question'


const Questions = (props) => {
     return (
      <div>
        <CreateQuestion />
        <div>Questions</div>
        {props.questions.length 
          ?
            props.questions.map( (q, idx) => {
              return <Question key={idx} data={q} />
            })
          :
            ""
        }
      </div>
    );

}

function mapStateToProps(state) {
  console.log(state)
  return {
    questions: state.questionsReducer.questions || []
  }
}


export default connect(mapStateToProps)(Questions);