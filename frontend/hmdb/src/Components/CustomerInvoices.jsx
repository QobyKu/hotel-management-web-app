import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import Invoice from './Invoice';

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
            // TODO:
            // API Call here
        }
    }

    componentWillMount() {
        this.getData();
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