INSERT INTO users
(user_name, email, auth_id)
Values
($1, $2, $3)
RETURNING *;