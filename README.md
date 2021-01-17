# airin
Airin is a node js API scaffolding to create a modular or separate list of file on each abstraction. In simple way, Airin was created to simplify your needs of API in nodejs.

Airin designed to be modular, solving a fat controllers (or thousand lines of codes) by separating routes on each files.

Airin was created with support :
- Express Frameworks
- NVM 8.12.0
- Mysql

TO start:
1. open terminal / cmd to root dir
2. Run : nodemon start
3. Voila, your server has start with specific port

------------
SQL CREATE TABLE FOR LOCAL

CREATE database lancelot;
USE lancelot;
CREATE TABLE users(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NULL,
age varchar(255) NULL,
email varchar(255) NULL
);

INSERT INTO users(`name`,`age`,`email`) VALUES('uno','20','demo@demo1.com'), ('duo','34','demo@demo1.com'), ('trio','13','demo@demo3.com'), ('quadra','11','demo@demo4.com');

--------------