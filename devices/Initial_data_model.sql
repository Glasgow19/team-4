DROP DATABASE Devices_system;
CREATE DATABASE Devices_system;
USE Devices_system;

CREATE TABLE Devices (
		ID INT(5) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Type_of_Devices varchar(50) NOT NULL UNIQUE,
    Number_of_Available INT(4) NOT NULL,
    Number_of_times_borrowed INT(10),
    Total_number INT(5) AS (Number_of_Available + Number_of_borrowing_now) NOT NULL,
    Number_of_borrowing_now INT(4) NOT NULL,
    CHECK (Number_of_Available >= 0),
    CHECK (Number_of_times_borrowed >= 0),
    CHECK (Total_number >= 0),
    CHECK (Number_of_borrowing_now >= 0)
);
