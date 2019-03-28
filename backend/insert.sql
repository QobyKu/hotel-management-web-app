DROP TABLE Booking;
DROP TABLE Customer;
DROP TABLE Employee;
DROP TABLE Invoice;
DROP TABLE InvoiceLine;
DROP TABLE Item;
DROP TABLE Manager;
DROP TABLE RankSalary;
DROP TABLE Room;
DROP TABLE RoomType;
DROP TABLE Service;
DROP TABLE TitleSalary;
DROP TABLE ZipCodeCity;

CREATE TABLE ZipCodeCity (
  ZipCode varchar(45) NOT NULL,
  City longtext,
  PRIMARY KEY (ZipCode)
);

CREATE TABLE Customer (
  CID int(11) NOT NULL AUTO_INCREMENT,
  Name varchar(45) DEFAULT NULL,
  PhoneNumber int(11) DEFAULT NULL,
  StAddress varchar(45) DEFAULT NULL,
  PaymentMethod varchar(45) DEFAULT 'CASH',
  CardNumber int(11) DEFAULT NULL,
  ZipCode varchar(45) DEFAULT NULL,
  UserName varchar(45) DEFAULT NULL,
  Password varchar(45) DEFAULT NULL,
  PRIMARY KEY (CID),
  CONSTRAINT ZipCode FOREIGN KEY (ZipCode) REFERENCES ZipCodeCity (ZipCode) ON DELETE SET NULL ON UPDATE RESTRICT
);

CREATE TABLE RankSalary (
  Rank int(11) NOT NULL,
  Salary int(11) DEFAULT NULL,
  PRIMARY KEY (Rank)
); 

CREATE TABLE TitleSalary (
  Title varchar(45) NOT NULL,
  Salary int(11) DEFAULT NULL,
  PRIMARY KEY (Title)
);

CREATE TABLE Employee (
  EID varchar(45) NOT NULL,
  LastName varchar(45) DEFAULT NULL,
  FirstName varchar(45) DEFAULT NULL,
  Title varchar(45) DEFAULT 'Unemployed',
  PRIMARY KEY (EID),
  CONSTRAINT Title FOREIGN KEY (Title) REFERENCES TitleSalary (Title) ON DELETE SET NULL
);

CREATE TABLE Manager (
  EID varchar(45) NOT NULL,
  LastName varchar(45) DEFAULT NULL,
  FirstName varchar(45) DEFAULT NULL,
  Rank int(11) DEFAULT NULL,
  PRIMARY KEY (EID),
  CONSTRAINT Rank FOREIGN KEY (Rank) REFERENCES RankSalary (Rank)
); 

CREATE TABLE RoomType (
  Name varchar(45) NOT NULL,
  Price int(11) DEFAULT NULL,
  NumberOfBeds int(11) DEFAULT NULL,
  NumberOfPeople int(11) DEFAULT NULL,
  PRIMARY KEY (Name)
);

CREATE TABLE Room (
  RoomNumber int(11) NOT NULL,
  RoomType varchar(45) DEFAULT 'Construction',
  PRIMARY KEY (RoomNumber),
  FOREIGN KEY (RoomType) REFERENCES RoomType (Name) ON DELETE CASCADE
);

CREATE TABLE Service (
  ServiceName varchar(45) NOT NULL,
  PRIMARY KEY (ServiceName)
);

CREATE TABLE Item (
  Name varchar(45) NOT NULL,
  Price int(11) DEFAULT NULL,
  ServiceName varchar(45) NOT NULL,
  PRIMARY KEY (Name, ServiceName),
  CONSTRAINT ServiceName FOREIGN KEY (ServiceName) REFERENCES Service (ServiceName)
);

CREATE TABLE Invoice (
  IID varchar(45) NOT NULL,
  TotalPrice int(11) DEFAULT NULL,
  Status varchar(45) DEFAULT NULL,
  PRIMARY KEY (IID)
);

CREATE TABLE InvoiceLine (
  IID1 varchar(45) NOT NULL,
  ServiceName1 varchar(45) NOT NULL,
  ItemName1 varchar(45) NOT NULL,
  PRIMARY KEY (IID1, ServiceName1, ItemName1),
  CONSTRAINT IID1 FOREIGN KEY (IID1) REFERENCES Invoice (IID) ON DELETE CASCADE,
  CONSTRAINT ItemName1 FOREIGN KEY (ItemName1) REFERENCES Item (Name),
  CONSTRAINT ServiceName1 FOREIGN KEY (ServiceName1) REFERENCES Service (ServiceName)
);

CREATE TABLE Booking (
  BID int(11) NOT NULL AUTO_INCREMENT,
  StartingDate datetime DEFAULT NULL,
  EndDate datetime DEFAULT NULL,
  RoomNumber int(11) DEFAULT NULL,
  NumberOfPeople int(11) DEFAULT NULL,
  CID int(11) NOT NULL,
  IID int(11) DEFAULT NULL,
  PRIMARY KEY (BID),
  FOREIGN KEY (CID) REFERENCES Customer (CID),
  FOREIGN KEY (RoomNumber) REFERENCES Room (RoomNumber)
);


INSERT INTO sql3285727.ZipCodeCity VALUES('V6T1Z4','Vancouver');
INSERT INTO sql3285727.ZipCodeCity VALUES('V3J1P2', 'Burnaby');
INSERT INTO sql3285727.ZipCodeCity VALUES('V6T1M1', 'Vancouver');
INSERT INTO sql3285727.ZipCodeCity VALUES('V8T3K4', 'North Vancouver');
INSERT INTO sql3285727.ZipCodeCity VALUES('V6T1Z3', 'Richmond');
INSERT INTO sql3285727.ZipCodeCity VALUES('V5T1Z9', 'Vancouver');
INSERT INTO sql3285727.ZipCodeCity VALUES('V6T1P2', 'Surrey');
INSERT INTO sql3285727.ZipCodeCity VALUES('V6T1T1', 'Coquitlam');
INSERT INTO sql3285727.ZipCodeCity VALUES('V6T3K4', 'North Vancouver');
INSERT INTO sql3285727.ZipCodeCity VALUES('V3G1Z4', 'Richmond');
INSERT INTO sql3285727.Customer VALUES(1, 'John Doe', 1245498200, '2234 Birch Street', 'VISA', 1839402930, 'V6T1Z4', 'johndoe123', 'foauro9dj');
INSERT INTO sql3285727.Customer VALUES(2, 'Michael Smith', 1245498201, '3353 Vine Street', 'CASH', NULL,'V3J1P2', 'warriorNNN', 'passssss123');
INSERT INTO sql3285727.Customer VALUES(3, 'Amy Lambda', 1245498202, '481 Granville Street', 'MASTERCARD', 1839402931,'V6T1M1', 'theonlyone1', '344904850');
INSERT INTO sql3285727.Customer VALUES(4, 'Jackie Knight', 1245498203, '3467 Granville Street', 'CASH', NULL,'V8T3K4', 'Leodidthis', '123456');
INSERT INTO sql3285727.Customer VALUES(5, 'Samantha Castle', 1245498204, '5777 Farrow Street', 'VISA',1839402932, 'V6T1Z3', 'helloworld', '12345');
INSERT INTO sql3285727.Customer VALUES(6, 'Jimmy Lee', 1245498205, '1256 Wesbrook Mall', 'VISA', 1839402933,'V5T1Z9', 'whatislove', 'hello123456');
INSERT INTO sql3285727.Customer VALUES(7, 'Lee Ryan', 1245498206, '3333 East Block', 'CASH', NULL,'V6T1P2', 'bestcustomer', 'password');
INSERT INTO sql3285727.Customer VALUES(8, 'Andrew Armada', 1245498207, '42069 Lower Bowl', 'AMEX', 1839402934,'V6T1T1', 'aladeen', 'aladeen');
INSERT INTO sql3285727.Customer VALUES(9, 'Jackson Tipperton', 1245498208, '3322 Rose Boulevard', 'MASTERCARD', 1839402935, 'V6T3K4', 'empire3', '123456');
INSERT INTO sql3285727.Customer VALUES(10, 'Paul Zelinski', 1245498209, '1221 Upper Lane', 'VISA', 1839402936,'V3G1Z4', 'leesboyyyy', '696969');
INSERT INTO sql3285727.RankSalary VALUES(1, 1000);
INSERT INTO sql3285727.RankSalary VALUES(2, 2000);
INSERT INTO sql3285727.RankSalary VALUES(3, 3000);
INSERT INTO sql3285727.RankSalary VALUES(4, 4000);
INSERT INTO sql3285727.RankSalary VALUES(5, 5000);
INSERT INTO sql3285727.RankSalary VALUES(6, 6000);
INSERT INTO sql3285727.RankSalary VALUES(7, 7000);
INSERT INTO sql3285727.RankSalary VALUES(8, 8000);
INSERT INTO sql3285727.RankSalary VALUES(9, 9000);
INSERT INTO sql3285727.RankSalary VALUES(10, 10000);
INSERT INTO sql3285727.TitleSalary VALUES('Reception', 1000);
INSERT INTO sql3285727.TitleSalary VALUES('Doorman', 750);
INSERT INTO sql3285727.TitleSalary VALUES('Bartender', 1200);
INSERT INTO sql3285727.TitleSalary VALUES('Waiter', 1200);
INSERT INTO sql3285727.TitleSalary VALUES('RoomService', 260);
INSERT INTO sql3285727.TitleSalary VALUES('Executive Chef', 750);
INSERT INTO sql3285727.TitleSalary VALUES('Cook', 1300);
INSERT INTO sql3285727.TitleSalary VALUES('Beverage Manager', 2000);
INSERT INTO sql3285727.TitleSalary VALUES('Spa Manager', 500);
INSERT INTO sql3285727.TitleSalary VALUES('Group sales', 250);
INSERT INTO sql3285727.Employee VALUES('1', 'Dow', 'John', 'Reception');
INSERT INTO sql3285727.Employee VALUES ('2', 'Smith', 'DaQuan', 'Doorman');
INSERT INTO sql3285727.Employee VALUES ('3', 'Jones', 'Kevin', 'Bartender');
INSERT INTO sql3285727.Employee VALUES ('4', 'Payetti', 'Jessica', 'Waiter');
INSERT INTO sql3285727.Employee VALUES ('5', 'Deepak', 'Tyrone', 'RoomService');
INSERT INTO sql3285727.Employee VALUES ('6', 'Henderson', 'Zach', 'Executive Chef');
INSERT INTO sql3285727.Employee VALUES ('7', 'Bert', 'Elena', 'Cook');
INSERT INTO sql3285727.Employee VALUES ('8', 'Wes', 'Nicholas', 'Beverage Manager');
INSERT INTO sql3285727.Employee VALUES ('9', 'Roberto', 'Austin', 'Spa Manager');
INSERT INTO sql3285727.Employee VALUES ('10', 'Li', 'Ming', 'Group sales');
INSERT INTO sql3285727.Manager VALUES('50', 'lname', 'fname', 1);
INSERT INTO sql3285727.Manager VALUES('51', 'Brice', 'Derrick', 2);
INSERT INTO sql3285727.Manager VALUES('52', 'Lee', 'Jon', 3); 
INSERT INTO sql3285727.Manager VALUES('53', 'Mohammed', 'John', 4);
INSERT INTO sql3285727.Manager VALUES('54', 'Rae', 'Jackson', 5);
INSERT INTO sql3285727.Manager VALUES('55', 'Chung', 'Thomas', 6);
INSERT INTO sql3285727.Manager VALUES('56', 'Morin', 'Robin', 7);
INSERT INTO sql3285727.Manager VALUES('57', 'Anderson', 'Ashley', 8);
INSERT INTO sql3285727.Manager VALUES('58', 'Smith', 'Ruie', 9);
INSERT INTO sql3285727.Manager VALUES('59', 'Ravening', 'Robert', 10);
INSERT INTO sql3285727.RoomType VALUES('Suite', 100, 2, 4);
INSERT INTO sql3285727.RoomType VALUES('Deluxe', 250, 4, 8);
INSERT INTO sql3285727.RoomType VALUES('Penthouse', 300, 5, 10);
INSERT INTO sql3285727.RoomType VALUES('Event Hall', 500, 0, 150);
INSERT INTO sql3285727.RoomType VALUES('Single', 50, 1, 1);
INSERT INTO sql3285727.RoomType VALUES('Triple', 150, 3, 3);
INSERT INTO sql3285727.RoomType VALUES('Quad', 75, 2, 4);
INSERT INTO sql3285727.RoomType VALUES('Twin', 80, 2, 2);
INSERT INTO sql3285727.RoomType VALUES('King', 150, 1, 2);
INSERT INTO sql3285727.RoomType VALUES('Executive', 275, 2, 2);
INSERT INTO sql3285727.Room VALUES(612, 'Suite');
INSERT INTO sql3285727.Room VALUES(103, 'Deluxe');
INSERT INTO sql3285727.Room VALUES(981, 'Quad');
INSERT INTO sql3285727.Room VALUES(1103, 'Penthouse');
INSERT INTO sql3285727.Room VALUES(652, 'Triple');
INSERT INTO sql3285727.Room VALUES(422, 'Event Hall');
INSERT INTO sql3285727.Room VALUES(241, 'King');
INSERT INTO sql3285727.Room VALUES(648, 'Twin');
INSERT INTO sql3285727.Room VALUES(877, 'Single');
INSERT INTO sql3285727.Room VALUES(351, 'Executive');
INSERT INTO sql3285727.Service VALUES('Japanese Restaurant');
INSERT INTO sql3285727.Service VALUES('Mexican Restaurant');
INSERT INTO sql3285727.Service VALUES('Pool');
INSERT INTO sql3285727.Service VALUES('Casino');
INSERT INTO sql3285727.Service VALUES('RoomService');
INSERT INTO sql3285727.Service VALUES('Spa');
INSERT INTO sql3285727.Service VALUES('Bar');
INSERT INTO sql3285727.Service VALUES('City Tour');
INSERT INTO sql3285727.Service VALUES('Gym');
INSERT INTO sql3285727.Service VALUES('Garden');
INSERT INTO sql3285727.Item VALUES('Beer', 7, 'Bar');
INSERT INTO sql3285727.Item VALUES('Locker', 2, 'Pool');
INSERT INTO sql3285727.Item VALUES('Sushi', 10, 'Japanese Restaurant');
INSERT INTO sql3285727.Item VALUES('Taco', 5, 'Mexican Restaurant');
INSERT INTO sql3285727.Item VALUES('Manucure', 20, 'Spa');
INSERT INTO sql3285727.Item VALUES('Photo Shoot', 30, 'Garden');
INSERT INTO sql3285727.Item VALUES('Shampoo', 0, 'RoomService');
INSERT INTO sql3285727.Item VALUES('Downtown', 100, 'City Tour');
INSERT INTO sql3285727.Item VALUES('BlackJack', 50 , 'Casino');
INSERT INTO sql3285727.Item VALUES('Personal Trainer Session', 50, 'Gym');
INSERT INTO sql3285727.Invoice VALUES('1', 7, 'Paid');
INSERT INTO sql3285727.Invoice VALUES('2', 10, 'Paid');
INSERT INTO sql3285727.Invoice VALUES('3', 50, 'Unpaid');
INSERT INTO sql3285727.Invoice VALUES('4', 20, 'Paid');
INSERT INTO sql3285727.Invoice VALUES('5', 30, 'Unpaid');
INSERT INTO sql3285727.Invoice VALUES('6', 0, 'Paid');
INSERT INTO sql3285727.Invoice VALUES('7', 50, 'Paid');
INSERT INTO sql3285727.Invoice VALUES('8', 5, 'Unpaid');
INSERT INTO sql3285727.Invoice VALUES('9', 100, 'Paid');
INSERT INTO sql3285727.Invoice VALUES('10', 2, 'Paid');
INSERT INTO sql3285727.InvoiceLine VALUES('1', 'Bar', 'Beer');
INSERT INTO sql3285727.InvoiceLine VALUES('2', 'Japanese Restaurant', 'Sushi');
INSERT INTO sql3285727.InvoiceLine VALUES('3', 'Casino', 'BlackJack');
INSERT INTO sql3285727.InvoiceLine VALUES('4', 'Spa', 'Manucure');
INSERT INTO sql3285727.InvoiceLine VALUES('5', 'Garden', 'Photo Shoot');
INSERT INTO sql3285727.InvoiceLine VALUES('6', 'RoomService', 'Shampoo');
INSERT INTO sql3285727.InvoiceLine VALUES('7', 'Gym', 'Personal Trainer Session');
INSERT INTO sql3285727.InvoiceLine VALUES('8', 'Mexican Restaurant', 'Taco');
INSERT INTO sql3285727.InvoiceLine VALUES('9', 'City Tour', 'Downtown');
INSERT INTO sql3285727.InvoiceLine VALUES('10', 'Pool', 'Locker');
INSERT INTO sql3285727.Booking VALUES (1, '2019-01-13', '2019-01-15', 612, 3, 1, '1');
INSERT INTO sql3285727.Booking VALUES (2, '2019-02-01', '2019-02-10', 103, 1, 2, '2');
INSERT INTO sql3285727.Booking VALUES (3, '2019-01-19', '2019-01-21', 981, 2, 3, '3');
INSERT INTO sql3285727.Booking VALUES (4, '2019-02-07', '2019-02-14', 1103, 1, 4, '4');
INSERT INTO sql3285727.Booking VALUES (5, '2019-02-03', '2019-02-10', 652, 2, 5, '5');
INSERT INTO sql3285727.Booking VALUES (6, '2019-03-03', '2019-03-10', 422, 2, 6, '6');
INSERT INTO sql3285727.Booking VALUES (7, '2019-04-05', '2019-04-08', 241, 2, 7, '7');
INSERT INTO sql3285727.Booking VALUES (8, '2019-04-13', '2019-04-14', 648, 2, 8, '8');
INSERT INTO sql3285727.Booking VALUES (9, '2019-05-20', '2019-05-25', 877, 2, 9, '9');
INSERT INTO sql3285727.Booking VALUES (10,'2019-06-01', '2019-06-10', 351, 2, 10, '10');