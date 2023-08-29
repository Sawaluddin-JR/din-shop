CREATE DATABASE din_shop;
USE din_shop;

CREATE TABLE categories(
id INT AUTO_INCREMENT PRIMARY KEY,
NAME VARCHAR(30) NOT NULL,
description TEXT
);

CREATE TABLE products(
id INT AUTO_INCREMENT PRIMARY KEY,
categories VARCHAR(35),
title VARCHAR(30) NOT NULL,
url TEXT,
price INT,
description TEXT
);

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
NAME VARCHAR(30) NOT NULL,
telephone VARCHAR(13),
address TEXT,
email VARCHAR(32) NOT NULL UNIQUE,
PASSWORD TEXT,
is_admin BOOLEAN DEFAULT FALSE
);


CREATE TABLE order_users(
id INT AUTO_INCREMENT PRIMARY KEY,
id_products INT,
id_user INT,
CONSTRAINT fk_order_user1 FOREIGN KEY(id_products) REFERENCES products(id),
CONSTRAINT fk_order_user2 FOREIGN KEY(id_user) REFERENCES users(id)
);

CREATE TABLE carts(
id INT AUTO_INCREMENT PRIMARY KEY,
id_products INT,
id_user INT,
total_price INT,
amount_products INT,
CONSTRAINT fk_keranjang1 FOREIGN KEY(id_products) REFERENCES products(id),
CONSTRAINT fk_keranjang2 FOREIGN KEY(id_user) REFERENCES users(id)
);

INSERT INTO products VALUES
('1','Men is clothing','Fjallraven - Foldsack No. 1 Ba','https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg','11000','Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'),
('2','Men is clothing','Mens Cotton Jacket','https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg','550000','great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day'),
('3','Jawerly','John Hardy Women','https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg','695000','From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean is pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.'),
('4','Jawerly','Solid Gold Petite Micropave','https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg','168000','Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.'),
('5','Electronics','WD 2TB Elements Portable Exter','https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg','65000','USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user is hardware configuration and operating system'),
('6','Electronics','Silicon Power 256GB SSD 3D NAN','https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg','190000','3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks.'),
('7','Woman is clothing','BIYLACLESEN Women','https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg','569000','Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. '),
('8','Woman is clothing','MBJ Women iss Solid Short Sleeve','https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg','23000','95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline Double stitching on bottom hem'),
('9','Woman is clothing','DANVOUY Womens T Shirt Casual ','https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg','320000','95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.')

INSERT INTO  users VALUES 
('1','dede','3545345345','Bandung','dede@gmail.com','$2a$10$r635oB4vLFAQNCNTjKYsPe5BvdODAW5f.otpg4akqDB/qQ23x/XbW','0');
('2','Sawaluddin','082172316332','Bandung','sawaluddin@gmail.com','$2a$10$sSVzjyLVktAgErTudwADXOhzgVkx3nDH8C8i3AyG3u/VHx00X7vCq','1');

INSERT INTO categories VALUES 
('1','Men is clothing','Pakaian khusus pria');
('2','Woman is clothing','Pakaian khusus wanita');
('3','Jawerly','Barang-barang perhiasan');
('4','Electronics','Barang-barang elektronik');
