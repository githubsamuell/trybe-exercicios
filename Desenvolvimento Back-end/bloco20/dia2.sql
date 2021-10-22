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
SELECT 
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.rating > 7.5;
SELECT 
    m.title, b.rating
FROM
    Movies m,
    BoxOffice b
WHERE
    m.id IN (SELECT 
            movie_id
        FROM
            BoxOffice
        WHERE
            rating > 7.5);
SELECT 
    m.title, b.rating
FROM
    Movies m,
    BoxOffice b
WHERE
    b.movie_id IN (SELECT 
            id
        FROM
            Movies
        WHERE
            year > 2009);
SELECT 
    b.rating, m.title
FROM
    BoxOffice b
        INNER JOIN
    Movies m ON b.movie_id = m.id
WHERE
    m.year > 2009;
SELECT 
    t.name, t.location
FROM
    Theater t
WHERE
    EXISTS( SELECT 
            *
        FROM
            Movies m
        WHERE
            m.theater_id = t.id);
SELECT 
    t.name, t.location
FROM
    Theater t
WHERE
    NOT EXISTS( SELECT 
            *
        FROM
            Movies m
        WHERE
            m.theater_id = t.id);
        