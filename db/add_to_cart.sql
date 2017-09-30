insert into lineItems
(product_id, qty)
values
($1,$2)
where order_id = $3