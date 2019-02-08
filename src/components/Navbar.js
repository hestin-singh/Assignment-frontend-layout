import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar:{
      color:'red',
      flexGrow:1
  }
};

const  Navbar =(props)=> {
  const { classes } = props;
  return (
    <div className={classes.root}  >
      <AppBar position="static">
        <Toolbar >
          <Typography align="center" variant="h6" className={ classes.navbar}>
            
          </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}



export default withStyles(styles)(Navbar);