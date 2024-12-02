-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2024 at 11:16 AM
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

--
-- Dumping data for table `alaposszetevoje`
--

INSERT INTO `alaposszetevoje` (`termek_nev`, `alaposszetevok_nev`) VALUES
('Cheese Burger', 'Cheddar sajt'),
('Cheese Burger', 'Hagymakarikák'),
('Cheese Burger', 'Marhahús'),
('Cheese Burger', 'Paradicsom'),
('Latte', 'Saláta'),
('Latte', 'Zsemle'),
('Pepperoni Pizza', 'Cheddar sajt'),
('Pepperoni Pizza', 'Paradicsom'),
('Pepperoni Pizza', 'Pizza tészta'),
('Pepperoni Pizza', 'Saláta'),
('Rákos Pad Thai', 'Csirkehús'),
('Rákos Pad Thai', 'Hagymakarikák'),
('Rákos Pad Thai', 'Saláta'),
('Sub Szendvics', 'Hagymakarikák'),
('Sub Szendvics', 'Pasta'),
('Sushi', 'Sushi rizs'),
('Sushi', 'Wasabi'),
('Whopper', 'Cheddar sajt'),
('Whopper', 'Marhahús'),
('Whopper', 'Paradicsom'),
('Whopper', 'Saláta'),
('Zinger Burger', 'Cheddar sajt'),
('Zinger Burger', 'Csirkehús'),
('Zinger Burger', 'Hagymakarikák'),
('Zinger Burger', 'Paradicsom');

-- --------------------------------------------------------

--
-- Table structure for table `alaposszetevok`
--

CREATE TABLE `alaposszetevok` (
  `nev` varchar(255) NOT NULL,
  `egyseg` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `alaposszetevok`
--

INSERT INTO `alaposszetevok` (`nev`, `egyseg`) VALUES
('alma', 1),
('Bacon', 8),
('Burgonyapüré', 8),
('Cheddar sajt', 7),
('Chili', 5),
('Csirkehús', 8),
('Cukor', 3),
('Curry', 6),
('Fokhagyma', 6),
('Hagymakarikák', 6),
('Hamis hús', 9),
('Kecskesajt', 5),
('Kókuszreszelék', 4),
('Kókusztej', 4),
('Lazac', 9),
('Lettuce', 4),
('Marhahús', 9),
('Mozzarella', 7),
('Olívaolaj', 5),
('Paradicsom', 5),
('Pasta', 8),
('Pesto', 6),
('Pizza tészta', 7),
('Rántott hagyma', 6),
('Sajt', 8),
('Saláta', 4),
('Sushi rizs', 6),
('Szarvasgomba', 2),
('Szezámmag', 7),
('Szósz', 3),
('Tártár szósz', 5),
('Tojás', 7),
('Tojásos tészta', 8),
('Túrós tészta', 7),
('Wasabi', 2),
('Zsemle', 10);

-- --------------------------------------------------------

--
-- Table structure for table `allergenek`
--

CREATE TABLE `allergenek` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `allergenek`
--

INSERT INTO `allergenek` (`nev`) VALUES
('Dió'),
('Glutén'),
('Hal'),
('Laktóz'),
('Mogyoró'),
('Rák'),
('Szója'),
('Tej'),
('Tojás'),
('Zeller');

-- --------------------------------------------------------

--
-- Table structure for table `eteltipusok`
--

CREATE TABLE `eteltipusok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `eteltipusok`
--

INSERT INTO `eteltipusok` (`id`, `nev`) VALUES
(1, 'Coleslaw saláta'),
(2, 'Csirke nugget'),
(3, 'Csirke szárny'),
(4, 'Gourmet hamburger'),
(5, 'Hamburger'),
(6, 'Kávé'),
(7, 'Kézműves étel'),
(8, 'Kínai tészta'),
(9, 'Pizza'),
(10, 'Rántott csirke'),
(11, 'Saláta'),
(12, 'Sashimi'),
(13, 'Sushi'),
(14, 'Sült krumpli'),
(15, 'Sütemény'),
(16, 'Szendvics'),
(17, 'Tészta'),
(18, 'Whopper'),
(19, 'Wok étel');

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
(1, 'McDonalds', 'info@mcdonalds.com', '$2a$10$s5oYYS.3GG5izcGXixgy7.fRlri9iWVtqDC2pBcC2iuVpwZbH1TIW', '36301234567', 'Budapest, József körút 87.', 0, 'mcdonalds1.png'),
(2, 'KFC', 'contact@kfc.com', '$2a$10$BvUqDcszj1.QQO4mdknCs.kpkUjSjRJLMlU4esC7XL.Nj.IsAjD5q', '36307654321', 'Budapest, Váci út 1-3.', 0, 'kfc2.png'),
(3, 'Burger King', 'support@burgerking.com', '$2a$10$6gEDh4JQTZja/lMecQznm.9ihoG8hI2Q0n/69EIgUHaSkIVUv1Kb.', '36202345678', 'Budapest, Király utca 42.', 0, NULL),
(4, 'Pizza Hut', 'info@pizzahut.com', '$2a$10$GePueDom0ROthkyalvk1GeDOCwSOrHLXWtjy5Lapryl3mIlziCGYO', '36308765432', 'Győr, Fő tér 5', 0, NULL),
(5, 'Subway', 'contact@subway.com', '$2a$10$Rs34oMUjVc/BFZF7SaUWy.OLmgl0XiOt5SZRtIXGEYe2zCbRGh3GG', '36703456789', 'Debrecen, Dózsa György út 8.', 0, NULL),
(6, 'Starbucks', 'support@starbucks.com', '$2a$10$TE4QAtxej1xlhG.tmnbvP.jAXE.XZyUs8Z6hVjGixfhGutC2wJthy', '36301239876', 'Budapest, Deák Ferenc tér 7.', 0, NULL),
(7, 'Pasta Bella', 'info@pastabella.com', '$2a$10$G0TorqKQX3U32EH6aetsVeXXZCADqdhgpx93SZYdQCubYjzhGsUiO', '36204567890', 'Budapest, Rákóczi út 54.', 0, NULL),
(8, 'Padthai Wokbar', 'contact@padthai.com', '$2a$10$MwrDYuSkoPHnTSfox1cDquSWAYNb7whU0vhiBfni14f/szIRJ150.', '36705678901', 'Budapest, Andrássy út 20.', 0, NULL),
(9, 'Wasabi', 'info@wasabi.com', '$2a$10$2crRn4oVqNLsqAYVzw/D..06Dp/JjeHd3wc/JEcQaRmpZ1HBAx/6S', '36306789012', 'Budapest, Lövőház utca 2-6.', 0, NULL),
(10, 'Bamba Marha Burger Bár', 'support@bambamarha.com', '$2a$10$knlvukZktKxEY1y6X160guApIAsTF5QIsjp2rABFL0MiblG0gk66S', '36207890123', 'Budapest, Kazinczy utca 11.', 0, NULL);

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
  `admine` tinyint(1) NOT NULL DEFAULT 0,
  `felfuggesztve` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `felhasznalo`
--

INSERT INTO `felhasznalo` (`id`, `felhasznalonev`, `emailcim`, `jelszo`, `telefonszam`, `lakcim`, `admine`, `felfuggesztve`) VALUES
(15, 'Teszt Elek', 'tesztelek@teszt.hu', '$2a$10$I894QA6Gq.8UCpAhTNbBLuFDXv4BZtmZ2CpE43Mt6gsJDjox4DYiO', '12345678910', 'Teszt utca 2.', 1, 0),
(23, 'Józsi', 'jozsi@gmail.com', '$2a$10$ruMseninY1HAg04MVon3IuzDlq3EPlzDwatKOsK.QB1SH/jihWeXq', '11111111111', 'Jó utca', 0, 0),
(24, 'László', 'laszlo@gmail.com', '$2a$10$MXlxulh3gC1J8EFWgo8JhOkAsYzR6snSrKEzHnjDL6TxQlvkQATpC', '22222222222', 'Jobb utca', 0, 0),
(25, 'Pista', 'pista@gmail.com', '$2a$10$FhJkJ1cJnoUV.YLytqJCuesDObGlcX1GnsfT1i0sc3J2O6KaLTmPe', '33333333333', 'Legjobb utca', 0, 1),
(26, 'Sára', 'sara@gmail.com', '$2a$10$SPCOS2glqERJ7Z///vd/S.paTuxcGoHuVgyNJcDRQlV3BAf0ul5ei', '44444444444', 'Viszonylag jó utca', 0, 0),
(27, 'Anita', 'anita@gmail.com', '$2a$10$VtKX6xJDEG1e54p1GuJlJ.oa20.Wly8EjUS4iRlq8Cxof6cfcHdjS', '55555555555', 'Elfogadhatóan jó utca', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `futar`
--

CREATE TABLE `futar` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL,
  `felfuggesztve` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `futar`
--

INSERT INTO `futar` (`id`, `nev`, `emailcim`, `jelszo`, `telefonszam`, `felfuggesztve`) VALUES
(2, 'Futaregy', 'futaregy@futar.com', '$2a$10$g927Giv3YUyupCQKxsWy5.T84B57PsSEe0gKP795QoSSlSyjExkOO', '00000000000', 0),
(3, 'Futarketto', 'futarketto@futar.com', '$2a$10$0gb1/.dLefqHPpp.kLcVYui/cBbcuEa2yApgSKOrrfof6tPanIXGG', '11111111111', 0);

-- --------------------------------------------------------

--
-- Table structure for table `kosar`
--

CREATE TABLE `kosar` (
  `id` int(11) NOT NULL,
  `datum` date NOT NULL,
  `kiszallitva` tinyint(1) NOT NULL DEFAULT 0,
  `osszar` int(11) NOT NULL,
  `futar_futarid` int(11) DEFAULT NULL,
  `felhasznalo_felhasznalonev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `kosar`
--

INSERT INTO `kosar` (`id`, `datum`, `kiszallitva`, `osszar`, `futar_futarid`, `felhasznalo_felhasznalonev`, `etterem_cim`) VALUES
(1, '2024-11-09', 1, 200, 2, 'Teszt Elek', 'Budapest, Király utca 42.'),
(2, '2024-11-10', 1, 3000, 2, 'Teszt Elek', 'Budapest, Váci út 1-3.'),
(3, '2024-11-09', 0, 200, 2, 'Teszt Elek', 'Budapest, Király utca 42.'),
(4, '2024-11-10', 1, 3000, 2, 'Teszt Elek', 'Budapest, Váci út 1-3.'),
(5, '2024-11-09', 1, 76795, 2, 'Teszt Elek', 'Budapest, Rákóczi út 54.');

-- --------------------------------------------------------

--
-- Table structure for table `osszetevoje`
--

CREATE TABLE `osszetevoje` (
  `osszetevok_nev` varchar(255) NOT NULL,
  `termek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `osszetevoje`
--

INSERT INTO `osszetevoje` (`osszetevok_nev`, `termek_nev`) VALUES
('Bacon', 'Cheese Burger'),
('Cheddar sajt', 'Whopper'),
('Csirkehús', 'Zinger Burger'),
('Hagymakarikák', 'Cheese Burger'),
('Kecskesajt', 'Latte'),
('Kókusztej', 'Latte'),
('Marhahús', 'Cheese Burger'),
('Paradicsom', 'Pepperoni Pizza'),
('Pasta', 'Pasta a la Rome'),
('Pizza tészta', 'Pepperoni Pizza'),
('Saláta', 'Sub Szendvics'),
('Sushi rizs', 'Sushi'),
('Szósz', 'Smash Burger'),
('Tojás', 'Rákos Pad Thai'),
('Wasabi', 'Sushi'),
('Zsemle', 'Whopper');

-- --------------------------------------------------------

--
-- Table structure for table `osszetevok`
--

CREATE TABLE `osszetevok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `ar` decimal(10,2) NOT NULL,
  `egyseg` int(11) NOT NULL,
  `raktar_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `osszetevok`
--

INSERT INTO `osszetevok` (`id`, `nev`, `ar`, `egyseg`, `raktar_id`) VALUES
(1, 'Bacon', 130.00, 8, 4),
(2, 'Cheddar sajt', 100.00, 7, 4),
(3, 'Csirkehús', 150.00, 8, 4),
(4, 'Hagymakarikák', 50.00, 6, 4),
(5, 'Kecskesajt', 110.00, 5, 4),
(6, 'Kókusztej', 90.00, 4, 4),
(7, 'Marhahús', 200.00, 9, 4),
(8, 'Paradicsom', 80.00, 5, 4),
(9, 'Pasta', 140.00, 8, 4),
(10, 'Pizza tészta', 120.00, 7, 4),
(11, 'Saláta', 60.00, 4, 4),
(12, 'Sushi rizs', 70.00, 6, 4),
(13, 'Szósz', 30.00, 3, 4),
(14, 'Tojás', 100.00, 7, 4),
(15, 'Wasabi', 80.00, 3, 4),
(16, 'Zsemle', 90.00, 10, 4);

-- --------------------------------------------------------

--
-- Table structure for table `raktar`
--

CREATE TABLE `raktar` (
  `id` int(11) NOT NULL,
  `osszetevo` varchar(255) NOT NULL,
  `mennyiseg` int(11) NOT NULL,
  `etterem_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `raktar`
--

INSERT INTO `raktar` (`id`, `osszetevo`, `mennyiseg`, `etterem_id`) VALUES
(4, 'Sajtok', 8000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `raktar_alaposszetevok`
--

CREATE TABLE `raktar_alaposszetevok` (
  `alaposszetevok_nev` varchar(255) NOT NULL,
  `raktar_raktarid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `raktar_alaposszetevok`
--

INSERT INTO `raktar_alaposszetevok` (`alaposszetevok_nev`, `raktar_raktarid`) VALUES
('alma', 4),
('Bacon', 4),
('Kecskesajt', 4);

-- --------------------------------------------------------

--
-- Table structure for table `raktar_osszetevok`
--

CREATE TABLE `raktar_osszetevok` (
  `raktar_raktarid` int(11) NOT NULL,
  `osszetevok_nev` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Dumping data for table `raktar_osszetevok`
--

INSERT INTO `raktar_osszetevok` (`raktar_raktarid`, `osszetevok_nev`) VALUES
(4, 'Saláta'),
(4, 'Bacon');

-- --------------------------------------------------------

--
-- Table structure for table `tartalmaz`
--

CREATE TABLE `tartalmaz` (
  `termek_id` int(11) NOT NULL,
  `allergenek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `tartalmaz`
--

INSERT INTO `tartalmaz` (`termek_id`, `allergenek_nev`) VALUES
(1, 'Glutén'),
(2, 'Tej'),
(3, 'Glutén'),
(4, 'Glutén'),
(5, 'Rák'),
(6, 'Glutén'),
(7, 'Glutén'),
(8, 'Hal'),
(9, 'Tojás'),
(10, 'Glutén');

-- --------------------------------------------------------

--
-- Table structure for table `termek`
--

CREATE TABLE `termek` (
  `id` int(11) NOT NULL,
  `alapar` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `termek`
--

INSERT INTO `termek` (`id`, `alapar`, `nev`, `etterem_cim`) VALUES
(1, 999, 'Cheese Burger', 'Budapest, József körút 87.'),
(2, 2200, 'Latte', 'Budapest, Deák Ferenc tér 7.'),
(3, 2500, 'Pasta a la Rome', 'Budapest, Rákóczi út 54.'),
(4, 1300, 'Pepperoni Pizza', 'Győr, Fő tér 5'),
(5, 1800, 'Rákos Pad Thai', 'Budapest, Andrássy út 20.'),
(6, 5000, 'Smash Burger', 'Budapest, Kazinczy utca 11.'),
(7, 900, 'Sub Szendvics', 'Debrecen, Dózsa György út 8.'),
(8, 2300, 'Sushi', 'Budapest, Lövőház utca 2-6.'),
(9, 1600, 'Whopper', 'Budapest, Király utca 42.'),
(10, 1500, 'Zinger Burger', 'Budapest, Váci út 1-3.');

-- --------------------------------------------------------

--
-- Table structure for table `termek_osszetevok`
--

CREATE TABLE `termek_osszetevok` (
  `id` int(11) NOT NULL,
  `termek_id` int(11) NOT NULL,
  `osszetevo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `termek_osszetevok`
--

INSERT INTO `termek_osszetevok` (`id`, `termek_id`, `osszetevo_id`) VALUES
(1, 1, 15),
(2, 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `tipuskapcsolat`
--

CREATE TABLE `tipuskapcsolat` (
  `etterem_id` int(11) NOT NULL,
  `eteltipus_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Dumping data for table `tipuskapcsolat`
--

INSERT INTO `tipuskapcsolat` (`etterem_id`, `eteltipus_id`) VALUES
(1, 2),
(10, 1),
(3, 5),
(9, 13),
(2, 3),
(8, 19),
(7, 17),
(4, 9),
(6, 6),
(5, 16),
(10, 4),
(2, 14),
(6, 15),
(3, 18),
(2, 14),
(7, 11),
(8, 12),
(9, 12),
(4, 3),
(5, 6),
(1, 2),
(10, 1),
(3, 5),
(9, 13),
(2, 3),
(8, 19),
(7, 17),
(4, 9),
(6, 6),
(5, 16),
(10, 4),
(2, 14),
(6, 15),
(3, 18),
(2, 14),
(7, 11),
(8, 12),
(9, 12),
(4, 3),
(5, 6);

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
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`),
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
  ADD PRIMARY KEY (`id`),
  ADD KEY `raktar_id` (`raktar_id`);

--
-- Indexes for table `raktar`
--
ALTER TABLE `raktar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etterem_id` (`etterem_id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `raktar_alaposszetevok`
--
ALTER TABLE `raktar_alaposszetevok`
  ADD KEY `raktar_raktarid` (`raktar_raktarid`),
  ADD KEY `alaposszetevok_nev` (`alaposszetevok_nev`);

--
-- Indexes for table `raktar_osszetevok`
--
ALTER TABLE `raktar_osszetevok`
  ADD KEY `fk_osszetevok_nev` (`osszetevok_nev`),
  ADD KEY `raktar_raktarid` (`raktar_raktarid`);

--
-- Indexes for table `tartalmaz`
--
ALTER TABLE `tartalmaz`
  ADD KEY `termek_id` (`termek_id`),
  ADD KEY `allergenek_nev` (`allergenek_nev`);

--
-- Indexes for table `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etterem.cim` (`etterem_cim`);

--
-- Indexes for table `termek_osszetevok`
--
ALTER TABLE `termek_osszetevok`
  ADD PRIMARY KEY (`id`),
  ADD KEY `termek_id` (`termek_id`),
  ADD KEY `osszetevo_id` (`osszetevo_id`);

--
-- Indexes for table `tipuskapcsolat`
--
ALTER TABLE `tipuskapcsolat`
  ADD KEY `idx_etterem_id` (`etterem_id`),
  ADD KEY `idx_eteltipus_id` (`eteltipus_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `eteltipusok`
--
ALTER TABLE `eteltipusok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `etterem`
--
ALTER TABLE `etterem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `futar`
--
ALTER TABLE `futar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kosar`
--
ALTER TABLE `kosar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `osszetevok`
--
ALTER TABLE `osszetevok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `raktar`
--
ALTER TABLE `raktar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `termek`
--
ALTER TABLE `termek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `termek_osszetevok`
--
ALTER TABLE `termek_osszetevok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alaposszetevoje`
--
ALTER TABLE `alaposszetevoje`
  ADD CONSTRAINT `fk_alaposszetevoje_alaposszetevok` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kosar`
--
ALTER TABLE `kosar`
  ADD CONSTRAINT `fk_kosar_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kosar_felhasznalo` FOREIGN KEY (`felhasznalo_felhasznalonev`) REFERENCES `felhasznalo` (`felhasznalonev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kosar_futar` FOREIGN KEY (`futar_futarid`) REFERENCES `futar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `osszetevok`
--
ALTER TABLE `osszetevok`
  ADD CONSTRAINT `osszetevok_ibfk_1` FOREIGN KEY (`raktar_id`) REFERENCES `raktar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `raktar`
--
ALTER TABLE `raktar`
  ADD CONSTRAINT `raktar_ibfk_1` FOREIGN KEY (`etterem_id`) REFERENCES `etterem` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `raktar_alaposszetevok`
--
ALTER TABLE `raktar_alaposszetevok`
  ADD CONSTRAINT `raktar_alaposszetevok_ibfk_2` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tartalmaz`
--
ALTER TABLE `tartalmaz`
  ADD CONSTRAINT `tartalmaz_ibfk_1` FOREIGN KEY (`termek_id`) REFERENCES `termek` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tartalmaz_ibfk_2` FOREIGN KEY (`allergenek_nev`) REFERENCES `allergenek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `termek`
--
ALTER TABLE `termek`
  ADD CONSTRAINT `fk_termek_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `termek_osszetevok`
--
ALTER TABLE `termek_osszetevok`
  ADD CONSTRAINT `termek_osszetevok_ibfk_1` FOREIGN KEY (`osszetevo_id`) REFERENCES `osszetevok` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `termek_osszetevok_ibfk_2` FOREIGN KEY (`termek_id`) REFERENCES `termek` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tipuskapcsolat`
--
ALTER TABLE `tipuskapcsolat`
  ADD CONSTRAINT `fk_eteltipus_id` FOREIGN KEY (`eteltipus_id`) REFERENCES `eteltipusok` (`id`),
  ADD CONSTRAINT `fk_etterem_id` FOREIGN KEY (`etterem_id`) REFERENCES `etterem` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
