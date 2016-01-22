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
-- SELECT posts.title, users.first_name, users.last_name
-- FROM posts
-- INNER JOIN users ON posts.user_id = users.id
-- WHERE users.first_name = 'Norene" AND
--       users.last_name = 'Schmitt';

-- 5
-- SELECT username
-- FROM users
-- INNER JOIN posts ON posts.user_id = users.id
-- WHERE posts.created_at >= '2015-01-01'

-- 6
-- SELECT title, content, users.username
-- FROM posts
-- INNER JOIN users ON posts.user_id = users.id
-- WHERE users.created_at >= '2015-01-01'

-- 7
SELECT title, content, users.username
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE users.created_at >= '2015-01-01'