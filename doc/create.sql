CREATE DATABASE IF NOT EXISTS test;
use test;
 
CREATE TABLE IF NOT EXISTS users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO `test`.`users` (`name`, `age`, `email`) VALUES ('agus', '20', 'test@test.com');
INSERT INTO `test`.`users` (`name`, `age`, `email`) VALUES ('bebek', '31', 'aa@aa.com');
INSERT INTO `test`.`users` (`name`, `age`, `email`) VALUES ('charlie', '15', 'ccc@cc.com');


-- Dumping structure for table test.product
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `sku` varchar(5) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

INSERT INTO `product` (`product_id`, `name`, `sku`, `status`) VALUES
	(1, 'modem', 'MDM1', 1),
	(2, 'PC', 'PPC', 1),
	(3, 'Mouse', 'MSS', 1),
	(4, 'TV', 'TTT', 1);