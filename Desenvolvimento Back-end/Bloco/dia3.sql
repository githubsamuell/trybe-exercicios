/* Escreva uma query para exibir todas as peças que começam com GR .
Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.
Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N . */

USE PecasFornecedores;
    SELECT * FROM Pecas;
    SELECT * FROM Pecas
    WHERE name LIKE 'gr%';
    SELECT * FROM Fornecimentos 
    WHERE code = 2;
    SELECT peca, Fornecedor, Preco FROM Fornecimentos
    WHERE Fornecedor LIKE '%n%';

    