create table Customer_Table (
    customer_id INT auto_increment primary key,
	customer_first_name varchar(100),
	customer_last_name varchar(100),
	customer_email varchar(100)
);

create table Order_Table (
	order_id int auto_increment Primary key,
	order_date date,
	customer_id INT,
	Foreign key (customer_id) references Customer_Table(customer_id)
)

create table Order_Item_Table(
	order_item_id INT auto_increment Primary key,
	product_name varchar(100),
	quantity int,
	price int,
	order_id int,
	Foreign key (order_id) references Order_table(order_id)
)

insert into Customer_Table(customer_first_name,customer_last_name,customer_email)
values ('Ali','Mercadejas','ali@jonaxx.com'),('Elijah','Montefalco','elijah@jonaxx.com'),('Raul','Riego','raul@jonaxx.com'),('Pierre','Ty','pierre@jonaxx.com'),('Jax','Yuchengco','jax@beeyotch.com')

insert into Order_Table(order_date)
values ('2023-01-27'),('2023-02-21'),('2023-03-18'),('2023-04-07'),('2023-05-05')

insert into Order_Item_Table (product_name,quantity,price)
values ('books',3,600.00),('ballpen',5,60.00),('notebook',10,200.00),('pad',1,30.00),('pencil',2,16.00)

select count(*) from customer_table

update customer_table
set customer_email='updated@email.com'
where customer_id=3;

select sum(quantity)
from order_item_table

SELECT c.customer_id, c.customer_first_name, c.customer_last_name, COUNT(o.order_id)
FROM Customer_Table c
JOIN Order_Table o ON c.customer_id = o.customer_id
GROUP BY c.customer_id;

DELETE FROM Customer_Table WHERE customer_id = 2;

SELECT c.customer_id, c.customer_first_name, c.customer_last_name, o.order_date, o.customer_id, oi.product_name, oi.quantity, oi.price
FROM Customer_Table c
JOIN Order_Table o ON c.customer_id = o.customer_id
JOIN Order_Item_Table oi ON o.order_id = oi.order_id;



