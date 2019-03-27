import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleModalWrapped from './Modal';


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
        let employee = true;
        if (employee) {
            return (
                <div>
                <SimpleModalWrapped />
                </div>
            )
        }
    }

    payInvoice = () => {
        // TODO:
        // refresh page
        // API Call
        // this.props.status = "paid";
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