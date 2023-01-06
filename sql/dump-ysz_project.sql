-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: ysz_project
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `dbinfo`
--

DROP TABLE IF EXISTS `dbinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dbinfo` (
  `ID` int NOT NULL,
  `IP` varchar(200) DEFAULT NULL,
  `PORT` int DEFAULT NULL,
  `USERNAME` varchar(200) DEFAULT NULL,
  `PASSWORD` varchar(200) DEFAULT NULL,
  `REMARK` varchar(500) DEFAULT NULL,
  `GROUPNAME` varchar(100) DEFAULT NULL,
  `DBNAME` varchar(200) DEFAULT NULL,
  `DBTYPE` int NOT NULL,
  `ISVALID` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dbinfo`
--

LOCK TABLES `dbinfo` WRITE;
/*!40000 ALTER TABLE `dbinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `dbinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proinfo`
--

DROP TABLE IF EXISTS `proinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proinfo` (
  `ID` bigint NOT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `REMARK` varchar(1000) DEFAULT NULL,
  `LOGIN_PAGEID` bigint DEFAULT NULL,
  `HOME_PAGEID` bigint DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proinfo`
--

LOCK TABLES `proinfo` WRITE;
/*!40000 ALTER TABLE `proinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `proinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ysz_project'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-06 20:45:23
