import React from 'react';
import Invoice from './Invoice';
import EmployeeAppBar from './EmployeeAppBar';
import { API_CALL }  from '../api_call';

class EmployeeInvoice extends React.Component {

    state = {
        invoices: [],
        mockData: false
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
            this.getAllInvoices();
        }
    }


    getAllInvoices = async () => {
        let apiCall = API_CALL + 'getAllInvoices';

        let response = await fetch(apiCall);
        let body = await response.json();
        console.log(body);

        this.setState({
            invoices: body
        })
    }

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <EmployeeAppBar />
                <h2> IID &nbsp; PRICE &nbsp; STATUS &nbsp; </h2>
                {
                    this.state.invoices.map((invoice, i) => {
                        return <Invoice 
                            key={i}
                            iid = {invoice.IID}
                            price = {invoice.TotalPrice}
                            status = {invoice.Status}
                            />
                    })
                }
            </div>
        );
    }
}

export default EmployeeInvoice;