
DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname char,
  PRIMARY KEY(id)
);


CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  messagebody varchar(500),
  dateCreated datetime,
  roomname char(40),
  username char(40),
  PRIMARY KEY(id)
  -- FOREIGN KEY (roomname) REFERENCES rooms(roomname)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

