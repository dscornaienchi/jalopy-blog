DROP DATABASE IF EXISTS jalopy_db;
CREATE DATABASE jalopy_db;

USE jalopy_db;

CREATE TABLE users (
    id INT NOT NULL,
    username VARCHAR(40),
    password VARCHAR(40)
);

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year INT NOT NULL,
    make VARCHAR(30) NOT NULL,
    model VARCHAR(30) NOT NULL,
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    car_id INT,
    review TEXT NOT NULL,
    ON DELETE SET NULL
);

