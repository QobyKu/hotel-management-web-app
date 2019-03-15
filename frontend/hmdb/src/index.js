import React from 'react';
import ReactDOM from 'react-dom';
import CustomerBooking from './Components/CustomerBooking';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
    <Router>
      <div>
        <Route path="/dashboard" component={CustomerBooking} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))