SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE `crud`;

USE crud;

CREATE TABLE `alunos` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CPF` varchar(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Idade` int(3) NOT NULL,
  `Nota1` decimal(10,1) NOT NULL,
  `Nota2` decimal(10,1) NOT NULL,
  `Media` decimal(10,1) NOT NULL,
  `createdAt` varchar(255),
  `updatedAt` varchar(255),
  PRIMARY KEY (`ID`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678910', 'João', 11, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678911', 'Maria', 12, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678912', 'José', 13, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678913', 'Pedro', 14, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678914', 'Paulo', 15, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678915', 'Ana', 16, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678916', 'Carla', 17, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678917', 'Carlos', 18, 10, 10, 10, '2021-01-01', '2021-01-01');
insert into alunos (CPF, Nome, Idade, Nota1, Nota2, Media, createdAt, updatedAt) values ('12345678918', 'Mariana', 19, 10, 10, 10, '2021-01-01', '2021-01-01');
