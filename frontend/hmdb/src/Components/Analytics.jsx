import React from 'react';
import EmployeeAppBar from './EmployeeAppBar';
import { API_CALL }  from '../api_call';

class Analytics extends React.Component {

    getBookingsMadeThisMonth = async () => {
        // TODO:
        // API Call
        let apiCall = API_CALL + '/getBookingsMadeThisMonth';
        let response = await fetch(apiCall);
        let body = response.json();
        return 32;
    }

    getAverageInvoiceAmountThisMonth = async () => {
        // TODO: 
        // API Call
        let apiCall = API_CALL + '/averageInvoiceAmountPerMOnth';
        let response = await fetch(apiCall);
        let body = response.json();
        return 231;
    }

    getLoyalCustomers = async () => {
        // TODO: 
        // API Call
        let apiCall = API_CALL + '/getLoyalCustomers';
        let response = await fetch(apiCall);
        let body = response.json();
        return ([
            {
                fName: 'John',
                lName: 'Smith'
            },
            {
                fName: 'Amy',
                lName: 'Larson'
            },
            {
                fName: 'Max',
                lName: 'McTart'
            },
            
        ]);
    }

    render() {
        return(
            <div>
                <EmployeeAppBar />
                <h2>Bookings made this month: {this.getBookingsMadeThisMonth()} </h2>
                <h2>Average invoice amount this month: ${this.getAverageInvoiceAmountThisMonth()}</h2>
                <h2>Loyal Customers</h2>
                {this.getLoyalCustomers().map((customer, i) => {
                    return <p key={i}>{customer.fName}, {customer.lName}</p>
                })}
            </div>
        )
    }

}

export default Analytics;