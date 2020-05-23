import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import * as ACTIONS from '../../store/actions/actions'



class AnswerWriter extends React.Component {
  constructor(props) {
    super(props)
    this.answer = React.createRef()
  }


  writeAnswer() {
    const answer = this.answer.current.value
    console.log(answer, this.props.id)
    this.props.addAnswer({question_id: this.props.id, answer, accepted: false})
  }

  render() {
    return (
      <div>
        <div>
          <h3>Answer</h3>
          <input type="text" ref={this.answer}></input>
        </div>
        <div>
          <Button size="small" color="primary" variant="contained" onClick={() => this.writeAnswer()}>
            Send Answer
        </Button>
        </div>
      </div>
    );
  }


}


function mapDispatchToProps(dispatch) {
  return {
    addAnswer: (payload) => dispatch(ACTIONS.addAnswer(payload))
  }
}

export default connect(null, mapDispatchToProps)(AnswerWriter);