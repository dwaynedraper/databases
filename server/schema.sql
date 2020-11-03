DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL auto_increment,
  message_body varchar(500),
  dateCreated date,
  roomname char,
  username char,
  /* Describe your table here.*/
  PRIMARY KEY (id),

);

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  roomname char
);

ALTER TABLE messages ADD FOREIGN KEY (roomname) REFERENCES rooms(roomname);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

