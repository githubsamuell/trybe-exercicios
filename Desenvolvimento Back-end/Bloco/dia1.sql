/* Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;
 */

CREATE TABLE `sakila`.`Filme` (
    `Filme` INT NOT NULL AUTO_INCREMENT,
    `Descricao` VARCHAR(100) NOT NULL,
    `AnoLancamento` INT NOT NULL,
    `Nota` INT NULL,
    PRIMARY KEY (`Filme`));