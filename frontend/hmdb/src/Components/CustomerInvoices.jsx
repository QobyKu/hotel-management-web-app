import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import Invoice from './Invoice';
import API_CALL from '../api_call';

class CustomerInvoices extends React.Component {

    state = {
        invoices: [],
        mockData: true
    }

    getData = () => {
        if (this.state.mockData) {
            this.setState({
                invoices:
                    [
                        {
                            iid: 1,
                            price: 90,
                            status: "paid"
                        },
                        {
                            iid: 2,
                            price: 33.2,
                            status: "paid"
                        },
                        {
                            iid: 3,
                            price: 120.98,
                            status: "unpaid"
                        },
                        {
                            iid: 4,
                            price: 87.21,
                            status: "paid"
                        },
                        {
                            iid: 5,
                            price: 23,
                            status: "unpaid"
                        }
                    ]
            })
        } else {
           this.getCustomerInvoices();
        }
    }

    componentWillMount() {
        this.getData();
    }

    getCustomerInvoices = async () => {
        let apiCall = API_CALL + 'invoice/customerId/' + localStorage.getItem('customerId');

        let response = await fetch(apiCall);
        let body = response.json();
        console.log(body);

        // TODO:
        // update state 
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <h2> IID &nbsp; PRICE &nbsp; STATUS &nbsp; </h2>
                {
                    this.state.invoices.map((invoice, i) => {
                        return <Invoice 
                        key={i}
                            iid = {invoice.iid}
                            price = {invoice.price}
                            status = {invoice.status}
                            />
                    })
                }
            </div>
        );
    }
}

export default CustomerInvoices;