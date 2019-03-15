import React from 'react';
import TextField from '@material-ui/core/TextField';
import ButtonAppBar from './ButtonAppBar';
import '../css/CustomerBooking.css'

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
        <div class="imgContainer">
          {/* nice image goes here */}
          <img alt="Vancouver" src="https://stmed.net/sites/default/files/vancouver-wallpapers-28962-2594432.jpg" />
        </div>
        <div class="bookingUserInterface">
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
          
        </div>
      </div>
    )
  }
}

export default Booking;