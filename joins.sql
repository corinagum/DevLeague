-- QUERIES ACROSS MULTIPLE TABLES
-- -- 1
-- SELECT *
-- FROM users;

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
-- WHERE posts.created_at >= '2015-01-01';

-- 6
-- SELECT title, content, users.username
-- FROM posts
-- INNER JOIN users ON posts.user_id = users.id
-- WHERE users.created_at >= '2015-01-01';

-- 7
-- SELECT p.title
-- FROM comments c
-- INNER JOIN posts p ON c.post_id = p.id;

-- 8
-- SELECT p.title, p.url
-- FROM comments c
-- INNER JOIN posts p ON c.post_id = p.id
-- WHERE p.created_at >= '2015-01-01';

-- 9
-- SELECT p.title, p.url, c.body
-- FROM comments c
-- INNER JOIN posts p ON c.post_id = p.id
-- WHERE p.created_at >= '2015-01-01';

-- 10
-- SELECT p.title, p.url, c.body
-- FROM comments c
-- INNER JOIN posts p ON c.post_id = p.id
-- WHERE c.body LIKE '%USB%';

-- 11
-- SELECT p.title, u.first_name, u.last_name, c.body
-- FROM comments c
-- INNER JOIN posts p ON c.post_id = p.id
-- INNER JOIN users u ON p.user_id = u.id
-- WHERE c.body LIKE '%matrix%';

-- 12
-- SELECT u.first_name, u.last_name, c.body
-- FROM comments c
-- INNER JOIN posts p ON c.post_id = p.id
-- INNER JOIN users u ON c.user_id = u.id
-- WHERE c.body LIKE '%SSL%' AND p.content LIKE '%dolorum%';

-- 13
SELECT posts.id, posts.title,
  users.first_name AS "author_first", users.last_name AS "author_last",
  comments.body, comments_author.username
FROM users
LEFT JOIN posts ON posts.user_id = users.id
INNER JOIN comments comments ON comments.post_id = posts.id
INNER JOIN users comments_author ON comments.user_id = comments_author.id
WHERE posts.content ILIKE '%nemo%'
  AND ( comments.body ILIKE '%ssl%' OR comments.body ILIKE '%firewall%')
;

-- SELECT: first_name author of post
--         last_name of author of post
--         post title
--         username of auth of comment
--         comment body

-- WHERE: comment body contains SSL or firewall
--        post content contains 'nemo'