import React from 'react';

import * as ACTIONS from '../../store/actions/actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'



class Question extends React.Component {
  constructor(props) {
    super(props)
  }




render() {
  return (
    <div>
      <div>
        <h3><Link to={`/questions/${this.props.data.id}`} >{this.props.data.title}</Link></h3>
        <p>{this.props.data.text}</p>
        {
         (this.props.data.tags || []).map( (t, idx) => {
         return ( <span key={idx}>{t}</span>)
         }) 

        }
        </div>
    </div>
  );
}
  

}








function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (payload) => dispatch(ACTIONS.addQuestion(payload))
  }
}

export default connect(null, mapDispatchToProps)(Question);