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

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT 
    COUNT(*) AS QPESSOAS_PROGRAMADORAS
FROM
    employees
WHERE
    JOB_ID = 'IT_PROG';
SELECT 
    JOB_ID, SUM(SALARY) AS MONEY_NECESSARY
FROM
    employees
GROUP BY JOB_ID;
SELECT 
    JOB_ID, SUM(SALARY) AS MONEY_TO_PAY
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
SELECT 
    JOB_ID, AVG(SALARY) AS AVG_SALARY
FROM
    employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVG_SALARY DESC;
SELECT 
    DEPARTMENT_ID,
    AVG(SALARY) AS AVG_SALARY,
    COUNT(DISTINCT EMAIL) AS Q_EMPLOYEES
FROM
    employees
GROUP BY DEPARTMENT_ID
HAVING Q_EMPLOYEES > 10; 