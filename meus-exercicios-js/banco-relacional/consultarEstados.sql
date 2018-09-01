SELECT * FROM estados;

SELECT nome, sigla FROM estados
where regiao = 'Sul';

select nome, regiao from estados 
where populacao >= 10
order by populacao desc;