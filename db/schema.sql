DROP DATABASE IF EXISTS burgerDB;
CREATE database burgerDB;

USE burgerDB;


CREATE TABLE burger (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  devoured bool DEFAULT false,
  PRIMARY KEY (id)
);
