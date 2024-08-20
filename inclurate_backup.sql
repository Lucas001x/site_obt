-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: IncluRate
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `deficiencia`
--

DROP TABLE IF EXISTS `deficiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deficiencia` (
  `tipo` int NOT NULL,
  `deficiencia` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deficiencia`
--

LOCK TABLES `deficiencia` WRITE;
/*!40000 ALTER TABLE `deficiencia` DISABLE KEYS */;
INSERT INTO `deficiencia` VALUES (1,'Dificuldade de locomoção'),(2,'Deficiência visual'),(3,'Deficiência auditiva'),(4,'Sensibilidade Sensorial'),(5,'Deficiência de Fala'),(6,'Deficiência Cognitiva'),(7,'Deficiência Intelectual'),(8,'Deficiência Psicossocial');
/*!40000 ALTER TABLE `deficiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `senha`
--

DROP TABLE IF EXISTS `senha`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `senha` (
  `id` int DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `senha`
--

LOCK TABLES `senha` WRITE;
/*!40000 ALTER TABLE `senha` DISABLE KEYS */;
INSERT INTO `senha` VALUES (1,'qwertyuiop´['),(2,'qwertyuiop´['),(3,'qwertyuiop´['),(4,'12345678'),(5,'1234567890'),(12,'1234567890'),(13,'1234567890'),(14,'1234567890'),(15,'1234567890');
/*!40000 ALTER TABLE `senha` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `deficiencia` int DEFAULT NULL,
  `idade` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_deficiencia` (`deficiencia`),
  CONSTRAINT `fk_deficiencia` FOREIGN KEY (`deficiencia`) REFERENCES `deficiencia` (`tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'lucas','lucascezararruda@gmail.com',1,10),(2,'matheus','matheus@gmail.com',1,10),(3,'matheus','matheus@gmail.com',1,10),(4,'lucas','lucascezararruda@gmail.com',1,10),(5,'admin109GAIn','lucascezararruda@gmail.com',NULL,10),(12,'lucascesar','lucascezararruda@gmail.com',NULL,10),(13,'admin109GAIn','lucascezararruda@gmail.com',NULL,10),(14,'admin109GAIn','lucascezararruda@gmail.com',NULL,10),(15,'admin109GAIn','lucascezararruda@gmail.com',NULL,10);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_deficiencia`
--

DROP TABLE IF EXISTS `user_deficiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_deficiencia` (
  `user_id` int NOT NULL,
  `deficiencia_tipo` int NOT NULL,
  PRIMARY KEY (`user_id`,`deficiencia_tipo`),
  KEY `deficiencia_tipo` (`deficiencia_tipo`),
  CONSTRAINT `user_deficiencia_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_deficiencia_ibfk_2` FOREIGN KEY (`deficiencia_tipo`) REFERENCES `deficiencia` (`tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_deficiencia`
--

LOCK TABLES `user_deficiencia` WRITE;
/*!40000 ALTER TABLE `user_deficiencia` DISABLE KEYS */;
INSERT INTO `user_deficiencia` VALUES (12,1),(13,1),(14,1),(15,1),(12,2),(13,3),(14,3),(15,3);
/*!40000 ALTER TABLE `user_deficiencia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-19 10:38:28
