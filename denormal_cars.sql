-- 5
-- SELECT DISTINCT ON (make_title) make_title
-- FROM car_models
-- 6
-- SELECT DISTINCT ON (model_title) model_title
-- FROM car_models
-- WHERE make_code = 'VOLKS';
--7
-- SELECT model_title, model_code, model_title, year
-- FROM car_models
-- WHERE make_code = 'LAM';
--8
SELECT count(*)
FROM car_models
WHERE year >= 2010 AND year <= 2015;


