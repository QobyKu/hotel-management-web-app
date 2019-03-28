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
app.get('/login', function (req, res) {
    connection.connect();

    connection.query('SELECT * Customer WHERE Customer.cid = ' + req.username , function (error, results, fields) {
        if (error) throw error;
        res.send(results)
    });

    console.log('API has been called');

    connection.end();
});
// Start the server
app.listen(6969, () => {
    console.log('Go to http://localhost:6969/posts to see posts');
});

