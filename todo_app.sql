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

-- 6
CREATE TABLE tasks(
  id serial NOT NULL,
  title varchar(255) NOT NULL,
  description text,
  created_at timestamp NOT NULL,
  updated_at timestamp,
  completed boolean NOT NULL
  );

--7
-- ALTER TABLE todo_app
-- ADD CONSTRAINT id PRIMARY KEY