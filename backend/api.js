// this will be the express.js file that uses node to make API calls to MySQL server
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
    // TODO
    host: '',
    // TODO
    user: '',
    // TODO
    password: '',
    // TODO
    database: ''
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/posts', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM posts LIMIT 0, 10', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
});

// login
// http://localhost:6969/login
app.get('/login', function (req, res) {
    connection.connect();

    var user_name = req.body.username;
    var password = req.body.password;

    connection.query('SELECT cid FROM DopeHotel.Customer WHERE Customer.UserName = '
    +user_name+'AND Customer.Password = ' +password, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// signup
// http://localhost:6969/signup
app.post('/signup', function (req, res) {
    connection.connect();

    var user_name = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var phone_number = req.body.phoneNumber;
    var city = req.body.name;
    var street_address = req.body.stAddress;
    var zip_code = req.body.zipCode;

    connection.query('INSERT INTO DopeHotel.Customer(Name, PhoneNumber, City, StAddress, ZipCode, UserName, Password) values ('+name+
    ', '+phone_number+', '+city+', '+street_address+', '+zip_code+', '+user_name+', '+password+')', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// List Items By Service
// http://localhost:6969/listItemsByService
app.get('/listItemsByService', function (req, res) {
    connection.connect();

    var service_name = req.body.serviceName;

    connection.query('SELECT * FROM DopeHotel.Service s, DopeHotel.Item i WHERE s.ServiceName = i.ServiceName AND s.ServiceName = '
    +service_name, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Add Card
// http://localhost:6969/addCard
app.put('/addCard', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;
    var card_number = req.body.cardNumber;

    connection.query('UPDATE Customer SET DopeHotel.CardNumber = '+card_number+'WHERE cid = '
    +customer_id, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Remove Card
// http://localhost:6969/removeCard
app.put('/removeCard', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;
    var card_number = req.body.cardNumber;

    connection.query('UPDATE Customer SET DopeHotel.CardNumber = '+card_number+'WHERE cid = '
    +customer_id, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Update Password
// http://localhost:6969/updatePassword
app.put('/updatePassword', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;
    var password = req.body.password;

    connection.query('UPDATE DopeHotel.Customer SET Password = '+password+'WHERE cid = '
    +customer_id, function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Invoice
// http://localhost:6969/invoice
app.get('/invoice', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;

    connection.query('SELECT Invoice.IID, Invoice.totalPrice, Invoice.Status FROM DopeHotel.Booking, DopeHotel.Customer, DopeHotel.Invoice WHERE Booking.CID = '
    +customer_id+'AND Booking.IID = Invoice.IID', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Get All Invoices
// http://localhost:6969/getAllInvoices
app.get('/getAllInvoices', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM DopeHotel.Invoice', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Get All Room Types
// http://localhost:6969/getAllRoomTypes
app.get('/getAllRoomTypes', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM DopeHotel.RoomType', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Get Bookings Made This Month
// http://localhost:6969/getBookingsMadeThisMonth
app.get('/getBookingsMadeThisMonth', function (req, res) {
    connection.connect();

    connection.query('SELECT COUNT(*) FROM DopeHotel.Booking WHERE MONTH(Booking.StartingDate) = MONTH(NOW())', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Average Invoice Amount Per Month
// http://localhost:6969/avgInvoiceAmountPerMonth
app.get('/avgInvoiceAmountPerMonth', function (req, res) {
    connection.connect();

    connection.query('SELECT AVG(Invoice.TotalPrice) FROM DopeHotel.Invoice, DopeHotel.Booking WHERE Invoice.IID = Booking.IID AND MONTH(Booking.StartingDate) = MONTH(NOW())', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Get Loyal Customers
// http://localhost:6969/getLoyalCustomers
app.get('/getLoyalCustomers', function (req, res) {
    connection.connect();

    connection.query('SELECT c.Name FROM DopeHotel.Customer c WHERE NOT EXISTS (SELECT * FROM DopeHotel.RoomType rt WHERE NOT EXISTS (SELECT b.BID FROM DopeHotel.Booking b, DopeHotel.Room r WHERE b.CID = c.CID AND rt.Name = r.RoomType AND r.RoomNumber = b.RoomNumber));', function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    connection.end();
    
});

// Start the server
app.listen(6969, () => {
    console.log('Go to http://localhost:6969/posts to see posts');
});

/* 
const Server_1 = require("./rest/Server");
const Util_1 = require("./Util");
class App {
    initServer(port) {
        Util_1.default.info("App::initServer( " + port + " ) - start");
        const server = new Server_1.default(port);
        server.start().then(function (val) {
            Util_1.default.info("App::initServer() - started: " + val);
        }).catch(function (err) {
            Util_1.default.error("App::initServer() - ERROR: " + err.message);
        });
    }
}
exports.App = App;
Util_1.default.info("App - starting");
const app = new App();
app.initServer(4321);
//# sourceMappingURL=App.js.map
*/
