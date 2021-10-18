USE Pixar;
SHOW TABLES;
SELECT * FROM Movies;
INSERT INTO Movies (title, director, `year`, length_minutes)
VALUES ('Monstros SA','Pete Docter', 2001, 92), ('Procurando Nemo', 'John Lasseter', 2003, 107),
 ('Os Incríveis', 'Brad Bird', 2004, 116), ('WALL-E', 'Pete Docter', 2008, 104);
 -- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .
 SELECT * FROM BoxOffice;
 INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);
-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .
UPDATE Movies
SET director = 'Andrew Staton'
WHERE id = 9;