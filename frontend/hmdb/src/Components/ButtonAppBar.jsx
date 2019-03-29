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
    if (this.getStatus()){
      return(
        <Toolbar>
        <Link to="/dashboard" ><Button style={{color: 'white'}}>Dashboard</Button></Link>
        <Link to="/menu"><Button style={{color: 'white'}}>Menu</Button></Link>
        <Link to="/customerInvoices"><Button style={{color: 'white'}}>Invoices</Button></Link>
        <Link to="/login"><Button
        onClick = {this.logOut}
        style={{
          position: "absolute",
          right: 20,
          color: 'white',
          top: 15
        }}>Logout</Button></Link>
        <Link to="/account"><Button color="inherit" 
        style={{
          position: "absolute",
          right: 90,
          color: 'white',
          top: 15
        }}>Account</Button></Link>
      </Toolbar>
      );
    } else {
      return (
        <Toolbar>
          <Link to="/login"><Button color="inherit"
          style={{color: 'white'}}>
            Login
          </Button>
          </Link>
        </Toolbar>
      );
    }
  }

  logOut = () => {
    console.log('I have logged out');
    localStorage.setItem('logInStatus', false);
    localStorage.setItem('status', '');
    localStorage.setItem('customerId', '');
  }

  getStatus = () => {
    // localStorage.setItem('logInStatus', true);
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