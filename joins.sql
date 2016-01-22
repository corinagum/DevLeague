-- QUERIES ACROSS MULTIPLE TABLES
-- -- 1
-- SELECT *
-- FROM users

-- 2
-- SELECT *
-- FROM posts
-- WHERE posts.user_id = 100;

--3
-- SELECT *
-- FROM posts
-- INNER JOIN users ON posts.user_id = users.id
-- WHERE posts.user_id = 200;

-- 4
SELECT *, users.first_name, users.last_name
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE users.first_name = 'Norene" AND
      users.last_name = 'Schmitt';