DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int auto_increment,
  name char(20),
  message int,
  primary key (id)
) ENGINE=INNODB;

CREATE TABLE messages (
  id int auto_increment,
  text char(255),
  roomname char(20),
  userid int,
  primary key (id)
) ENGINE=INNODB;

ALTER TABLE messages ADD foreign key (userid) references users(id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* select messages.messages from messages inner join users on user.name = 'sally' and users.id = messages.users.id;
   select messages.messages from messages inner join rooms on rooms.name = 'lobby' and messages.id = rooms.messageid */