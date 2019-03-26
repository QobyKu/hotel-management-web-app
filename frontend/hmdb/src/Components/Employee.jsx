import React from 'react';
import Button from '@material-ui/core/Button';

class EmployeeDashboard extends React.Component {

    state = {
        buttons: [
            { 
                label: "Invoices",
                manager: false
            },
            {
                label: "Room Prices",
                manager: true
            },
            {
                label: "Menu Prices",
                manager: true
            },
            {
                label: "Analytics",
                manager: true
            }
        ]
    }

    isDisabled = (isManagerButton) => {
        // get current employee status in info from localStorage
        let currentEmployeeStatus = "employee";

        if(isManagerButton){
            return currentEmployeeStatus !== "manager";
        }

        return isManagerButton;
    }

    render(){
        return(
            <div>
                Employee Dash
                {this.state.buttons.map( (button, index) => {
                    return (
                    <Button 
                    color="primary" 
                    disabled={this.isDisabled(button.manager)}
                    label={button.label}
                    key={index}
                    >{button.label}</Button>
                    );
                })}
            </div>
        )
    }
}

export default EmployeeDashboard;