-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: ysz_sys
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
-- Table structure for table `com`
--

DROP TABLE IF EXISTS `com`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `com` (
  `ID` int NOT NULL,
  `NAME` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `P_ID_LIST` varchar(1000) DEFAULT NULL,
  `TYPE` int NOT NULL,
  `SORTNUM` int NOT NULL,
  `R_ID_LIST` varchar(1000) DEFAULT NULL,
  `REMARK` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `com`
--

LOCK TABLES `com` WRITE;
/*!40000 ALTER TABLE `com` DISABLE KEYS */;
/*!40000 ALTER TABLE `com` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comparam`
--

DROP TABLE IF EXISTS `comparam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comparam` (
  `ID` int NOT NULL,
  `COMID` int NOT NULL,
  `CODE` varchar(100) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `SORTNUM` int NOT NULL,
  `REMARK` varchar(1000) DEFAULT NULL,
  `EDTOR_JSON` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comparam`
--

LOCK TABLES `comparam` WRITE;
/*!40000 ALTER TABLE `comparam` DISABLE KEYS */;
/*!40000 ALTER TABLE `comparam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comparamext`
--

DROP TABLE IF EXISTS `comparamext`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comparamext` (
  `ID` int NOT NULL,
  `COMID` int NOT NULL,
  `COMPARAMID` int NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `SORTNUM` int NOT NULL,
  `REMARK` varchar(1000) DEFAULT NULL,
  `EDTOR_JSON` varchar(2000) DEFAULT NULL,
  `ISVALID` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comparamext`
--

LOCK TABLES `comparamext` WRITE;
/*!40000 ALTER TABLE `comparamext` DISABLE KEYS */;
/*!40000 ALTER TABLE `comparamext` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eveinfo`
--

DROP TABLE IF EXISTS `eveinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eveinfo` (
  `ID` bigint NOT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `REMARK` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eveinfo`
--

LOCK TABLES `eveinfo` WRITE;
/*!40000 ALTER TABLE `eveinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `eveinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evestep`
--

DROP TABLE IF EXISTS `evestep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evestep` (
  `ID` bigint NOT NULL,
  `EVEID` bigint NOT NULL,
  `STEP` int NOT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `REMARK` varchar(500) DEFAULT NULL,
  `ISVALID` int NOT NULL,
  `VIEWID` bigint DEFAULT NULL,
  `LOADINGMSG` varchar(1000) DEFAULT NULL,
  `SUBMITTYPE` int NOT NULL,
  `SUBMITCONTENT` varchar(4000) DEFAULT NULL,
  `GETSTEPTYPE` int NOT NULL,
  `GETSTEPCONTENT` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evestep`
--

LOCK TABLES `evestep` WRITE;
/*!40000 ALTER TABLE `evestep` DISABLE KEYS */;
/*!40000 ALTER TABLE `evestep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `javainfo`
--

DROP TABLE IF EXISTS `javainfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `javainfo` (
  `ID` int NOT NULL,
  `NAME` varchar(200) DEFAULT NULL,
  `REMARK` varchar(500) DEFAULT NULL,
  `ISVALID` int NOT NULL,
  `PARAM_JSON` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `javainfo`
--

LOCK TABLES `javainfo` WRITE;
/*!40000 ALTER TABLE `javainfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `javainfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pageinfo`
--

DROP TABLE IF EXISTS `pageinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pageinfo` (
  `ID` bigint NOT NULL,
  `TITLE` varchar(200) DEFAULT NULL,
  `REMARK` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `VIEWID` bigint DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pageinfo`
--

LOCK TABLES `pageinfo` WRITE;
/*!40000 ALTER TABLE `pageinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `pageinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqlinfo`
--

DROP TABLE IF EXISTS `sqlinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sqlinfo` (
  `ID` bigint NOT NULL,
  `DBID` int NOT NULL,
  `SQLCONTENT` varchar(4000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ISDYNAMIC` int NOT NULL,
  `ISVALID` int NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `REMARK` varchar(500) DEFAULT NULL,
  `EXECTYPE` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqlinfo`
--

LOCK TABLES `sqlinfo` WRITE;
/*!40000 ALTER TABLE `sqlinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `sqlinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqlparam`
--

DROP TABLE IF EXISTS `sqlparam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sqlparam` (
  `ID` bigint NOT NULL,
  `CODE` varchar(200) NOT NULL,
  `SQLID` bigint NOT NULL,
  `SECURITYTYPE` int NOT NULL,
  `INOROUT` int NOT NULL,
  `VALUETYPE` int NOT NULL,
  `VALUECONTENT` varchar(4000) DEFAULT NULL,
  `ISVALID` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqlparam`
--

LOCK TABLES `sqlparam` WRITE;
/*!40000 ALTER TABLE `sqlparam` DISABLE KEYS */;
/*!40000 ALTER TABLE `sqlparam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sqlpart`
--

DROP TABLE IF EXISTS `sqlpart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sqlpart` (
  `ID` int NOT NULL,
  `SQLCONTENT` varchar(4000) NOT NULL,
  `REMARK` varchar(500) DEFAULT NULL,
  `ISVALID` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sqlpart`
--

LOCK TABLES `sqlpart` WRITE;
/*!40000 ALTER TABLE `sqlpart` DISABLE KEYS */;
/*!40000 ALTER TABLE `sqlpart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sysvar`
--

DROP TABLE IF EXISTS `sysvar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sysvar` (
  `ID` int NOT NULL,
  `CODE` varchar(4000) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `GROUPNAME` varchar(200) DEFAULT NULL,
  `SORTNUM` int NOT NULL,
  `ISVALID` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sysvar`
--

LOCK TABLES `sysvar` WRITE;
/*!40000 ALTER TABLE `sysvar` DISABLE KEYS */;
/*!40000 ALTER TABLE `sysvar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viewinfo`
--

DROP TABLE IF EXISTS `viewinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viewinfo` (
  `ID` bigint NOT NULL,
  `COMID` int NOT NULL,
  `VIEWNAME` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viewinfo`
--

LOCK TABLES `viewinfo` WRITE;
/*!40000 ALTER TABLE `viewinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `viewinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viewparam`
--

DROP TABLE IF EXISTS `viewparam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viewparam` (
  `ID` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `VIEWID` bigint NOT NULL,
  `CODE` varchar(200) NOT NULL,
  `COMID` int NOT NULL,
  `COMPARAMID` int NOT NULL,
  `COMPARAMVALUE` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viewparam`
--

LOCK TABLES `viewparam` WRITE;
/*!40000 ALTER TABLE `viewparam` DISABLE KEYS */;
/*!40000 ALTER TABLE `viewparam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ysz_sys'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-06 20:45:24
