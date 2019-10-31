\c Corina
-- 1
DROP USER IF EXISTS michael;

-- 2
CREATE USER michael WITH ENCRYPTED PASSWORD 'stonebraker';

-- 3
DROP DATABASE IF EXISTS todo_app;

-- 4
CREATE DATABASE todo_app;

-- 5
\c todo_app;
DROP TABLE IF EXISTS tasks;
-- 6
CREATE TABLE tasks(
  id serial NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  created_at timestamp NOT NULL,
  updated_at timestamp,
  completed boolean NOT NULL
  );

-- 7
ALTER TABLE tasks ADD PRIMARY KEY (id);

-- 8 i
ALTER TABLE tasks DROP COLUMN completed;
ALTER TABLE tasks ADD COLUMN completed_at timestamp;
-- 8 ii
ALTER TABLE tasks ALTER COLUMN completed_at SET DEFAULT NULL;
-- 8 iii
ALTER TABLE tasks ALTER COLUMN updated_at SET NOT NULL;
ALTER TABLE tasks ALTER COLUMN updated_at SET DEFAULT now();
-- 8 iv
INSERT INTO tasks (id, title, description, created_at, updated_at, completed_at)
VALUES (DEFAULT, 'Study SQL', 'Complete this exercise', now(), DEFAULT, NULL);
-- 8 v
INSERT INTO tasks (id, title, description, created_at)
VALUES (DEFAULT, 'Study PostgreSQl', 'Read all the documentation', now());
-- 8 vi
SELECT *
FROM tasks
WHERE completed_at IS NULL;
-- 8 vii
UPDATE tasks
SET completed_at = now()
WHERE title = 'Study SQL';
-- 8 viii
SELECT  title, description
FROM tasks
WHERE completed_at IS NULL;
-- 8 ix
-- SELECT  *
-- FROM tasks
-- ORDER BY created_at DESC;
-- 8 x
INSERT INTO tasks (id, title, description, created_at, updated_at, completed_at)
VALUES (DEFAULT, 'mistake 1', 'a test entry', now(), DEFAULT, NULL);
-- 8 xi
INSERT INTO tasks (id, title, description, created_at, updated_at, completed_at)
VALUES (DEFAULT, 'mistake 2', 'another test entry', now(), DEFAULT, NULL);
-- 8 xii
INSERT INTO tasks (id, title, description, created_at, updated_at, completed_at)
VALUES (DEFAULT, 'third mistake', 'another test entry', now(), DEFAULT, NULL);
-- 8 xiii
SELECT  title
FROM tasks
WHERE title LIKE '%mistake%';
-- 8 xiv
DELETE
FROM tasks
WHERE title = 'mistake 1';
-- 8 xv
SELECT  title
FROM tasks
WHERE title LIKE '%mistake%';
-- 8 xvi
DELETE
FROM tasks
WHERE title LIKE '%mistake%';
-- 8 xvii
SELECT  *
FROM tasks
ORDER BY title ASC;