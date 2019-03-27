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
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))