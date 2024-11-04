-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2024 at 05:49 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lesszkaja`
--

-- --------------------------------------------------------

--
-- Table structure for table `tipusa`
--

CREATE TABLE `tipusa` (
  `eteltipusok_nev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tipusa`
--
ALTER TABLE `tipusa`
  ADD KEY `eteltipusok.nev` (`eteltipusok_nev`,`etterem_cim`),
  ADD KEY `fk_tipusa_etterem` (`etterem_cim`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tipusa`
--
ALTER TABLE `tipusa`
  ADD CONSTRAINT `fk_tipusa_eteltipusok` FOREIGN KEY (`eteltipusok_nev`) REFERENCES `eteltipusok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipusa_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
