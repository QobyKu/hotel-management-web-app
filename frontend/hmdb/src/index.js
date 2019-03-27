import React from 'react';
import ReactDOM from 'react-dom';
import CustomerBooking from './Components/CustomerBooking';
import RoomLister from './Components/RoomLister';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import OrderSummary from './Components/OrderSummary';
import EmployeeDashboard from './Components/Employee';
import LogIn from './Components/LogIn/Login';
import Register from './Components/SignUp/CheckOut';
import Menu from './Components/Menu/Menu.js';
import CustomerInvoices from './Components/CustomerInvoices';
import EmployeeInvoice from './Components/EmployeeInvoice';
import Analytics from './Components/Analytics';
import Account from './Components/Account/Account';

const routing = (
    <Router>
      <div>
        <Route path="/dashboard" component={CustomerBooking} />
        <Route path="/roomLister" component={RoomLister} />
        <Route path="/orderSummary" component={OrderSummary}/>
        <Route path="/employeeDashboard" component={EmployeeDashboard} />
        <Route path="/login" component={LogIn} />
        <Route path="/register" component={Register} />
        <Route path="/menu" component={Menu} />
        <Route path="/customerInvoices" component={CustomerInvoices} />
        <Route path="/employeeInvoices" component={EmployeeInvoice} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/account" component={Account} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))