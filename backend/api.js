// this will be the express.js file that uses node to make API calls to MySQL server
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3285727',
    password: 'L7LryKqvKD',
    database: 'sql3285727'
});

// Initialize the app
const app = express();
app.use(express.json());

app.get('/test/cid/:cid', function (req, res) {
    let x = req.params.cid;
    console.log(x);
    connection.query(`SELECT * FROM Customer WHERE Customer.UserName='${x}';`, function (error, results) {
        if(error) throw error;
        res.send(results);
    });
});

// login
// http://localhost:6969/login
app.get('/login/username/:username/password/:password', function (req, res) {

    var user_name = req.params.username;
    var password = req.params.password;

    console.log(user_name);
    console.log(password);
    connection.query(`SELECT cid FROM Customer WHERE Customer.UserName = '${user_name}' AND Customer.Password = '${password}';`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

// signup
// http://localhost:6969/signup
app.post('/signup', function (req, res) {

    console.log(req.body);

    var user_name = req.body.username;
    var password = req.body.password;
    var name = req.body.name;
    var phone_number = req.body.phoneNumber;
    var street_address = req.body.stAddress;
    var zip_code = req.body.zipCode;


    connection.query(` INSERT INTO Customer(Name, PhoneNumber, StAddress, ZipCode, UserName, Password) VALUES ('${name}', '${phone_number}', '${street_address}', '${zip_code}', '${user_name}', '${password}'); `, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

});

// Find Rooms
// http://localhost:6969/findRooms
app.get('/findRooms/numPeople/:numPeople/startDate/:startDate/endDate/:endDate', function (req, res) {
    connection.connect();

    var number_of_people = req.params.numPeople;
    var start_date = req.params.startDate;
    var end_date = req.params.endDate;

    connection.query(`SELECT rt.Name FROM DopeHotel.RoomType rt, DopeHotel.Room r, DopeHotel.booking b WHERE rt.Name = r.RoomType AND r.RoomNumber = b.RoomNumber AND '${start_date}'> b.endDate AND '${end_date}'< StartingDate AND '${number_of_people}'<= rt.NumberOfPeople`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Make Booking
// http://localhost:6969/makeBooking
app.post('/makeBooking', function (req, res) {
    connection.connect();

    var starting_date = req.body.startDate;
    var end_date = req.body.endDate;
    var room_number = req.body.roomNumber;
    var number_of_people = req.body.numPeople;
    var customer_id = req.body.customerId;
    var invoice_id = req.body.IID;

    connection.query(`INSERT INTO DopeHotel.Booking(StartingDate, EndDate, RoomNumber, NumberOfPeople, CID, IID) VALUES ('${starting_date}', '${end_date}', '${room_number}', '${number_of_people}', '${customer_id}', '${invoice_id}');`, function (error, results, fields) {
        if (error) throw error;
        res.end('yes');
    });

    connection.end();
    
});

// List Items By Service
// http://localhost:6969/listItemsByService
app.get('/listItemsByService/serviceName/:serviceName', function (req, res) {
    connection.connect();

    var service_name = req.body.serviceName;

    connection.query(`SELECT * FROM DopeHotel.Service s, DopeHotel.Item i WHERE s.ServiceName = i.ServiceName AND s.ServiceName = '${service_name}';`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Update Card
// http://localhost:6969/updateCard
app.post('/updateCard', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;
    var card_number = req.body.cardNumber;

    connection.query(`UPDATE Customer SET DopeHotel.CardNumber = '${card_number}' WHERE cid = '${customer_id}';`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Remove Card
// http://localhost:6969/removeCard
app.post('/removeCard', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;

    connection.query(`UPDATE Customer SET DopeHotel.CardNumber = '' WHERE cid =
    '${customer_id}'`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Update Password
// http://localhost:6969/updatePassword
app.post('/updatePassword', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;
    var password = req.body.password;

    connection.query(`UPDATE DopeHotel.Customer SET Password = '${password}' WHERE cid = 
    '${customer_id}';`, function (error, results, fields) {
        if (error) throw error;
        res.end(results);
    });

    connection.end();
    
});

// Invoice
// http://localhost:6969/invoice
app.get('/invoice/customerId/:customerId', function (req, res) {
    connection.connect();

    var customer_id = req.body.customerId;

    connection.query(`SELECT Invoice.IID, Invoice.totalPrice, Invoice.Status FROM DopeHotel.Booking, DopeHotel.Customer, DopeHotel.Invoice WHERE Booking.CID = 
    '${customer_id}' AND Booking.IID = Invoice.IID';`, function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Get All Invoices
// http://localhost:6969/getAllInvoices
app.get('/getAllInvoices', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM DopeHotel.Invoice', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Get All Room Types
// http://localhost:6969/getAllRoomTypes
app.get('/getAllRoomTypes', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM DopeHotel.RoomType', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Get Bookings Made This Month
// http://localhost:6969/getBookingsMadeThisMonth
app.get('/getBookingsMadeThisMonth', function (req, res) {
    connection.connect();

    connection.query('SELECT COUNT(*) FROM DopeHotel.Booking WHERE MONTH(Booking.StartingDate) = MONTH(NOW())', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Average Invoice Amount Per Month
// http://localhost:6969/avgInvoiceAmountPerMonth
app.get('/avgInvoiceAmountPerMonth', function (req, res) {
    connection.connect();

    connection.query('SELECT AVG(Invoice.TotalPrice) FROM DopeHotel.Invoice, DopeHotel.Booking WHERE Invoice.IID = Booking.IID AND MONTH(Booking.StartingDate) = MONTH(NOW())', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Get Loyal Customers
// http://localhost:6969/getLoyalCustomers
app.get('/getLoyalCustomers', function (req, res) {
    connection.connect();

    connection.query('SELECT c.Name FROM DopeHotel.Customer c WHERE NOT EXISTS (SELECT * FROM DopeHotel.RoomType rt WHERE NOT EXISTS (SELECT b.BID FROM DopeHotel.Booking b, DopeHotel.Room r WHERE b.CID = c.CID AND rt.Name = r.RoomType AND r.RoomNumber = b.RoomNumber));', function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });

    connection.end();
    
});

// Change Invoice Status
// http://localhost:6969/changeInvoiceStatus
app.post('/changeInvoiceStatus', function (req, res) {
    connection.connect();

    var invoice_id = req.body.IID;

    connection.query(`UPDATE DopeHotel.Invoice SET Status = 'Paid' WHERE iid = '${invoice_id}';`, function (error, results, fields) {
        if (error) throw error;
        res.end(results);
    });

    connection.end();
    
});

// Add Item To Invoice
// http://localhost:6969/addItemToInvoice
app.post('/addItemToInvoice', function (req, res) {
    connection.connect();

    var invoice_id = req.body.IID;
    var service_name = req.body.serviceName;
    var item_name = req.body.itemname;

    connection.query(`INSERT INTO DopeHotel.InvoiceLine VALUES ('${invoice_id}', '${service_name}', '${item_name}');`, function (error, results, fields) {
        if (error) throw error;
        res.end(results);
    });

    connection.end();
    
});

// Edit Item Price
// http://localhost:6969/editPrice
app.post('/editPrice', function (req, res) {
    connection.connect();

    var item_name = req.body.itemName;
    var service_name = req.body.serviceName;
    var price = req.body.newPrice;

    connection.query(`UPDATE DopeHotel.Item SET Price = '${price}', WHERE ItemName = '${item_name}' AND ServiceName = '${service_name}';`, function (error, results, fields) {
        if (error) throw error;
        res.end(results);
    });

    connection.end();
    
});

// Edit Room Price
// http://localhost:6969/editRoomPrice
app.post('/editRoomPrice', function (req, res) {
    connection.connect();

    var room_type_name = req.body.roomTypeName;
    var price = req.body.newPrice;

    connection.query(`UPDATE DopeHotel.RoomType SET Price = '${price}' WHERE Name = '${room_type_name}';`, function (error, results, fields) {
        if (error) throw error;
        res.end(results);
    });

    connection.end();
    
});

// Start the server
app.listen(6969, () => {
    console.log('Go to http://localhost:6969/posts to see posts');
});