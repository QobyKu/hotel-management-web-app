import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonAppBar from './ButtonAppBar';

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