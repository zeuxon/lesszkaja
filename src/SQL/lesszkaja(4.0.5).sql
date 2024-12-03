-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2024 at 04:20 PM
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
-- Table structure for table `etterem`
--

CREATE TABLE `etterem` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL,
  `cim` varchar(255) NOT NULL,
  `felfuggesztve` tinyint(1) NOT NULL DEFAULT 0,
  `kep` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `etterem`
--

INSERT INTO `etterem` (`id`, `nev`, `emailcim`, `jelszo`, `telefonszam`, `cim`, `felfuggesztve`, `kep`) VALUES
(1, 'McDonalds', 'info@mcdonalds.com', '$2a$10$s5oYYS.3GG5izcGXixgy7.fRlri9iWVtqDC2pBcC2iuVpwZbH1TIW', '36301234567', 'Budapest, József körút 87.', 0, '1.png'),
(2, 'KFC', 'contact@kfc.com', '$2a$10$BvUqDcszj1.QQO4mdknCs.kpkUjSjRJLMlU4esC7XL.Nj.IsAjD5q', '36307654321', 'Budapest, Váci út 1-3.', 0, '2.png'),
(3, 'Burger King', 'support@burgerking.com', '$2a$10$6gEDh4JQTZja/lMecQznm.9ihoG8hI2Q0n/69EIgUHaSkIVUv1Kb.', '36202345678', 'Budapest, Király utca 42.', 0, '3.png'),
(4, 'Pizza Hut', 'info@pizzahut.com', '$2a$10$GePueDom0ROthkyalvk1GeDOCwSOrHLXWtjy5Lapryl3mIlziCGYO', '36308765432', 'Győr, Fő tér 5', 0, '4.png'),
(5, 'Subway', 'contact@subway.com', '$2a$10$Rs34oMUjVc/BFZF7SaUWy.OLmgl0XiOt5SZRtIXGEYe2zCbRGh3GG', '36703456789', 'Debrecen, Dózsa György út 8.', 0, '5.png'),
(6, 'Starbucks', 'support@starbucks.com', '$2a$10$TE4QAtxej1xlhG.tmnbvP.jAXE.XZyUs8Z6hVjGixfhGutC2wJthy', '36301239876', 'Budapest, Deák Ferenc tér 7.', 0, '6.png'),
(7, 'Pasta Bella', 'info@pastabella.com', '$2a$10$G0TorqKQX3U32EH6aetsVeXXZCADqdhgpx93SZYdQCubYjzhGsUiO', '36204567890', 'Budapest, Rákóczi út 54.', 0, '7.png'),
(8, 'Padthai Wokbar', 'contact@padthai.com', '$2a$10$MwrDYuSkoPHnTSfox1cDquSWAYNb7whU0vhiBfni14f/szIRJ150.', '36705678901', 'Budapest, Andrássy út 20.', 0, '8.png'),
(9, 'Wasabi', 'info@wasabi.com', '$2a$10$2crRn4oVqNLsqAYVzw/D..06Dp/JjeHd3wc/JEcQaRmpZ1HBAx/6S', '36306789012', 'Budapest, Lövőház utca 2-6.', 0, '9.png'),
(10, 'Bamba Marha Burger Bár', 'support@bambamarha.com', '$2a$10$knlvukZktKxEY1y6X160guApIAsTF5QIsjp2rABFL0MiblG0gk66S', '36207890123', 'Budapest, Kazinczy utca 11.', 0, '10.png'),
(25, 'emil', 'emil@emil.hu', '$2a$10$0S1gREXV.HMEtEyGYe.8wOqrUsnO/i1xq/GU0qN6TEKxWmqi1oa0C', '23123121332', 'emilke', 0, '25.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `etterem`
--
ALTER TABLE `etterem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cim` (`cim`),
  ADD UNIQUE KEY `emailcim` (`emailcim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `etterem`
--
ALTER TABLE `etterem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
