create database burgers_db;
use burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(75),
devoured BOOLEAN DEFAULT false
);
