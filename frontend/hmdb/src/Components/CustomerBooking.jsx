import React from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonAppBar from './ButtonAppBar';
import Button from '@material-ui/core/Button';
import '../css/CustomerBooking.css';
import { Link } from 'react-router-dom';

class Booking extends React.Component {

  // TODO: store values in state + pass them to next page

  state = {
    startDate: '',
    endDate: '',
    numPeople: 0
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <ButtonAppBar />
        <div className="imgContainer">
          {/* nice image goes here */}
          <img alt="Vancouver" src="https://stmed.net/sites/default/files/vancouver-wallpapers-28962-2594432.jpg" />
        </div>
        <div className="bookingUserInterface">
          <h1> Please select your booking dates</h1>
          <TextField
            id="startDate"
            label="Start Date"
            type="date"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="endDate"
            label="End Date"
            type="date"
            onChange={this.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="numPeople"
            label="Number of People"
            type="number"
            onChange={this.handleChange}
          />
          <Button variant="contained" size="large" color="primary" >
           <Link to={{ pathname: '/roomLister', state: this.state }} style={{color: "white"}} >
            Search
          </Link>
        </Button>


        </div>
      </div>
    )
  }
}

export default Booking;