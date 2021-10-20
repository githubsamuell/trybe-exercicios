-- 1. Escreva uma query que exiba o maior salário da tabela.
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais
SELECT 
    MAX(SALARY)
FROM
    employees;
    
SELECT 
    MAX(SALARY) - MIN(SALARY) AS DIFERENÇA_SALARIO
FROM
    employees;
    
SELECT 
    JOB_ID, AVG(SALARY) AS MEDIA_SALARIAL
FROM
    employees
GROUP BY JOB_ID
ORDER BY SALARY DESC;

SELECT 
    SUM(SALARY) AS TOTAL_GASTO
FROM
    employees;
    
SELECT 
    MAX(SALARY) AS MAIOR_SALARIO,
    MIN(SALARY) AS MENOR_SALARIO,
    SUM(SALARY) AS SOMA_TODOS,
    AVG(SALARY) AS MEDIA_TODOS
FROM
    employees; 
