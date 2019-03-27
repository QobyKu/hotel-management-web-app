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
