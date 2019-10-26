DROP DATABASE Devices_system;
CREATE DATABASE Devices_system;
USE Devices_system;

CREATE TABLE Devices (
	ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    Type_of_Devices varchar(50) NOT NULL UNIQUE,
    Number_of_Available INT(4) NOT NULL,
    Number_of_times_borrowed INT(10)
);
