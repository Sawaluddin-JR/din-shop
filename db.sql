/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 10.4.27-MariaDB 
*********************************************************************
*/
/*!40101 SET NAMES utf8 */;

create table `products` (
	`id` int (11),
	`categories_id` int (11),
	`title` varchar (90),
	`image` text ,
	`price` int (11),
	`description` text ,
	`rating` float ,
	`count` int (11)
); 
insert into `products` values
('1','1','Fjallraven - Foldsack No. 1 Ba','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','195500','Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday','3.9','120'),
('2','1','Mens Casual Premium Slim Fit T','https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg','200000','Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.','4.1','520'),
('3','1','Mens Cotton Jacket','https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg','140000','reat outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.','5.2','50'),
('4','1','Mens Casual Slim Fit','https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg','58000','he color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.','4.9','200')
