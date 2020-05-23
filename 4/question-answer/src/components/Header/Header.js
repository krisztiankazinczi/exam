import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom'


import classes from './Header.module.css'



const Header = () => {

    return (
        <Grid container className={classes.Header} direction="row" justify="center">
          <Grid item lg={2} container align="center">
            <Grid item lg={12}>
              
            </Grid>           
          </Grid>
          <Grid item lg={7} container align="center">
            <Grid item lg={12}>
              <Typography variant="h2">My Q&A Site</Typography>
            </Grid>
          </Grid>
          <Grid item lg={3} container  align="end">
            <Grid item lg={12}>
              <Link to="/login">Set User</Link>
              <Typography variant="h6">current user: </Typography>
            </Grid>
          </Grid>
        </Grid>
    );
}

export default Header;
