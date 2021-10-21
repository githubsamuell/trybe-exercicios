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

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT 
    *
FROM
    employees;
UPDATE hr.employees 
SET 
    PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE
    PHONE_NUMBER LIKE '515%';
set SQL_SAFE_UPDATES = 0;
SELECT 
    *
FROM
    employees
WHERE
    CHAR_LENGTH(FIRST_NAME) >= 8;
SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE)
FROM
    employees;
SELECT 
    EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE)
FROM
    employees;
SELECT 
    EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE)
FROM
    employees;
SELECT 
    UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS FULL_NAME
FROM
    employees;
SELECT 
    LAST_NAME, HIRE_DATE
FROM
    employees
WHERE
    HIRE_DATE LIKE '1987-07%';
SELECT 
    FIRST_NAME, LAST_NAME, (CURRENT_DATE() - HIRE_DATE) AS QDAYS
FROM
    employees;