SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE `crud`;

CREATE TABLE `alunos` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `CPF` varchar(11) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Nota1` decimal(10,1) NOT NULL,
  `Nota2` decimal(10,1) NOT NULL,
  `Media` decimal(10,1) NOT NULL,
  `createdAt` varchar(255),
  `updatedAt` varchar(255),
  PRIMARY KEY (`ID`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;