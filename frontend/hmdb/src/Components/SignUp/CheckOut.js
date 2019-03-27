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

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    username: '',
    password: '',
    custname: '',
    phone: '',
    city: '',
    address: '',
    zip: ''
  };

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

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <div className='overlay'>
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Register
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
            id="username"
            name="username"
            label="User Name"
            fullWidth
            autoComplete="uname"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="pword"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="custname"
            name="custname"
            label="Name"
            fullWidth
            autoComplete="name"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="billing address-line1"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={this.updateValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="billing phone"
            onChange={this.updateValue}
          />
        </Grid>
      </Grid>
    </React.Fragment>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleSubmit}
                      className={classes.button}
                    >
                      Create Account
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

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
