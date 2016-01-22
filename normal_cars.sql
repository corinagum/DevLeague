DROP USER IF EXISTS normal_user;
CREATE USER normal_user;
DROP DATABASE IF EXISTS normal_cars;
CREATE DATABASE normal_cars;
\c normal_cars
DROP TABLE IF EXISTS car_models;
\i scripts/denormal_data.sql;

DROP TABLE IF EXISTS car_make_code;
CREATE TABLE car_make_code(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  make_code character varying(125) NOT NULL
);

  INSERT INTO car_make_code ( make_code )
  SELECT DISTINCT make_code
  FROM car_models
  ORDER BY make_code ASC;

DROP TABLE IF EXISTS car_make_title;
CREATE TABLE car_make_title(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  make_title character varying(125) NOT NULL
);

  INSERT INTO car_make_title ( make_title )
  SELECT DISTINCT make_title
  FROM car_models
  ORDER BY make_title ASC;

DROP TABLE IF EXISTS car_model_code;
CREATE TABLE car_model_code(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  model_code character varying(125) NOT NULL
);

  INSERT INTO car_model_code ( model_code )
  SELECT DISTINCT model_code
  FROM car_models
  ORDER BY model_code ASC;

DROP TABLE IF EXISTS car_model_title;
CREATE TABLE car_model_title(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  model_title character varying(125) NOT NULL
);

  INSERT INTO car_model_title ( model_title )
  SELECT DISTINCT model_title
  FROM car_models
  ORDER BY model_title ASC;

DROP TABLE IF EXISTS car_year;
CREATE TABLE car_year(
  "id" serial NOT NULL,
  PRIMARY KEY( "id" ),
  year character varying(125) NOT NULL
);

  INSERT INTO car_year ( year )
  SELECT DISTINCT year
  FROM car_models
  ORDER BY year ASC;

DROP TABLE IF EXISTS normalize;
CREATE TABLE normalize (
  id serial NOT NULL,
  make_code character varying(125) NOT NULL,
  make_title character varying(125) NOT NULL,
  model_code character varying(125) NOT NULL,
  model_title character varying(125) NOT NULL,
  year integer NOT NULL
  );

WITH denormal AS (SELECT make_code, make_title, model_code, model_title, year FROM car_models)
  INSERT INTO normalize (make_code, make_title, model_code, model_title, year)
  SELECT make_code, make_title, model_code, model_title, year
  FROM denormal;

UPDATE normalize
SET make_code = (SELECT id FROM car_make_code WHERE car_make_code.make_code = normalize.make_code)
WHERE true;

UPDATE normalize
SET make_title = (SELECT id FROM car_make_title WHERE car_make_title.make_title = normalize.make_title)
WHERE true;

UPDATE normalize
SET model_code = (SELECT id FROM car_model_code WHERE car_model_code.model_code = normalize.model_code)
WHERE true;

UPDATE normalize
SET model_title = (SELECT id FROM car_model_title WHERE car_model_title.model_title = normalize.model_title)
WHERE true;

UPDATE normalize
SET year = (SELECT id FROM car_year WHERE car_year.year = normalize.year)
WHERE true;
