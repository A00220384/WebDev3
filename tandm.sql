DROP DATABASE IF EXISTS tandmSQL;
CREATE DATABASE IF NOT EXISTS tandmSQL;
USE tandmSQL;


SELECT 'CREATING TABLES' as 'INFO';

DROP TABLE IF EXISTS materials;
DROP TABLE IF EXISTS tools;

CREATE TABLE `tools` (
  `Name` varchar(32) NOT NULL,
  `Type` varchar(32) DEFAULT NULL,
  `Quantity` int(32) NULL,
  `price` DECIMAL(18,2),
  `ID` int(32) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
);

CREATE TABLE `materials` (
  `Name` varchar(32) NOT NULL,
  `Type` varchar(32) DEFAULT NULL,
  `Quantity` int(32) NULL,
  `Diameter` double(32,4) NULL,
  `Length` double(32,4) NULL,
  `Thickness` double(32,4) NULL,
  `Outdoor` varchar(32) NULL,
  `Colour` varchar(32) NULL,
  `price` DECIMAL(18,2),
  `Image` varchar(32) NULL,
  `ID` int(32) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

INSERT INTO `materials` VALUES ("Nails", "20mm", 4000, 0.0000, 20.0000, 0.0000, "yes", "", 00.05, "nails.jpg", 1);
INSERT INTO `materials` VALUES ("Pipe", "Copper", 200, 2.2250, 400.0000, 0.0000, "yes", "", 10.95, "cpipe.jpg", 2);
INSERT INTO `materials` VALUES ("Wood", "2 X 6", 500, 0.0000, 300.0000, 0.0000, "yes", "", 03.25, "2x4.jpg", 3);
INSERT INTO `materials` VALUES ("Wood", "2 X 4", 500, 0.0000, 300.0000, 0.0000, "yes", "", 02.25, "2x4.jpg", 4);
INSERT INTO `materials` VALUES ("PVC Pipe", "plastic", 200, 2.2250, 400.0000, 0.0000, "yes", "", 8.95, "pvcp.jpg", 5);
INSERT INTO `materials` VALUES ("Nails", "20mm", 4000, 0.0000, 20.0000, 0.0000, "yes", "", 00.05, "nails.jpg", 6);
INSERT INTO `materials` VALUES ("Pipe", "Copper", 200, 2.2250, 400.0000, 0.0000, "yes", "", 10.95, "cpipe.jpg", 7);
INSERT INTO `materials` VALUES ("Wood", "2 X 6", 500, 0.0000, 300.0000, 0.0000, "yes", "", 03.25, "2x4.jpg", 8);
INSERT INTO `materials` VALUES ("Wood", "2 X 4", 500, 0.0000, 300.0000, 0.0000, "yes", "", 02.25, "2x4.jpg", 9);
INSERT INTO `materials` VALUES ("PVC Pipe", "plastic", 200, 2.2250, 400.0000, 0.0000, "yes", "", 8.95, "pvcp.jpg", 10);

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `wine`
--

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wine`
--

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2011-12-01  9:22:24