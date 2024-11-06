-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Nov 06. 11:19
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `lesszkaja`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `alaposszetevoje`
--

DROP TABLE IF EXISTS `alaposszetevoje`;
CREATE TABLE `alaposszetevoje` (
  `termek_nev` varchar(255) NOT NULL,
  `alaposszetevok_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `alaposszetevok`
--

DROP TABLE IF EXISTS `alaposszetevok`;
CREATE TABLE `alaposszetevok` (
  `nev` varchar(255) NOT NULL,
  `egyseg` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `alaposszetevok`
--

INSERT INTO `alaposszetevok` (`nev`, `egyseg`) VALUES
('alma', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `allergenek`
--

DROP TABLE IF EXISTS `allergenek`;
CREATE TABLE `allergenek` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `allergenek`
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
-- Tábla szerkezet ehhez a táblához `eteltipusok`
--

DROP TABLE IF EXISTS `eteltipusok`;
CREATE TABLE `eteltipusok` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eteltipusok`
--

INSERT INTO `eteltipusok` (`nev`) VALUES
('Coleslaw saláta'),
('Csirke nugget'),
('Csirke szárny'),
('Gourmet hamburger'),
('Hamburger'),
('Kávé'),
('Kézműves étel'),
('Kínai tészta'),
('Pizza'),
('Rántott csirke'),
('Saláta'),
('Sashimi'),
('Sushi'),
('Sült krumpli'),
('Sütemény'),
('Szendvics'),
('Tészta'),
('Whopper'),
('Wok étel');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etterem`
--

DROP TABLE IF EXISTS `etterem`;
CREATE TABLE `etterem` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL,
  `cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `etterem`
--

INSERT INTO `etterem` (`id`, `nev`, `emailcim`, `jelszo`, `telefonszam`, `cim`) VALUES
(1, 'McDonalds', 'info@mcdonalds.com', '$2a$10$s5oYYS.3GG5izcGXixgy7.fRlri9iWVtqDC2pBcC2iuVpwZbH1TIW', '36301234567', 'Budapest, József körút 87.'),
(2, 'KFC', 'contact@kfc.com', '$2a$10$BvUqDcszj1.QQO4mdknCs.kpkUjSjRJLMlU4esC7XL.Nj.IsAjD5q', '36307654321', 'Budapest, Váci út 1-3.'),
(3, 'Burger King', 'support@burgerking.com', '$2a$10$6gEDh4JQTZja/lMecQznm.9ihoG8hI2Q0n/69EIgUHaSkIVUv1Kb.', '36202345678', 'Budapest, Király utca 42.'),
(4, 'Pizza Hut', 'info@pizzahut.com', '$2a$10$GePueDom0ROthkyalvk1GeDOCwSOrHLXWtjy5Lapryl3mIlziCGYO', '36308765432', 'Győr, Fő tér 5'),
(5, 'Subway', 'contact@subway.com', '$2a$10$Rs34oMUjVc/BFZF7SaUWy.OLmgl0XiOt5SZRtIXGEYe2zCbRGh3GG', '36703456789', 'Debrecen, Dózsa György út 8.'),
(6, 'Starbucks', 'support@starbucks.com', '$2a$10$TE4QAtxej1xlhG.tmnbvP.jAXE.XZyUs8Z6hVjGixfhGutC2wJthy', '36301239876', 'Budapest, Deák Ferenc tér 7.'),
(7, 'Pasta Bella', 'info@pastabella.com', '$2a$10$G0TorqKQX3U32EH6aetsVeXXZCADqdhgpx93SZYdQCubYjzhGsUiO', '36204567890', 'Budapest, Rákóczi út 54.'),
(8, 'Padthai Wokbar', 'contact@padthai.com', '$2a$10$MwrDYuSkoPHnTSfox1cDquSWAYNb7whU0vhiBfni14f/szIRJ150.', '36705678901', 'Budapest, Andrássy út 20.'),
(9, 'Wasabi', 'info@wasabi.com', '$2a$10$2crRn4oVqNLsqAYVzw/D..06Dp/JjeHd3wc/JEcQaRmpZ1HBAx/6S', '36306789012', 'Budapest, Lövőház utca 2-6.'),
(10, 'Bamba Marha Burger Bár', 'support@bambamarha.com', '$2a$10$knlvukZktKxEY1y6X160guApIAsTF5QIsjp2rABFL0MiblG0gk66S', '36207890123', 'Budapest, Kazinczy utca 11.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

DROP TABLE IF EXISTS `felhasznalo`;
CREATE TABLE `felhasznalo` (
  `id` int(11) NOT NULL,
  `felhasznalonev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL,
  `lakcim` varchar(255) NOT NULL,
  `admine` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalo`
--

INSERT INTO `felhasznalo` (`id`, `felhasznalonev`, `emailcim`, `jelszo`, `telefonszam`, `lakcim`, `admine`) VALUES
(1, 'asdasdasdasd', 'asdasdas@adsada.com', '$2a$10$SUyN5ugTgp..V9tRSv1UNeNA2rc.CDa/fQPP7JSU0kxAixglw6WuO', '10202102103', 'asdasdasdasda', 0),
(12, 'abc', 'abc@abc.com', '$2a$10$N8Mt3F4PSiD3EZvl.2mEPuvI1yEjPEdkXhhHZkn0yLJNE7.5R.XWm', '06301234567', 'abc', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `futar`
--

DROP TABLE IF EXISTS `futar`;
CREATE TABLE `futar` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `telefonszam` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `futar`
--

INSERT INTO `futar` (`id`, `nev`, `emailcim`, `jelszo`, `telefonszam`) VALUES
(1, 'aaa', 'aaa@aaa.com', '$2a$10$N8Mt3F4PSiD3EZvl.2mEPuvI1yEjPEdkXhhHZkn0yLJNE7.5R.XWm', '06301234567');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kosar`
--

DROP TABLE IF EXISTS `kosar`;
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
-- Tábla szerkezet ehhez a táblához `osszetevoje`
--

DROP TABLE IF EXISTS `osszetevoje`;
CREATE TABLE `osszetevoje` (
  `osszetevok_nev` varchar(255) NOT NULL,
  `termek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osszetevok`
--

DROP TABLE IF EXISTS `osszetevok`;
CREATE TABLE `osszetevok` (
  `ar` decimal(10,2) NOT NULL,
  `egyseg` varchar(25) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `termek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `osszetevok`
--

INSERT INTO `osszetevok` (`ar`, `egyseg`, `nev`, `termek_nev`) VALUES
(100.00, '2', 'aroma', 'pálinka');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `raktar`
--

DROP TABLE IF EXISTS `raktar`;
CREATE TABLE `raktar` (
  `mennyiseg` int(11) NOT NULL,
  `raktarid` int(11) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `raktar`
--

INSERT INTO `raktar` (`mennyiseg`, `raktarid`, `etterem_cim`) VALUES
(8, 4, 'Budapest, József körút 87.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `raktar_alaposszetevok`
--

DROP TABLE IF EXISTS `raktar_alaposszetevok`;
CREATE TABLE `raktar_alaposszetevok` (
  `alaposszetevok_nev` varchar(255) NOT NULL,
  `raktar_raktarid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `raktar_alaposszetevok`
--

INSERT INTO `raktar_alaposszetevok` (`alaposszetevok_nev`, `raktar_raktarid`) VALUES
('alma', 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `raktar_osszetevok`
--

DROP TABLE IF EXISTS `raktar_osszetevok`;
CREATE TABLE `raktar_osszetevok` (
  `raktar_raktarid` int(11) NOT NULL,
  `osszetevok_nev` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tartalmaz`
--

DROP TABLE IF EXISTS `tartalmaz`;
CREATE TABLE `tartalmaz` (
  `termek_nev` varchar(255) NOT NULL,
  `allergenek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termek`
--

DROP TABLE IF EXISTS `termek`;
CREATE TABLE `termek` (
  `alapar` decimal(10,2) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `termek`
--

INSERT INTO `termek` (`alapar`, `nev`, `etterem_cim`) VALUES
(1200.00, 'pálinka', 'Budapest, József körút 87.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipusa`
--

DROP TABLE IF EXISTS `tipusa`;
CREATE TABLE `tipusa` (
  `eteltipusok_nev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `alaposszetevoje`
--
ALTER TABLE `alaposszetevoje`
  ADD KEY `termek.nev` (`termek_nev`,`alaposszetevok_nev`),
  ADD KEY `fk_alaposszetevoje_alaposszetevok` (`alaposszetevok_nev`);

--
-- A tábla indexei `alaposszetevok`
--
ALTER TABLE `alaposszetevok`
  ADD PRIMARY KEY (`nev`);

--
-- A tábla indexei `allergenek`
--
ALTER TABLE `allergenek`
  ADD PRIMARY KEY (`nev`);

--
-- A tábla indexei `eteltipusok`
--
ALTER TABLE `eteltipusok`
  ADD PRIMARY KEY (`nev`);

--
-- A tábla indexei `etterem`
--
ALTER TABLE `etterem`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cim` (`cim`),
  ADD UNIQUE KEY `emailcim` (`emailcim`);

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `felhasznalonev` (`felhasznalonev`),
  ADD UNIQUE KEY `emailcim` (`emailcim`),
  ADD UNIQUE KEY `telefonszam` (`telefonszam`);

--
-- A tábla indexei `futar`
--
ALTER TABLE `futar`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefonszam` (`telefonszam`),
  ADD UNIQUE KEY `emailcim` (`emailcim`);

--
-- A tábla indexei `kosar`
--
ALTER TABLE `kosar`
  ADD KEY `fk_kosar_etterem` (`etterem_cim`),
  ADD KEY `fk_kosar_futar` (`futar_futarid`),
  ADD KEY `fk_kosar_felhasznalo` (`felhasznalo_felhasznalonev`);

--
-- A tábla indexei `osszetevoje`
--
ALTER TABLE `osszetevoje`
  ADD KEY `osszetevok.nev` (`osszetevok_nev`,`termek_nev`),
  ADD KEY `fk_osszetevoje_termek` (`termek_nev`);

--
-- A tábla indexei `osszetevok`
--
ALTER TABLE `osszetevok`
  ADD PRIMARY KEY (`nev`),
  ADD KEY `termek.nev` (`termek_nev`);

--
-- A tábla indexei `raktar`
--
ALTER TABLE `raktar`
  ADD PRIMARY KEY (`raktarid`),
  ADD KEY `fk_raktar_etterem` (`etterem_cim`);

--
-- A tábla indexei `raktar_alaposszetevok`
--
ALTER TABLE `raktar_alaposszetevok`
  ADD KEY `raktar_raktarid` (`raktar_raktarid`),
  ADD KEY `alaposszetevok_nev` (`alaposszetevok_nev`);

--
-- A tábla indexei `raktar_osszetevok`
--
ALTER TABLE `raktar_osszetevok`
  ADD KEY `fk_osszetevok_nev` (`osszetevok_nev`),
  ADD KEY `raktar_raktarid` (`raktar_raktarid`);

--
-- A tábla indexei `tartalmaz`
--
ALTER TABLE `tartalmaz`
  ADD KEY `termek.nev` (`termek_nev`,`allergenek_nev`),
  ADD KEY `fk_tartalmaz_allergenek` (`allergenek_nev`);

--
-- A tábla indexei `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`nev`),
  ADD KEY `etterem.cim` (`etterem_cim`);

--
-- A tábla indexei `tipusa`
--
ALTER TABLE `tipusa`
  ADD KEY `eteltipusok.nev` (`eteltipusok_nev`,`etterem_cim`),
  ADD KEY `fk_tipusa_etterem` (`etterem_cim`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `etterem`
--
ALTER TABLE `etterem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT a táblához `futar`
--
ALTER TABLE `futar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `raktar`
--
ALTER TABLE `raktar`
  MODIFY `raktarid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `alaposszetevoje`
--
ALTER TABLE `alaposszetevoje`
  ADD CONSTRAINT `fk_alaposszetevoje_alaposszetevok` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_alaposszetevoje_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `kosar`
--
ALTER TABLE `kosar`
  ADD CONSTRAINT `fk_kosar_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kosar_felhasznalo` FOREIGN KEY (`felhasznalo_felhasznalonev`) REFERENCES `felhasznalo` (`felhasznalonev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kosar_futar` FOREIGN KEY (`futar_futarid`) REFERENCES `futar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `osszetevoje`
--
ALTER TABLE `osszetevoje`
  ADD CONSTRAINT `fk_osszetevoje_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipusa_osszetevok` FOREIGN KEY (`osszetevok_nev`) REFERENCES `osszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `osszetevok`
--
ALTER TABLE `osszetevok`
  ADD CONSTRAINT `fk_osszetevok_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `raktar`
--
ALTER TABLE `raktar`
  ADD CONSTRAINT `fk_raktar_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `raktar_alaposszetevok`
--
ALTER TABLE `raktar_alaposszetevok`
  ADD CONSTRAINT `raktar_alaposszetevok_ibfk_1` FOREIGN KEY (`raktar_raktarid`) REFERENCES `raktar` (`raktarid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `raktar_alaposszetevok_ibfk_2` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `raktar_osszetevok`
--
ALTER TABLE `raktar_osszetevok`
  ADD CONSTRAINT `fk_osszetevok_nev` FOREIGN KEY (`osszetevok_nev`) REFERENCES `osszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_osszetevok_raktarid` FOREIGN KEY (`raktar_raktarid`) REFERENCES `raktar` (`raktarid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_raktar_raktarid` FOREIGN KEY (`raktar_raktarid`) REFERENCES `raktar` (`raktarid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `tartalmaz`
--
ALTER TABLE `tartalmaz`
  ADD CONSTRAINT `fk_tartalmaz_allergenek` FOREIGN KEY (`allergenek_nev`) REFERENCES `allergenek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tartalmaz_termek` FOREIGN KEY (`termek_nev`) REFERENCES `termek` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `termek`
--
ALTER TABLE `termek`
  ADD CONSTRAINT `fk_termek_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `tipusa`
--
ALTER TABLE `tipusa`
  ADD CONSTRAINT `fk_tipusa_eteltipusok` FOREIGN KEY (`eteltipusok_nev`) REFERENCES `eteltipusok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tipusa_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
