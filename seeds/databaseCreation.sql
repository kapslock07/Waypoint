DROP DATABASE IF EXISTS MMDev;

CREATE DATABASE MMDev;

CREATE DATABASE blogger;

USE MMDev;

SELECT * FROM games;


insert INTO users (email, password, createdAt, updatedAt) values ("crazy@gmail", "test", "00-00-00", "00-00-00");
insert INTO users (email, password, createdAt, updatedAt) values ("bill@gmail", "test2", "00-00-00", "00-00-00");

insert INTO chats (createdAt, updatedAt) values ("00-00-00", "00-00-00");

insert INTO messages (message,timestamp, chatId, UserId, createdAt, updatedAt) values ("Hey bill", "00:00:00", 1, 1, "00-00-00", "00-00-00");
insert INTO messages (message,timestamp, chatId, UserId, createdAt, updatedAt) values ("Hey crazy", "00:00:00", 1, 2, "00-00-00", "00-00-00");


SELECT * FROM chats;