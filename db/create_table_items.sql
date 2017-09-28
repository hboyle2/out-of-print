DROP TABLE if exists items 

CREATE TABLE IF NOT EXISTS items(
id SERIAL PRIMARY KEY,
type   VARCHAR(20),
color VARCHAR(20),
gender VARCHAR(20),
name VARCHAR(255),
img VARCHAR(200),
img2 VARCHAR(200),
price DECIMAL,
slug VARCHAR(200)
)

INSERT INTO items
(slug, name, type, color, gender,	img, img2, price)
Values
('Murder-on-the-Orient-Express-womens-t-shirt','Murder on the Orient Express','t-shirt','black','womens', 'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1211_Murder-on-the-Orient-Express_womens-book-cover-t-shirt_01_2048x2048.jpg?v=1502939578',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1211_Murder-on-the-Orient-Express_womens-book-cover-t-shirt_03_2048x2048.jpg?v=1502939591',	28),
('Down With Big Brother-womens-t-shir','Down With Big Brother',	't-shirt',	'white',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1219_down-with-big-brother-1984-orwell-womens-book-t-shirt_01_2048x2048.jpg?v=1501186022','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1219_down-with-big-brother-1984-orwell-womens-book-t-shirt_02_2048x2048.jpg?v=1501186023',	28),
('The-Tempest-womens-t-shirt','The Tempest',	't-shirt',	'white',	'womens','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1215_The-Tempest-womens-book-t-shirt-front_01_2048x2048.jpg?v=1499816080',	'https://cdn.shopify.com/s/files/1/0380/6785/products/Womens_TS_The-Tempest_websize_2048x2048.jpg?v=1499816080',28),
('Everyone-Poops-womens-t-shirt','Everyone Poops',	't-shirt',	'white',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1212_Everyone-Poops_womens-book-cover-tee_01_2048x2048.jpg?v=1496685763',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1212_Everyone-Poops_womens-book-cover-tee_02_2048x2048.jpg?v=1497365689',28),
('The-Handmaids-Tale-womens-t-shirt','The Handmaids Tale',	't-shirt',	'white','womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1093_the-handmaids-tale_womens-book-cover-t-shirt_01_2048x2048.jpg?v=1505242625',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1093_the-handmaids-tale_womens-book-cover-t-shirt_03_2048x2048.jpg?v=1505242625',28),
('Moby-Dick-womens-t-shirt','Moby Dick','t-shirt',	'blue',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1207_Moby-Dick_womens-book-cover-tee_01_2048x2048.jpg?v=1495548623','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1207_Moby-Dick_womens-book-cover-tee_02_2048x2048.jpg?v=1495548624',28)
('Harold-and-the-Purple-Crayon-womens-t-shirt','Harold and the Purple Crayon',	't-shirt',	'purple',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1045_harold-and-the-purple-crayon_Womens_Book_T-Shirt_1_2048x2048.jpg?v=1458235429',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1045_harold-and-the-purple-crayon_Womens_Book_T-Shirt_2_2048x2048.jpg?v=1458235429',28),
('Goodnight-Moon-womens-t-shirt','Goodnight Moon',	't-shirt',	'green',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1068_goodnight-moon_Womens_Book_T-Shirt_1_2048x2048.jpg?v=1458235378',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1068_goodnight-moon_Womens_Book_T-Shirt_2_2048x2048.jpg?v=1458235378',	28),
('Charlottes-Web-womens-t-shirt','Charlottes Web',	't-shirt',	'grey','womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1040_charlottes-web_Womens_Book_T-Shirt_1_2048x2048.jpg?v=1458235281','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1040_charlottes-web_Womens_Book_T-Shirt_2_2048x2048.jpg?v=1458235281',	28),
('The-Phantom-Tollbooth-womens-t-shirt','The Phantom Tollbooth',	't-shirt',	'turquoise',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1129_Phantom-Tollbooth_Womens_Book_T-Shirt_1_2048x2048.jpg?v=1458235869',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1129_Phantom-Tollbooth_Womens_Book_T-Shirt_2_2048x2048.jpg?v=1458235869',	28),
('The-Very-Hungry-Caterpillar-womens-t-shirt','The Very Hungry Caterpillar',	't-shirt',	'white',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1050_very-hungry-caterpillar_Womens_Book_T-Shirt_1_2048x2048.jpg?v=1458235964','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1050_very-hungry-caterpillar_Womens_Book_T-Shirt_2_2048x2048.jpg?v=1458235964',28),
('The-Great-Gatsby-womens-t-shirt','The Great Gatsby',	't-shirt',	'vintage royal',	'womens','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1149_the-great-gatsby-first-edition_Womens_Scoop_Book_T-Shirt_1_2048x2048.jpg?v=1458235402',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1149_the-great-gatsby-first-edition_Womens_Scoop_Book_T-Shirt_2_2048x2048.jpg?v=1458235402',28),
('One-Hundred-Years-of-Solitude-womens-t-shirt','One Hundred Years of Solitude',	't-shirt',	'navy',	'womens',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1177-One-Hundred-Years-of-Solitude-womens-book-cover-t-shirt_01_2048x2048.jpg?v=1481035626',	'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1177-One-Hundred-Years-of-Solitude-womens-book-cover-t-shirt_02_2048x2048.jpg?v=1481035627',28)
('Pride-and-Prejudice-womens-sweatshirt','Pride-and-Prejudice-womens-sweatshirt','sweatshirt','black heather','womens', 'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1027_pride-and-prejudice_LongSleeve_1_237a021a-53d0-44ad-94e4-0814423e9a21_2048x2048.jpeg?v=1458235634','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1027_pride-and-prejudice_LongSleeve_2_c916c75d-7bd3-436f-a2b9-369d9188b6e6_2048x2048.jpeg?v=1458235634', 42),
('Library-Stamp-womens-sweatshirt', 'Library Stamp','sweatshirt', 'grey', 'womens', 'https://cdn.shopify.com/s/files/1/0380/6785/products/L-1108_Library-Stamp-gray_Womens_LS_1_2048x2048.jpg?v=1458235509','https://cdn.shopify.com/s/files/1/0380/6785/products/L-1108_Library-Stamp-gray_Womens_LS_2_2048x2048.jpg?v=1458235509', 42),
('Harold-and-the-Purple-Crayon-unisex-sweatshirt', 'Harold and the Purple Crayon','sweatshirt','purple','unisex','https://cdn.shopify.com/s/files/1/0380/6785/products/U-2006_Harold-and-the-Purple-Crayon_unisex_Long-Sleeve_Fleece_1_2048x2048.jpg?v=1445610626','https://cdn.shopify.com/s/files/1/0380/6785/products/U-2006_Harold-and-the-Purple-Crayon_unisex_Long-Sleeve_Fleece_2_2048x2048.jpg?v=1445955505',42 ),
('The-Great-Gatsby-unisex-sweatshirt', 'The Great Gatsby', 'sweatshirt','blue', 'unisex', 'https://cdn.shopify.com/s/files/1/0380/6785/products/U-2001_The-Great-Gatsby_unisex_Long-Sleeve_Fleece_1_2048x2048.jpg?v=1445953993','https://cdn.shopify.com/s/files/1/0380/6785/products/U-2001_The-Great-Gatsby_unisex_Long-Sleeve_Fleece_3_2048x2048.jpg?v=1445955537', 42),
('Casino-Royale-unisex-sweatshirt', 'Casino Royale','sweatshirt', 'grey', 'unisex', 'https://cdn.shopify.com/s/files/1/0380/6785/products/U-3005-Casino-Royale-James-Bond-unisex-sweatshirt_1_2048x2048.jpg?v=1475608234','https://cdn.shopify.com/s/files/1/0380/6785/products/Womens_Fleece_Casino-Royal_websize_2048x2048.jpg?v=14756082340', 30),
('Alice-im-wunderland-unisex-sweatshirt', 'Alice In Wonderland: German Edition','sweatshirt', 'navy','unisex', 'https://cdn.shopify.com/s/files/1/0380/6785/products/Fleece_LS_Alice-in-Wonderland_2048x2048.jpg?v=1475608365','https://cdn.shopify.com/s/files/1/0380/6785/products/Mens_Fleece_Alice_in_Wonderland_2048x2048.jpg?v=1475608365',42),
('Library-Stamp-womens-sweatshirt', 'Library Stamp', 'sweatshirt', 'grey', 'unisex', 'https://cdn.shopify.com/s/files/1/0380/6785/products/Fleece_LS_Library_Stamp_websize_2048x2048.jpg?v=1475549715','https://cdn.shopify.com/s/files/1/0380/6785/products/Womens_Fleece_Library-Stamp_websize_2048x2048.jpg?v=1475549809',42),
('brown-bear-brown-bear-what-do-you-see-mens-book-t-shirt', 'World of Eric Carle: Brown Bear, Brown Bear, What do you see?', 't-shirt', 'grey', 'unisex', 'https://cdn.shopify.com/s/files/1/0380/6785/products/B-1142_Brown-Bear-Brown-Bear-What-Do-You-See_Mens_Book_T-Shirt_1_2048x2048.jpg?v=1465396312', 'https://cdn.shopify.com/s/files/1/0380/6785/products/U-2006_Harold-and-the-Purple-Crayon_unisex_Long-Sleeve_Fleece_2_2048x2048.jpg?v=1445955505', 20),
('Corduroy-mens-t-shirt', 'Corduroy', 't-shirt', 'red', 'unisex', 'https://cdn.shopify.com/s/files/1/0380/6785/products/B-1140_Corduroy_Mens_Book_T-Shirt_1_2048x2048.jpg?v=1465394236','https://cdn.shopify.com/s/files/1/0380/6785/products/B-1140_Corduroy_Mens_Book_T-Shirt_3_2048x2048.jpg?v=1465394262',28)


-- create table lineItems(
-- id Serial Primary Key,
-- product_id INT REFERENCES items (id),
-- order_id INT REFERENCES orders (id),
-- Qty INT
-- );

-- create table orders (
-- id serial primary key,
-- shipping VARCHAR(500),
-- billing VARCHAR(500),
-- order_date DATE,
-- total int,
-- userid int);