import React from 'react';

import * as ACTIONS from '../../store/actions/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'



class Answer extends React.Component {
  constructor(props) {
    super(props)
  }


  acceptAnswer() {
    this.props.acceptAnswer(this.props.data.id)
  }


  render() {
    console.log(this.props.data)
    return (
      <div>
        {
          this.props.data.map((d, idx) => {
           return( <div style={
              d.accepted
                ?
                { backgroundColor: 'green' }
                :
                { backgroundColor: 'white' }}
            >
              <h3>{d.answer}</h3>
              <button onClick={() => this.acceptAnswer()}>Accept</button>
            </div>)
          })
        }

      </div>
    );
  }


}








function mapDispatchToProps(dispatch) {
  return {
    acceptAnswer: (id) => dispatch(ACTIONS.acceptAnswer(id))
  }
}

export default connect(null, mapDispatchToProps)(Answer);