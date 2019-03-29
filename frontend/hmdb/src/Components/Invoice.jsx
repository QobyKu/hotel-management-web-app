import React from 'react';
import Button from '@material-ui/core/Button';
import SimpleModalWrapped from './Modal';
import { API_CALL }  from '../api_call';


class Invoice extends React.Component {

    renderButton = (status) => {
        if(status === "Paid") {
            return(
                <Button disabled>Paid</Button>
            );
        } else if (status === "Unpaid" || status === null) {
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
    let apiCall = API_CALL + 'changeInvoiceStatus';

    let rawResponse = await fetch(apiCall, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "IID": this.props.iid
      })
    });

    let response = await rawResponse.json();
    console.log(response);

    window.location.reload();

  }

    render() {
        return(
            <div>
                <h2>{this.props.iid} ${this.props.price} {this.renderButton(this.props.status)}</h2>
            </div>
        )
    }

}

export default Invoice;