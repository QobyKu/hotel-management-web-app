import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import '../LogIn/index.css';
import EmployeeAppBar from '../EmployeeAppBar';
import { API_CALL }  from '../../api_call';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Customer Information'];

class Account extends React.Component {
  state = {
    customerid: 0,
    start: '',
    end: '',
    numPeople: 0,
    roomType: "",
  };

  createInvoice = async () => {
    let apiCall = API_CALL + 'createInvoice';
    let rawResponse = await fetch(apiCall, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "IID": (Math.random()*1000000).toFixed(0).toString(),
        "roomType": this.state.roomType
      })
    });
  
    let response = await rawResponse.json();
    let roomNum = await this.getRoomNumber();
    console.log(response[0].iid);
    console.log(roomNum);
    this.setState({
      "price": response[0].TotalPrice
    });
    this.createBooking(response[0].iid, roomNum);
  }

  getRoomNumber = async () => {
    let apiCall = API_CALL + 'getRoomNumber/roomType/' + this.state.roomType;
    console.log('rt' + this.state.roomType);
    let response = await fetch(apiCall);
    let body = await response.json();
    console.log(body[0].RoomNumber);
    return body[0].RoomNumber;
  }
  
  createBooking = async (iid, roomNum) => {
    let apiCall = API_CALL + 'makeBooking';
    let rawResponse = await fetch(apiCall, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "startDate": this.state.start,
        "endDate": this.state.end,
        "numPeople": this.state.numPeople,
        "IID": iid,
        "customerId": this.state.customerid,
        "roomNumber": roomNum
      })
    });

    let response = await rawResponse.json();
    console.log(response);
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  updateValue = (evt) =>{
    
    // console.log(evt.target.name)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  handleSubmit = (evt) =>{
    console.log(this.state);
  }

  clearPayment = (evt) =>{
    console.log(this.state);
  }

  changePayment = (evt) =>{
    console.log(this.state);
  }

  changePassword = (evt) =>{
    console.log(this.state);
  }
  


  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <div className='overlay'>
      <EmployeeAppBar/>
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create Booking
            </Typography>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" align="center">
                    Thank you for your order.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <React.Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="customerid"
            name="customerid"
            label="Customer ID"
            fullWidth
            autoComplete="cc"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="roomType"
            name="roomType"
            label="Room Type"
            fullWidth
            autoComplete="0"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="start"
            name="start"
            type="date"
            label="Start Date"
            fullWidth
            autoComplete="cc"
            onChange={this.updateValue}
            InputLabelProps={{
                shrink: true,
              }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="end"
            name="end"
            type="date"
            label="End Date"
            InputLabelProps={{
                shrink: true,
              }}
            fullWidth
            autoComplete="end"
            onChange={this.updateValue}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numPeople"
            name="numPeople"
            label="Numer of People"
            fullWidth
            autoComplete="0"
            onChange={this.updateValue}
          />
        </Grid>
      </Grid>
    </React.Fragment>
                  <div className={classes.buttons}>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={this.createInvoice}
                      className={classes.button}
                    >
                      Create Booking
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
      </div>
    );
  }
}

Account.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Account);
