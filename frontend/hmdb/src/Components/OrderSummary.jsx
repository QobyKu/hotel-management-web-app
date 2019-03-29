import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './ButtonAppBar';
import { API_CALL }  from '../api_call';

class OrderSummary extends React.Component {

    state = {
        mockData: true,
        bookingId: '',
        customerName: '',
        customerContact: '',
        startDate: '',
        endDate: '',
        roomType: '',
        price: 0
    }

    createInvoice = async () => {
        let apiCall = API_CALL + 'createInvoice';
        let rawResponse = await fetch(apiCall, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "customerId": localStorage.getItem('customerId'),
            "roomType": this.props.location.state.roomType
          })
        });
      
        let response = rawResponse.json();
        this.createBooking(response.iid);
      
      }
      
      // TODO: /getRoomNumber
      
      createBooking = async (iid) => {
        let apiCall = API_CALL + 'makeBooking';
        let rawResponse = fetch(apiCall, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "startDate": this.props.location.state.startDate,
            "endDate": this.props.location.state.endDate,
            "numPeople": this.props.location.state.numPeople,
            "iid": iid,
            "cid": localStorage.getItem('customerId'),
            "roomNumber": 0,
          })
        });

        let response = rawResponse.json();
        // TODO:
        // set state based on response
      }

      

    componentDidMount() {
        this.setData();
    }

    setData = () => {
        if (this.state.mockData) {
            this.setState({
                bookingId: '3861',
                customerName: 'Pranav',
                customerContact: 'pranav@gmail.com',
                startDate: '2019-04-01',
                endDate: '2019-04-08',
                roomType: 'Deluxe',
                price: 820
            })
        } else {
            // TODO:
            // API call goes here
            this.createInvoice();
        }
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <h1>Thank you for completing your booking with us {this.state.customerName} !</h1>
                <h2>Your booking ID is: {this.state.bookingId}. <br/> A confirmation has been sent to {this.state.customerContact}</h2>
                <h3>You have booked a {this.state.roomType} room from {this.state.startDate} to {this.state.endDate}</h3>
                <h3>Your invoice total is ${this.state.price}</h3>
                <Link to="/dashboard">
                    <Button variant="contained" size="large" color="primary">
                        Home
                    </Button>
                </Link>
            </div>
        );
    }
}

export default OrderSummary;