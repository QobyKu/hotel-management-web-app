import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class EmployeeDashboard extends React.Component {

    state = {
        buttons: [
            {
                label: "Make Booking",
                manager: false,
                path: "/booking"
            },
            {
                label: "Invoices",
                manager: false,
                path: "/employeeInvoices"
            },
            {
                label: "Edit Room Prices",
                manager: true,
                path: "/editRoom"
            },
            {
                label: "Edit Menu Prices",
                manager: true,
                path: "/editMenu"
            },
            {
                label: "Analytics",
                manager: true,
                path: "/analytics"
            }
        ]
    }

    isDisabled = (isManagerButton) => {
        // TODO: figure out flow for this
        // get current employee status in info from localStorage
        let currentEmployeeStatus = "manager";

        if (isManagerButton) {
            return currentEmployeeStatus !== "manager";
        }

        return isManagerButton;
    }

    render() {
        return (
            <div>
                Employee Dash
                {this.state.buttons.map((button, index) => {
                    return (
                        <Link
                            to={{ pathname: button.path }}
                        >
                            <Button
                                color="primary"
                                disabled={this.isDisabled(button.manager)}
                                label={button.label}
                                key={index}
                            >{button.label}</Button>
                        </Link>
                    );
                })}
            </div>
        )
    }
}

export default EmployeeDashboard;