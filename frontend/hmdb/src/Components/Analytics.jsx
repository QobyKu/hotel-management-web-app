import React from 'react';
import EmployeeAppBar from './EmployeeAppBar';
import { API_CALL }  from '../api_call';

class Analytics extends React.Component {

    state = {
        bmtm: 0,
        aiatm: 0,
        lc: []
    }

    getBookingsMadeThisMonth = async () => {
        // TODO:
        // API Call
        let apiCall = API_CALL + 'getBookingsMadeThisMonth';
        let response = await fetch(apiCall);
        let body = await response.json();
        this.setState({
            bmtm: Object.values(body[0])[0]
        });
    }

    getAverageInvoiceAmountThisMonth = async () => {
        // TODO: 
        // API Call
        let apiCall = API_CALL + 'avgInvoiceAmountPerMonth';
        let response = await fetch(apiCall);
        let body = await response.json();
        this.setState({
            aiatm: Object.values(body[0])[0]
        });
    }

    getLoyalCustomers = async () => {
        // TODO: 
        // API Call
        let apiCall = API_CALL + 'getLoyalCustomers';
        let response = await fetch(apiCall);
        let body = await response.json();
        console.log(body);
        this.setState({
            lc: body
        });
    }

    componentDidMount(){
        this.getLoyalCustomers();
        this.getAverageInvoiceAmountThisMonth();
        this.getBookingsMadeThisMonth();
    }

    render() {
        return(
            <div>
                <EmployeeAppBar />
                <h2>Bookings made this month: {this.state.bmtm} </h2>
                <h2>Average invoice amount this month: ${this.state.aiatm}</h2>
                <h2>Loyal Customers</h2>
                {this.state.lc.map((customer, i) => {
                    return <p key={i}>{customer.Name}</p>
                })}
            </div>
        )
    }

}

export default Analytics;