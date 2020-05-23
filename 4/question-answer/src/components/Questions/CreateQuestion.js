import React from 'react';

import * as ACTIONS from '../../store/actions/actions'
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';




class CreateQuestion extends React.Component {
  constructor(props) {
    super(props)
    this.title = React.createRef()
    this.text = React.createRef()
    this.tags = React.createRef()
  }


  saveQuestion() {
    const title = this.title.current.value
    const text = this.text.current.value
    let tags = this.tags.current.value
    tags = tags.split(',')

    const id = Math.floor(Math.random() * 100000000000)

    this.props.addQuestion({id, title, text, tags})
  }



render() {
  return (
    <div>
      <div>
        <h3>Title</h3>
        <input type="text" ref={this.title}></input>
      </div>
      <div>
        <h3>Text</h3>
        <input type="text" ref={this.text}></input>
      </div>
      <div>
        <h3>Tags (please use ',' between tags)</h3>
        <input type="text" ref={this.tags}></input>
      </div>
      <div>
        <Button size="small" color="primary" variant="contained" onClick={() => this.saveQuestion()}>
          OK
        </Button>
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

export default connect(null, mapDispatchToProps)(CreateQuestion);