# Curso de MySQL
## Comandos Básicos

* SELECIONANDO OS DADOS DA TABELA

SELECT * FROM nome_da_tabela;

* DESCRIÇAO DOS DADOS DA TABELA

DESCRIBE nome_da_tabela;

* MOSTRANDO AS TABELAS DA BASE

SHOW TABLES;

### DDL - DATA DEFINITION LANGAGE - LINGUAGEM DE DEFINICAO DE DADOS

* CRIANDO A BASE DE DADOS

CREATE DATABASE nome_banco_de_dados;

* CRIANDO A TABELA

CREATE TABLE nome_tabela(
{Inserir todos os dados que a tabela irá conter ex:
id int auto_increment not null,
nome varchar(20) not null,
nascimento date,
ano year

*Definindo a chave primaria:*
primary key (id)
}
)default charset = utf8;


* APAGANDO TABELAS

DROP TABLE nome_da_tabela;



### DML - DATA MANIPULATION LANGUAGE - LINGUAGEM DE MANIPULACAO DE DADOS

* INSERINDO DADOS

INSERT INTO nome_da_tabela VALUES
(*Valores por ordem que foram definidos*)


* APAGANDO DADOS

TRUNCATE TABLE nome_da_tabela;
*ESTA OPÇAO IRA APAGAR TODOS OS DADOS DA TABELA*

DELETE FROM nome_da_tabela 
WHERE chave = 'valor_da_chave', chave = 'outra_chave';
*PARA APAGAR TODOS OS DADOS DA TABELA DE UMA VEZ SÓ, BASTA RETIRAR A CONSTRAINR (ARGUMENTO) WHERE INTEIRO*

*O COMANDO 'LIMIT' LIMITA A QUANTIDADE DE OCORRENCIAS QUE IRA PROCEDER SOBRE O COMANDO DELETE, ONDE A CHAVE NAO É PRIMARIA E APAGARIA MAIS DE UMA LINHA*

* MODIFICANDO DADOS DA TABELA

UPDATE nome_da_tabela
SET campo_para_modificar = 'novos_dados' *Pode por diversos dados separados por virgula*
WHERE chave = valor_da_chave;
