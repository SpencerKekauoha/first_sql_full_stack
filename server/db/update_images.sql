UPDATE mountains
SET
  title = $2,
  description = $3,
  imageurl = $4
WHERE id = $1
