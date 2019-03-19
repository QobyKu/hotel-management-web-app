import React from 'react';
import ReactDOM from 'react-dom';
import CustomerBooking from './Components/CustomerBooking';
import RoomLister from './Components/RoomLister';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import OrderSummary from './Components/OrderSummary';

const routing = (
    <Router>
      <div>
        <Route path="/dashboard" component={CustomerBooking} />
        <Route path="/roomLister" component={RoomLister} />
        <Route path="/orderSummary" component={OrderSummary}/>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))