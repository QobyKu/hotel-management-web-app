import React from 'react';
import ButtonAppBar from './ButtonAppBar';

class Analytics extends React.Component {

    getBookingsMadeThisMonth = () => {
        // TODO:
        // API Call
        return 32;
    }

    getAverageInvoiceAmountThisMonth = () => {
        // TODO: 
        // API Call
        return 231;
    }

    getLoyalCustomers = () => {
        // TODO: 
        // API Call
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
                <ButtonAppBar />
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