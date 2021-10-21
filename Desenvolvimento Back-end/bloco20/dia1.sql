use Pixar;
show tables;
SELECT 
    *
FROM
    Movies;
SELECT 
    *
FROM
    BoxOffice;
SELECT 
    *
FROM
    Theater;
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON m.id = b.Movie_id;
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.domestic_sales < international_sales
        AND m.id = b.Movie_id;
SELECT 
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON m.id = b.Movie_id
ORDER BY b.rating DESC;
SELECT 
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        INNER JOIN
    Movies m ON m.theater_id = t.id
ORDER BY t.name;
SELECT 
    t.name, t.location, m.*
FROM
    Theater t
        RIGHT JOIN
    Movies m ON t.id = m.theater_id;