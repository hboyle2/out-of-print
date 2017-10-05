select *
from lineItems
join items on lineItems.product_id = items.id 
where order_id = $1