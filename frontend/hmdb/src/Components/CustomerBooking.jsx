import React from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonAppBar from './ButtonAppBar';
import Button from '@material-ui/core/Button';
import '../css/CustomerBooking.css';
import { Link } from 'react-router-dom';

class Booking extends React.Component {
  state = {
    startDate: '',
    endDate: '',
    numPeople: '',
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
            id="sDate"
            label="Start Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="eDate"
            label="End Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="numPeople"
            label="Number of People"
            type="number"
          />
          <Link to="/roomLister">
          <Button variant="contained" size="large" color="primary">
            Search
        </Button>
        </Link>

        </div>
      </div>
    )
  }
}

export default Booking;