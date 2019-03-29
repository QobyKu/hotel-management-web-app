import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleModalWrapped from './Modal';
import { API_CALL }  from '../api_call';


class Invoice extends React.Component {

    renderButton = (status) => {
        if(status === "paid") {
            return(
                <Button disabled>Paid</Button>
            );
        } else if (status === "unpaid") {
            return (
                <Button onClick={this.payInvoice}> Pay </Button>
            )
        }
    }

    renderAdd = () => {
        let isEmployee = !(localStorage.getItem('status') === "customer")
        if (isEmployee) {
            return (
                <div>
                <SimpleModalWrapped />
                </div>
            )
        }
    }

    payInvoice = async () => {
        let apiCall = API_CALL + '/changeInvoiceStatus/iid/' + this.props.iid;
        let response = await fetch(apiCall);
        this.render();
    }

    render() {
        return(
            <div>
                <h2>{this.props.iid} ${this.props.price} {this.renderButton(this.props.status)} {this.renderAdd()}</h2>
            </div>
        )
    }

}

export default Invoice;