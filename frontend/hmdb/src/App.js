import React from 'react';
import Input from '@material-ui/core/Input';

class Booking extends React.Component{
  state = {
    startDate: '',
    endDate: '',
    numPeople: '',
  }

  render() {
    return (
      <div>
        <div class="imgContainer">
          {/* nice image goes here */}
        </div>
        <div class="bookingUserInterface">
         <Input />
        </div>
      </div>
    )
  }
}

export default Booking;