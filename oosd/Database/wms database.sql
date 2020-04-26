-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wms_db
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daily attendance`
--

DROP TABLE IF EXISTS `daily attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daily attendance` (
  `Date` date NOT NULL,
  `Division` int NOT NULL,
  `Employee id` int NOT NULL,
  `Vehicle/Walk` int DEFAULT NULL,
  PRIMARY KEY (`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily attendance`
--

LOCK TABLES `daily attendance` WRITE;
/*!40000 ALTER TABLE `daily attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `daily attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `division table`
--

DROP TABLE IF EXISTS `division table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `division table` (
  `Division No` int NOT NULL,
  `Division Name` varchar(45) NOT NULL,
  `Assigned No of workers` int DEFAULT NULL,
  `No of hand carts` int DEFAULT NULL,
  PRIMARY KEY (`Division No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `division table`
--

LOCK TABLES `division table` WRITE;
/*!40000 ALTER TABLE `division table` DISABLE KEYS */;
INSERT INTO `division table` VALUES (1,'Gattuwana',6,2),(2,'Udawalpola',7,3),(3,'Dambulla Road',6,2),(4,'Kandy Road',7,3),(5,'Thanayam Pitiya',5,2),(6,'Lake Round',9,3),(7,'Puttalam Road',7,3),(8,'Negombo Road',9,3),(9,'Bauddaloka Road',6,2),(10,'Malkaduwawa',6,2),(11,'Wehera',9,3),(12,'Kadaveediya(Yesterday Night)',NULL,NULL),(13,'Kadaveediya(Day)',8,3),(14,'Central Market(Day)',4,3),(15,'Central Market(Yesterday Night)',NULL,NULL),(16,'Public Fair',7,3),(17,'Drainage Cleaning Team',12,NULL),(18,'Depot',1,NULL),(19,'Tractor Gully',NULL,NULL),(20,'Main Gully',NULL,NULL),(21,'Special Team',NULL,NULL);
/*!40000 ALTER TABLE `division table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee table`
--

DROP TABLE IF EXISTS `employee table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee table` (
  `employee id` int NOT NULL,
  `salary id` int DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  `dob` date DEFAULT NULL,
  `employee type` int NOT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`employee id`),
  UNIQUE KEY `employee id_UNIQUE` (`employee id`),
  UNIQUE KEY `salary id_UNIQUE` (`salary id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee table`
--

LOCK TABLES `employee table` WRITE;
/*!40000 ALTER TABLE `employee table` DISABLE KEYS */;
INSERT INTO `employee table` VALUES (178,659,'M.Sunil Fernando','1963-10-21',1,'M'),(181,658,'R.Kandasami','1964-10-14',1,'M'),(194,614,'R.Subramaniyam','1961-03-03',1,'M'),(196,615,'P.Shreedar','1964-10-14',1,'M'),(211,611,'M.padmanadan','1964-02-24',1,'M'),(213,572,'T.Murthi','1996-12-18',1,'M'),(219,612,'K.Selwakumar','1963-12-14',1,'M'),(223,610,'V.Kalidasan','1963-10-05',1,'M'),(226,635,'M.Siwanadan','1966-04-12',1,'M'),(227,1240,'N.Siwakumar',NULL,1,'M'),(228,624,'P.Swaminadan','1967-11-12',1,'M'),(231,636,'S.Siwanandan','1969-02-11',1,'M'),(237,609,'S.Rajamani','1964-12-12',1,'M'),(239,NULL,'P.Kandaiya',NULL,1,'M'),(243,627,'S.Balachandran','1969-01-01',1,'M'),(244,1573,'M.pupakan','1966-05-11',1,'M'),(246,632,'M.Sekar','1968-04-14',1,'M'),(251,637,'P.Lechchamma','1966-05-13',1,'M'),(259,1213,'V.Arasarathnam','1966-03-06',1,'M'),(261,1236,'G.Paramanadan',NULL,1,'M'),(262,625,'L.Chandiran','1969-04-23',1,'M'),(265,626,'S.M.Rajabdin',NULL,1,'M'),(266,NULL,'D.Wijendran',NULL,1,'M'),(279,631,'M.Rajendran',NULL,1,'M'),(281,1361,'P.Allimuththu',NULL,1,'M'),(285,1347,'W.Knanawelu',NULL,1,'M'),(302,NULL,'L.muthukumar',NULL,1,'M'),(304,676,'V.Ravichandran','1972-07-09',1,'M'),(308,640,'P.Balasubraniyam','1969-09-04',1,'M'),(311,656,'P.Siwasuriyan','1973-02-28',1,'M'),(327,643,'W.A.Samarakkodi','1967-03-29',1,'M'),(341,1233,'Weeramuttu Raja',NULL,1,'M'),(342,680,'P.Arumugam','1969-06-20',1,'M'),(343,68,'A.Jesupalan','1974-09-29',1,'M'),(345,689,'M.Jeganadan','1973-11-29',1,'M'),(346,683,'S.N.Weliyan','1968-05-16',1,'M'),(348,1399,'D.Wijepalan',NULL,1,'M'),(350,677,'M.Rubramaniyam','1963-06-23',1,'M'),(353,653,'N.Wijayaraj','1973-09-03',1,'M'),(354,1364,'K.Siwaknanam',NULL,1,'M'),(356,644,'S.Udayakumar','1974-03-18',1,'M'),(363,1128,'D.M.Premathilaka','1962-07-20',1,'M'),(364,1141,'M.A.Chandrapala','1970-06-06',1,'M'),(367,1225,'S.Kalirajan',NULL,1,'M'),(373,1211,'Rohana Weerasinghe','1977-08-28',1,'M'),(378,1226,'A.P.Arunawalam',NULL,1,'M'),(380,1186,'S.Peruma','1976-06-14',1,'M'),(381,1127,'S.Kumaraswami','1978-01-22',1,'M'),(382,1295,'R,Ramachandran',NULL,1,'M'),(385,1224,'M.Mahendran',NULL,1,'M'),(386,1230,'P.Perumal',NULL,1,'M'),(387,1142,'R.Krishna Kumar','1979-10-05',1,'M'),(388,1118,'Vilfrad Antony','1965-06-08',1,'M'),(393,1111,'S.Kalidasan','1975-06-16',1,'M'),(404,1189,'V.Rajarathnam','1977-11-09',1,'M'),(409,1132,'B.G.Harishchandra','1968-01-15',1,'M'),(418,1241,'M.Ravischandran',NULL,1,'M'),(421,NULL,'S.Raman',NULL,1,'M'),(422,1377,'M.Ranjith Kumar',NULL,1,'M'),(424,1198,'N.Baala','1976-12-02',1,'M'),(433,1151,'S.Muralidaran','1981-03-20',1,'M'),(434,NULL,'V.Siwapalan',NULL,1,'M'),(435,1390,'D.M.Indika Kumara',NULL,1,'M'),(436,1110,'S.Rejinikadan','1979-01-11',1,'M'),(439,1107,'R.Chandira Sekaran','1980-06-08',1,'M'),(441,NULL,'P.Ramesh',NULL,1,'M'),(442,NULL,'R.Jagath Kumara',NULL,1,'M'),(443,1117,'W.P.Sanath Amarasinghe','1972-06-26',1,'M'),(446,1158,'S.C.Kumar','1980-07-02',1,'M'),(449,1115,'R.D.Sarath Wijesiri','1963-07-17',1,'M'),(450,1187,'S.Thureiraja','1983-03-02',1,'M'),(453,1374,'R.A.Saman Kumara',NULL,1,'M'),(454,1210,'D.Ramesh','1979-09-21',1,'M'),(460,1191,'A,Yoganadan','1980-03-23',1,'M'),(461,1278,'R.Siwapalan',NULL,1,'M'),(462,1192,'S.Siwabalan','1974-12-25',1,'M'),(465,1194,'K.Nawaneshan','1985-01-14',1,'M'),(466,1197,'Prasanna Wijayalath','1978-10-10',1,'M'),(467,1195,'K.Sadasiwam','1979-05-05',1,'M'),(468,1196,'B.Ananda Kumar','1983-05-17',1,'M'),(469,1209,'S.Kaneshan Murthi','1984-10-22',1,'M'),(470,1193,'M.Dayabaran','1981-05-29',1,'M'),(471,1190,'H.Prasanna Premadasa','1980-07-15',1,'M'),(472,1228,'S.Siwan Raja',NULL,1,'M'),(473,1379,'K.Nawaneedan',NULL,1,'M'),(474,1368,'R.M.Premasiri',NULL,1,'M'),(476,1199,'G.Premadasa','1964-09-05',1,'M'),(477,1232,'S.Raj Kumar',NULL,1,'M'),(480,1185,'A.K.G.Nimal','1975-12-17',1,'M'),(483,NULL,'S.Dawaskar',NULL,1,'M'),(484,1300,'P.Ragu',NULL,1,'M'),(486,1052,'A.Ravichandran',NULL,1,'M'),(490,1345,'A.kumareshan',NULL,1,'M'),(491,1346,'Mahalingam Mahendran',NULL,1,'M'),(492,1339,'Krishnan Sudagar',NULL,1,'M'),(494,1369,'A.P.Lal Gunathilaka',NULL,1,'M'),(496,NULL,'M.Ragu',NULL,1,'M'),(498,1372,'A.Siwachandran',NULL,1,'M'),(499,1343,'M.Madan Kumar',NULL,1,'M'),(501,1371,'R.M.Balasuriyan',NULL,1,'M'),(502,1370,'P.Paramasiwan',NULL,1,'M'),(503,1359,'S.Arjanal',NULL,1,'M'),(504,1366,'P.Saran Raj',NULL,1,'M'),(505,1350,'V.Rajinikanth',NULL,1,'M'),(506,1351,'S.Chandrawelu',NULL,1,'M'),(507,1373,'M.Wishvanadan',NULL,1,'M'),(508,1348,'R.A.Sudarshana',NULL,1,'M'),(509,1338,'Sandanam Siwakumar',NULL,1,'M'),(510,1380,'J.Yogaraj',NULL,1,'M'),(512,378,'R.Selwakumar',NULL,1,'M'),(513,1336,'S.Siwakumar',NULL,1,'M'),(514,1337,'K.Jeewanadan',NULL,1,'M'),(515,1376,'B.Mugundan',NULL,1,'M'),(517,1365,'S.Shreekanth',NULL,1,'M');
/*!40000 ALTER TABLE `employee table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `Index No` int NOT NULL,
  `Vehicle Num` varchar(45) NOT NULL,
  PRIMARY KEY (`Index No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (1,'RD-8394'),(2,'RD-8399'),(3,'49-9423'),(4,'ZB-365'),(5,'RE-9396'),(6,'RQ-794'),(7,'RD-8392'),(8,'RD-4877'),(9,'48-824'),(10,'RD-8390'),(11,'RD-8318'),(12,'43-2882'),(13,'RD-1610');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle distribution`
--

DROP TABLE IF EXISTS `vehicle distribution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle distribution` (
  `Date` date NOT NULL,
  `Division` int DEFAULT NULL,
  `Vehicle Index` int NOT NULL,
  PRIMARY KEY (`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle distribution`
--

LOCK TABLES `vehicle distribution` WRITE;
/*!40000 ALTER TABLE `vehicle distribution` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle distribution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle repair`
--

DROP TABLE IF EXISTS `vehicle repair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle repair` (
  `Vehicle No` varchar(30) NOT NULL,
  `Vehicle Type` varchar(45) NOT NULL,
  `Repair In` date DEFAULT NULL,
  `Repair Out` date DEFAULT NULL,
  `Repair Place` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Vehicle No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle repair`
--

LOCK TABLES `vehicle repair` WRITE;
/*!40000 ALTER TABLE `vehicle repair` DISABLE KEYS */;
/*!40000 ALTER TABLE `vehicle repair` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-26 19:24:20
