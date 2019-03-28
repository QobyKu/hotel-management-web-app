import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API_CALL from '../api_call';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
    iid: '',
    sid: '',
    itemName: ''
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateValue = (evt) =>{
    this.setState({
      [evt.target.id]: evt.target.value
    })
  }


  addToInvoice = async () => {
    let apiCall = API_CALL + '/addItemToInvoice/iid/' + this.state.iid + '/serviceName/' + this.state.sid + '/itemName/' + this.state.itemName;

    await fetch(apiCall);
    alert('Item has been added');
    window.location.reload();

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Add Item</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
          <Typography>Add Item To Invoice</Typography>
          <TextField
            id="iid"
            label="IID"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="sid"
            label="Service ID"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
            <TextField
            id="itemName"
            label="Item Name"
            type="text"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onClick={this.addToInvoice}> Add </Button>
          <Button onClick={this.handleClose}> Close </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;