-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2024 at 07:27 PM
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
-- Table structure for table `alaposszetevoje`
--

CREATE TABLE `alaposszetevoje` (
  `termek_nev` varchar(255) NOT NULL,
  `alaposszetevok_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `alaposszetevok`
--

CREATE TABLE `alaposszetevok` (
  `nev` varchar(255) NOT NULL,
  `egyseg` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `allergenek`
--

CREATE TABLE `allergenek` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `eteltipusok`
--

CREATE TABLE `eteltipusok` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `etterem`
--

CREATE TABLE `etterem` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL,
  `cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `felhasznalo`
--

CREATE TABLE `felhasznalo` (
  `id` int(11) NOT NULL,
  `felhasznalonev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL,
  `lakcim` varchar(255) NOT NULL,
  `admine` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `futar`
--

CREATE TABLE `futar` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kosar`
--

CREATE TABLE `kosar` (
  `datum` date NOT NULL,
  `kiszallitva` tinyint(1) NOT NULL DEFAULT 0,
  `osszar` int(11) NOT NULL,
  `futar_futarid` int(11) NOT NULL,
  `felhasznalo_felhasznalonev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `osszetevoje`
--

CREATE TABLE `osszetevoje` (
  `osszetevok_nev` varchar(255) NOT NULL,
  `termek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `osszetevok`
--

CREATE TABLE `osszetevok` (
  `ar` decimal(10,2) NOT NULL,
  `egyseg` varchar(25) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `termek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `raktar`
--

CREATE TABLE `raktar` (
  `osszetevok_nev` varchar(255) NOT NULL,
  `mennyiseg` int(11) NOT NULL,
  `raktarid` int(11) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL,
  `alaposszetevok_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tartalmaz`
--

CREATE TABLE `tartalmaz` (
  `termek_nev` varchar(255) NOT NULL,
  `allergenek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `termek`
--

CREATE TABLE `termek` (
  `alapar` decimal(10,2) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
-- Indexes for table `alaposszetevoje`
--
ALTER TABLE `alaposszetevoje`
  ADD KEY `termek.nev` (`termek_nev`,`alaposszetevok_nev`),
  ADD KEY `fk_alaposszetevoje_alaposszetevok` (`alaposszetevok_nev`);

--
-- Indexes for table `alaposszetevok`
--
ALTER TABLE `alaposszetevok`
  ADD PRIMARY KEY (`nev`);

--
-- Indexes for table `allergenek`
--
ALTER TABLE `allergenek`
  ADD PRIMARY KEY (`nev`);

--
-- Indexes for table `eteltipusok`
--
ALTER TABLE `eteltipusok`
  ADD PRIMARY KEY (`nev`);

--
-- Indexes for table `etterem`
--
ALTER TABLE `etterem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cim` (`cim`),
  ADD UNIQUE KEY `emailcim` (`emailcim`);

--
-- Indexes for table `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `felhasznalonev` (`felhasznalonev`),
  ADD UNIQUE KEY `emailcim` (`emailcim`),
  ADD UNIQUE KEY `telefonszam` (`telefonszam`);

--
-- Indexes for table `futar`
--
ALTER TABLE `futar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefonszam` (`telefonszam`),
  ADD UNIQUE KEY `emailcim` (`emailcim`);

--
-- Indexes for table `kosar`
--
ALTER TABLE `kosar`
  ADD KEY `fk_kosar_etterem` (`etterem_cim`),
  ADD KEY `fk_kosar_futar` (`futar_futarid`),
  ADD KEY `fk_kosar_felhasznalo` (`felhasznalo_felhasznalonev`);

--
-- Indexes for table `osszetevoje`
--
ALTER TABLE `osszetevoje`
  ADD KEY `osszetevok.nev` (`osszetevok_nev`,`termek_nev`),
  ADD KEY `fk_osszetevoje_termek` (`termek_nev`);

--
-- Indexes for table `osszetevok`
--
ALTER TABLE `osszetevok`
  ADD PRIMARY KEY (`nev`),
  ADD KEY `termek.nev` (`termek_nev`);

--
-- Indexes for table `raktar`
--
ALTER TABLE `raktar`
  ADD PRIMARY KEY (`raktarid`),
  ADD KEY `fk_raktar_etterem` (`etterem_cim`),
  ADD KEY `fk_raktar_osszetevok` (`osszetevok_nev`),
  ADD KEY `fk_raktar_alaposszetevok` (`alaposszetevok_nev`);

--
-- Indexes for table `tartalmaz`
--
ALTER TABLE `tartalmaz`
  ADD KEY `termek.nev` (`termek_nev`,`allergenek_nev`),
  ADD KEY `fk_tartalmaz_allergenek` (`allergenek_nev`);

--
-- Indexes for table `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`nev`),
  ADD KEY `etterem.cim` (`etterem_cim`);

--
-- Indexes for table `tipusa`
--
ALTER TABLE `tipusa`
  ADD KEY `eteltipusok.nev` (`eteltipusok_nev`,`etterem_cim`),
  ADD KEY `fk_tipusa_etterem` (`etterem_cim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `etterem`
--
ALTER TABLE `etterem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `futar`
--
ALTER TABLE `futar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `raktar`
--
ALTER TABLE `raktar`
  MODIFY `raktarid` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alaposszetevoje`
--
ALTER TABLE `alaposszetevoje`
  ADD CONSTRAINT `fk_alaposszetevoje_alaposszetevok` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_alaposszetevoje_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kosar`
--
ALTER TABLE `kosar`
  ADD CONSTRAINT `fk_kosar_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kosar_felhasznalo` FOREIGN KEY (`felhasznalo_felhasznalonev`) REFERENCES `felhasznalo` (`felhasznalonev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kosar_futar` FOREIGN KEY (`futar_futarid`) REFERENCES `futar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `osszetevoje`
--
ALTER TABLE `osszetevoje`
  ADD CONSTRAINT `fk_osszetevoje_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipusa_osszetevok` FOREIGN KEY (`osszetevok_nev`) REFERENCES `osszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `osszetevok`
--
ALTER TABLE `osszetevok`
  ADD CONSTRAINT `fk_osszetevok_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `raktar`
--
ALTER TABLE `raktar`
  ADD CONSTRAINT `fk_raktar_alaposszetevok` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_raktar_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_raktar_osszetevok` FOREIGN KEY (`osszetevok_nev`) REFERENCES `osszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tartalmaz`
--
ALTER TABLE `tartalmaz`
  ADD CONSTRAINT `fk_tartalmaz_allergenek` FOREIGN KEY (`allergenek_nev`) REFERENCES `allergenek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tartalmaz_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `termek`
--
ALTER TABLE `termek`
  ADD CONSTRAINT `fk_termek_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE;

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
