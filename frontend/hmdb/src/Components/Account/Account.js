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

class Account extends React.Component {
  state = {
    creditcard: '',
    password: '',
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
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Change Payment Method
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
            id="creditcard"
            name="creditcard"
            label="Credit Card $"
            fullWidth
            autoComplete="cc"
            onChange={this.updateValue}
          />
        </Grid>
      </Grid>
    </React.Fragment>
                  <div className={classes.buttons}>
                  <Button
                      variant="contained"
                      color="primary"
                      onClick={this.clearPayment}
                      className={classes.button}
                    >
                      Clear Payment Method
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.changePayment}
                      className={classes.button}
                    >
                      Change Payment Method
                    </Button>
                    
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Change Password
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
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="pword"
            onChange={this.updateValue}
          />
        </Grid>
      </Grid>
    </React.Fragment>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.changePassword}
                      className={classes.button}
                    >
                      Change Password
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
