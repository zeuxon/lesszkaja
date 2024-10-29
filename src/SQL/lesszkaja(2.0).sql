-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Okt 29. 16:28
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
CREATE DATABASE IF NOT EXISTS `lesszkaja` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `lesszkaja`;

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
  `egyseg` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `allergenek`
--

DROP TABLE IF EXISTS `allergenek`;
CREATE TABLE `allergenek` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eteltipusok`
--

DROP TABLE IF EXISTS `eteltipusok`;
CREATE TABLE `eteltipusok` (
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `etterem`
--

DROP TABLE IF EXISTS `etterem`;
CREATE TABLE `etterem` (
  `telefonszam` varchar(15) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalo`
--

DROP TABLE IF EXISTS `felhasznalo`;
CREATE TABLE `felhasznalo` (
  `telefonszam` varchar(15) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `felhasznalonev` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL,
  `lakcim` varchar(255) NOT NULL,
  `admine` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `futar`
--

DROP TABLE IF EXISTS `futar`;
CREATE TABLE `futar` (
  `nev` varchar(255) NOT NULL,
  `emailcim` varchar(255) NOT NULL,
  `futarid` int(11) NOT NULL,
  `telefonszam` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `raktar`
--

DROP TABLE IF EXISTS `raktar`;
CREATE TABLE `raktar` (
  `osszetevok_nev` varchar(255) NOT NULL,
  `mennyiseg` int(11) NOT NULL,
  `raktarid` int(11) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL,
  `alaposszetevok_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
  ADD PRIMARY KEY (`cim`);

--
-- A tábla indexei `felhasznalo`
--
ALTER TABLE `felhasznalo`
  ADD PRIMARY KEY (`felhasznalonev`);

--
-- A tábla indexei `futar`
--
ALTER TABLE `futar`
  ADD PRIMARY KEY (`futarid`);

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
  ADD KEY `fk_raktar_etterem` (`etterem_cim`),
  ADD KEY `fk_raktar_osszetevok` (`osszetevok_nev`),
  ADD KEY `fk_raktar_alaposszetevok` (`alaposszetevok_nev`);

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
-- AUTO_INCREMENT a táblához `futar`
--
ALTER TABLE `futar`
  MODIFY `futarid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `raktar`
--
ALTER TABLE `raktar`
  MODIFY `raktarid` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `fk_kosar_futar` FOREIGN KEY (`futar_futarid`) REFERENCES `futar` (`futarid`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `fk_raktar_alaposszetevok` FOREIGN KEY (`alaposszetevok_nev`) REFERENCES `alaposszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_raktar_etterem` FOREIGN KEY (`etterem_cim`) REFERENCES `etterem` (`cim`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_raktar_osszetevok` FOREIGN KEY (`osszetevok_nev`) REFERENCES `osszetevok` (`nev`) ON DELETE CASCADE ON UPDATE CASCADE;

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
