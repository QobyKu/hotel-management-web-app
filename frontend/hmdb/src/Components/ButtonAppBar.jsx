import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component  {


  state = {

  }

  componentDidMount(){
    this.whatToRender();
  }

  whatToRender = () => {
    // TODO: make navbar work for different types of users
    if (this.getStatus()){
      return(
        <Toolbar>
        <Link to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
        <Link to="/"><Button color="inherit">Menu</Button></Link>
        <Link to="/customerInvoices"><Button color="inherit">Invoices</Button></Link>
        <Button color="inherit" 
        onClick = {this.logOut()}
        style={{
          position: "absolute",
          right: 20
        }}>Logout</Button>
        <Button color="inherit" 
        style={{
          position: "absolute",
          right: 90
        }}>Account</Button>
      </Toolbar>
      );
    } else {
      return (
        <Toolbar>
          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      );
    }
  }

  logOut = () => {
    localStorage.setItem('logInStatus', false);
  }

  getStatus = () => {
    localStorage.setItem('logInStatus', true);
    return JSON.parse(localStorage.getItem('logInStatus'));
  }

  render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        {this.whatToRender()}
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);