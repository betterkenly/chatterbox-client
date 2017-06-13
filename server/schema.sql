CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int auto_increment,
  message char(255),
  username char(20),
  roomname char(20),
  index (id),
  primary key (id, message)
) ENGINE=INNODB;

CREATE TABLE users (
  id int auto_increment,
  name char(20),
  message int,
  index (id),
  primary key (id),
  foreign key (message) references messages(id),
  foreign key (name) references messages(username)
) ENGINE=INNODB;


CREATE TABLE rooms (
  id int auto_increment,
  name char(20),
  index (id)
  primary key (id, name),
  foreign key (name) references messages(roomname)
) ENGINE=INNODB;



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
