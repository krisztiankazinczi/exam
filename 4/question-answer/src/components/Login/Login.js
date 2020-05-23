import React from 'react';
import { Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import * as ACTIONS from '../../store/actions/actions'
import { connect } from 'react-redux';


import classes from './Login.module.css'



class Login extends React.Component {
  constructor(props) {
    super(props)
    this.username = React.createRef()
    this.state = {
      redirect: false
    }
  }
  

  login() {
    this.props.addUser(this.username.current.value)
    this.setState({redirect: true})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
        return <Redirect to='/questions' />
    }
  }


  render() {

    { if (this.state.redirect) {
      return <Redirect to='/questions' />
      }}
     return (
      <Grid container className={classes.Login} direction="row" justify="center">
        <Grid item lg={2} container align="center">
        </Grid>
        <Grid item lg={7} container align="center">
          <Grid item lg={12}>
            <input type="text" ref={this.username}></input>
            <Button size="small" color="primary" variant="contained" onClick={() => this.login()}>
                OK
            </Button>
          </Grid>
        </Grid>
        <Grid item lg={3} container align="end">
        </Grid>
      </Grid>
    );
  }

}



function mapDispatchToProps(dispatch) {
  return {
    addUser: (username) => dispatch(ACTIONS.addUser(username))
  }
}

export default connect(null, mapDispatchToProps)(Login);