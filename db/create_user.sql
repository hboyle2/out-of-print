INSERT INTO users
(email, auth0)
Values
($1, $2)
RETURNING *;