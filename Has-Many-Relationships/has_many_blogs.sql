
DROP USER IF EXISTS has_many_user;
CREATE USER has_many_user;

DROP DATABASE IF EXISTS has_many_blogs;
CREATE DATABASE has_many_blogs -U has_many_user;
\c has_many_blogs
DROP TABLE IF EXISTS users;
CREATE TABLE users(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  username character varying(90) NOT NULL,
  first_name character varying(90),
  last_name character varying(90),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now()
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  title character varying(180),
  url character varying(510),
  content text,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
  user_id integer REFERENCES users(id)
);


DROP TABLE IF EXISTS comments;
CREATE TABLE comments(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  body character varying(510),
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),
  user_id integer REFERENCES users(id),
  post_id integer REFERENCES posts(id)
);
