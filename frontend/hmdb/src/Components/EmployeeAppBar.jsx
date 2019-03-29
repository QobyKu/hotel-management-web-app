import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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

class EmployeeAppBar extends React.Component {


    state = {

    }

    componentDidMount() {
        this.whatToRender();
    }

    whatToRender = () => {
        // TODO: make navbar work for different types of users
        if (this.getStatus()) {
            return (
                <Toolbar>
                    <Link to="/employeelogin"><Button color="inherit"
                        onClick={this.logOut}
                        style={{
                            position: "absolute",
                            right: 20,
                            color: 'white',
                            top: 15
                        }}>Logout</Button></Link>
                </Toolbar>
            );
        } else {
            return (
                <Toolbar>
                    <Link to="/login">
                    <Button color="inherit">
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

export default withStyles(styles)(EmployeeAppBar);