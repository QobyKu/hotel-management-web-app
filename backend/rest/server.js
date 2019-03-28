define(["require", "exports", "fs", "restify", "../Util"], function (require, exports, fs, restify, Util_1,) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This configures the REST endpoints for the server.
     */
    var Server = /** @class */ (function () {
        function Server(port) {
            Util_1.default.info("Server::<init>( " + port + " )");
            this.port = port;
        }
        /**
         * Stops the server. Again returns a promise so we know when the connections have
         * actually been fully closed and the port has been released.
         *
         * @returns {Promise<boolean>}
         */
        Server.prototype.stop = function () {
            Util_1.default.info("Server::close()");
            var that = this;
            return new Promise(function (fulfill) {
                that.rest.close(function () {
                    fulfill(true);
                });
            });
        };
        /**
         * Starts the server. Returns a promise with a boolean value. Promises are used
         * here because starting the server takes some time and we want to know when it
         * is done (and if it worked).
         *
         * @returns {Promise<boolean>}
         */
        Server.prototype.start = function () {
            var that = this;
            return new Promise(function (fulfill, reject) {
                try {
                    Util_1.default.info("Server::start() - start");
                    that.rest = restify.createServer({
                        // TODO
                        name: "",
                    });
                    that.rest.use(restify.bodyParser({ mapFiles: true, mapParams: true }));
                    that.rest.use(function crossOrigin(req, res, next) {
                        res.header("Access-Control-Allow-Origin", "*");
                        res.header("Access-Control-Allow-Headers", "X-Requested-With");
                        return next();
                    });
                    // Endpoints go here:
                    // http://localhost:6969/login
                    that.rest.get("/login", Server.login);
                    // http://localhost:6969/signup
                    that.rest.post("signup", Server.signup);
                    // http://localhost:6969/listItemsByService
                    that.rest.get("/ListItemsByService", Server.libs);
                    // http://localhost:6969/addCard
                    that.rest.put("/addCard", Server.addCard);
                    // http://localhost:6969/removeCard
                    that.rest.put("/removeCard", Server.removeCard);
                    // http://localhost:6969/updatePassword
                    that.rest.put("/updatePassword", Server.updatePassword);
                    // http://localhost:6969/invoice
                    that.rest.get("/invoice", Server.invoice);
                    // http://localhost:6969/getAllInvoices
                    that.rest.get("/getAllInvoices", Server.getAllInvoices);
                    // http://localhost:6969/getAllRoomTypes
                    that.rest.get("/getAllRoomTypes", Server.getAllRoomTypes);
                    // http://localhost:6969/getBookingsMadeThisMonth
                    that.rest.get("/getBookingsMadeThisMonth", Server.getBookingsMadeThisMonth);
                    // http://localhost:6969/avgInvoiceAmountPerMonth
                    that.rest.get("/avgInvoiceAmountPerMonth", Server.avgInvoiceAmountPerMonth);
                    // http://localhost:6969/getLoyalCustomers
                    that.rest.get("/getLoyalCustomers", Server.getLoyalCustomers);
                    // This must be the last endpoint!
                    that.rest.get("/.*", Server.getStatic);
                    that.rest.listen(that.port, function () {
                        Util_1.default.info("Server::start() - restify listening: " + that.rest.url);
                        fulfill(true);
                    });
                    that.rest.on("error", function (err) {
                        // catches errors in restify start; unusual syntax due to internal
                        // node not using normal exceptions here
                        Util_1.default.info("Server::start() - restify ERROR: " + err);
                        reject(err);
                    });
                }
                catch (err) {
                    Util_1.default.error("Server::start() - ERROR: " + err);
                    reject(err);
                }
            });
        };

        /*
        Server.login = function (req, res, next) {
            Util_1.default.trace("Server::login(..) - params: " + JSON.stringify(req.params));
            try {
                var response = Server.performLogin(req.params.msg);
                Util_1.default.info("Server::login(..) - responding " + 200);
                res.json(200, { result: response });
            }
            catch (err) {
                Util_1.default.error("Server::login(..) - responding 400");
                res.json(400, { error: err });
            }
            return next();
        };
        */
        /*
        Server.performLogin = function (msg) {
            if (typeof msg !== "undefined" && msg !== null) {
                return msg + "..." + msg;
            }
            else {
                return "Message not provided";
            }
        };
        */

        // Login
        Server.login = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT cid FROM DopeHotel.Customer WHERE Customer.UserName = $username AND Customer.Password = $password", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // signup
        Server.signup = function () {
        var mysql = require('mysql');

        var con = mysql.createConnection({
            // TODO
            host: '',
            user: '',
            password: '',
            database: ''
        });

        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO DopeHotel.Customer(Name, PhoneNumber, StAddress, ZipCode, UserName, Password) values ($name, $phoneNumber, $stAddress, $zipCode, $username, $password)";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                });
            });
        };

        // List Items By Service
        Server.libs = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT * FROM DopeHotel.Service s, DopeHotel.Item i WHERE s.ServiceName = i.ServiceName AND s.ServiceName = $serviceName", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // Add Card
        Server.addCard = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "UPDATE Customer SET DopeHotel.CardNumber = $inputRoomCardNumber WHERE cid = $inputCustomerID";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                });
            });
        };

        // Remove Card
        Server.removeCard = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "UPDATE Customer SET DopeHotel.CardNumber = $inputRoomCardNumber WHERE cid = $inputCustomerID";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                });
            });
        };

        // Update Password
        Server.removeCard = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "UPDATE DopeHotel.Customer SET Password = $inputPassword WHERE cid = $inputCustomerID";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(result.affectedRows + " record(s) updated");
                });
            });
        };

        // Invoice
        Server.invoice = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT Invoice.IID, Invoice.totalPrice, Invoice.Status FROM DopeHotel.Booking, DopeHotel.Customer, DopeHotel.Invoice WHERE Booking.CID = Customer.CID AND Booking.IID = Invoice.IID", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // Get Al Invoices
        Server.getAllInvoices = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT * FROM DopeHotel.Invoice", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // Get Al Room Types
        Server.getAllRoomTypes = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT * FROM DopeHotel.RoomType", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // Get Bookings Made This Month
        Server.getBookingsMadeThisMonth = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT COUNT(*) FROM DopeHotel.Booking WHERE MONTH(Booking.StartingDate) = MONTH(NOW())", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // Average Invoice Amount Per Month
        Server.avgInvoiceAmountPerMonth = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                con.query("SELECT AVG(Invoice.TotalPrice) FROM DopeHotel.Invoice, DopeHotel.Booking WHERE Invoice.IID = Booking.IID AND MONTH(Booking.StartingDate) = MONTH(NOW())", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        // Get Loyal Customers
        Server.getLoyalCustomers = function () {
            var mysql = require('mysql');

            var con = mysql.createConnection({
                // TODO
                host: '',
                user: '',
                password: '',
                database: ''
            });

            con.connect(function(err) {
                if (err) throw err;
                // TODO
                con.query("", 
                function (err, result, fields) {
                    if (err) throw err;
                    console.log(result);
                });
            });
        };

        Server.getStatic = function (req, res, next) {
            var publicDir = "frontend/public/";
            Util_1.default.trace("RoutHandler::getStatic::" + req.url);
            var path = publicDir + "index.html";
            if (req.url !== "/") {
                path = publicDir + req.url.split("/").pop();
            }
            fs.readFile(path, function (err, file) {
                if (err) {
                    res.send(500);
                    Util_1.default.error(JSON.stringify(err));
                    return next();
                }
                res.write(file);
                res.end();
                return next();
            });
        };
      
        return Server;
    }());
    exports.default = Server;
})
