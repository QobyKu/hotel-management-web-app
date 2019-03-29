import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './ButtonAppBar';
import { API_CALL }  from '../api_call';

class OrderSummary extends React.Component {

    state = {
        mockData: false,
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
            "IID": (Math.random()*1000000).toFixed(0).toString(),
            "roomType": this.props.location.state.roomType
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
        let apiCall = API_CALL + 'getRoomNumber/roomType/' + this.props.location.state.roomType;
        console.log('rt' + this.props.location.state.roomType);
        let response = await fetch(apiCall);
        let body = await response.json();
        console.log(body[0].RoomNumber);
        return body[0].RoomNumber;
      }
      
      createBooking = async (iid, roomNum) => {
        let apiCall = API_CALL + 'makeBooking';
        console.log(localStorage.getItem('customerId'));
        let rawResponse = await fetch(apiCall, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "startDate": this.props.location.state.startDate,
            "endDate": this.props.location.state.endDate,
            "numPeople": this.props.location.state.numPeople,
            "IID": iid,
            "customerId": localStorage.getItem('customerId'),
            "roomNumber": roomNum,
          })
        });

        let response = await rawResponse.json();
        console.log(response);
        this.setState({
          bookingId: response.insertId,
          roomType: this.props.location.state.roomType,
          startDate: this.props.location.state.startDate,
          endDate: this.props.location.state.endDate,          
        });
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
                <h2>Your booking ID is: {this.state.bookingId}.</h2>
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