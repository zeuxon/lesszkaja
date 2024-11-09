-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2024. Nov 09. 17:43
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

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

CREATE TABLE `alaposszetevoje` (
  `termek_nev` varchar(255) NOT NULL,
  `alaposszetevok_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `alaposszetevoje`
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
-- Tábla szerkezet ehhez a táblához `alaposszetevok`
--

CREATE TABLE `alaposszetevok` (
  `nev` varchar(255) NOT NULL,
  `egyseg` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `alaposszetevok`
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
-- Tábla szerkezet ehhez a táblához `allergenek`
--

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

CREATE TABLE `eteltipusok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `eteltipusok`
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
-- Tábla szerkezet ehhez a táblához `etterem`
--

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
(15, 'Teszt Elek', 'tesztelek@teszt.hu', '$2a$10$I894QA6Gq.8UCpAhTNbBLuFDXv4BZtmZ2CpE43Mt6gsJDjox4DYiO', '12345678910', 'Teszt utca 2.', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `futar`
--

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
(2, 'Futaregy', 'futaregy@futar.com', '$2a$10$g927Giv3YUyupCQKxsWy5.T84B57PsSEe0gKP795QoSSlSyjExkOO', '00000000000'),
(3, 'Futarketto', 'futarketto@futar.com', '$2a$10$0gb1/.dLefqHPpp.kLcVYui/cBbcuEa2yApgSKOrrfof6tPanIXGG', '11111111111');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kosar`
--

CREATE TABLE `kosar` (
  `datum` date NOT NULL,
  `kiszallitva` tinyint(1) NOT NULL DEFAULT 0,
  `osszar` int(11) NOT NULL,
  `futar_futarid` int(11) DEFAULT NULL,
  `felhasznalo_felhasznalonev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kosar`
--

INSERT INTO `kosar` (`datum`, `kiszallitva`, `osszar`, `futar_futarid`, `felhasznalo_felhasznalonev`, `etterem_cim`) VALUES
('2024-11-09', 0, 200, NULL, 'Teszt Elek', 'Budapest, Király utca 42.'),
('2024-11-10', 0, 3000, 2, 'Teszt Elek', 'Budapest, Váci út 1-3.'),
('2024-11-09', 0, 200, NULL, 'Teszt Elek', 'Budapest, Király utca 42.'),
('2024-11-10', 0, 3000, 2, 'Teszt Elek', 'Budapest, Váci út 1-3.'),
('2024-11-09', 0, 76795, 2, 'Teszt Elek', 'Budapest, Rákóczi út 54.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osszetevoje`
--

CREATE TABLE `osszetevoje` (
  `osszetevok_nev` varchar(255) NOT NULL,
  `termek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `osszetevoje`
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
-- Tábla szerkezet ehhez a táblához `osszetevok`
--

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
(130.00, '8', 'Bacon', 'Cheese Burger'),
(100.00, '7', 'Cheddar sajt', 'Whopper'),
(150.00, '8', 'Csirkehús', 'Zinger Burger'),
(50.00, '6', 'Hagymakarikák', 'Cheese Burger'),
(110.00, '5', 'Kecskesajt', 'Latte'),
(90.00, '4', 'Kókusztej', 'Latte'),
(200.00, '9', 'Marhahús', 'Cheese Burger'),
(80.00, '5', 'Paradicsom', 'Pepperoni Pizza'),
(140.00, '8', 'Pasta', 'Pasta a la Rome'),
(120.00, '7', 'Pizza tészta', 'Pepperoni Pizza'),
(60.00, '4', 'Saláta', 'Sub Szendvics'),
(70.00, '6', 'Sushi rizs', 'Sushi'),
(30.00, '3', 'Szósz', 'Smash Burger'),
(100.00, '7', 'Tojás', 'Rákos Pad Thai'),
(40.00, '2', 'Wasabi', 'Sushi'),
(90.00, '10', 'Zsemle', 'Whopper');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `raktar`
--

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

CREATE TABLE `raktar_alaposszetevok` (
  `alaposszetevok_nev` varchar(255) NOT NULL,
  `raktar_raktarid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `raktar_alaposszetevok`
--

INSERT INTO `raktar_alaposszetevok` (`alaposszetevok_nev`, `raktar_raktarid`) VALUES
('alma', 4),
('Bacon', 4),
('Kecskesajt', 4);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `raktar_osszetevok`
--

CREATE TABLE `raktar_osszetevok` (
  `raktar_raktarid` int(11) NOT NULL,
  `osszetevok_nev` varchar(255) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `raktar_osszetevok`
--

INSERT INTO `raktar_osszetevok` (`raktar_raktarid`, `osszetevok_nev`) VALUES
(4, 'Saláta'),
(4, 'Bacon');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tartalmaz`
--

CREATE TABLE `tartalmaz` (
  `termek_nev` varchar(255) NOT NULL,
  `allergenek_nev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tartalmaz`
--

INSERT INTO `tartalmaz` (`termek_nev`, `allergenek_nev`) VALUES
('Cheese Burger', 'Glutén'),
('Latte', 'Tej'),
('Pasta a la Rome', 'Glutén'),
('Pepperoni Pizza', 'Glutén'),
('Rákos Pad Thai', 'Rák'),
('Smash Burger', 'Glutén'),
('Sub Szendvics', 'Glutén'),
('Sushi', 'Hal'),
('Whopper', 'Tojás'),
('Zinger Burger', 'Glutén');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termek`
--

CREATE TABLE `termek` (
  `alapar` int(11) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `etterem_cim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `termek`
--

INSERT INTO `termek` (`alapar`, `nev`, `etterem_cim`) VALUES
(1200, 'Cheese Burger', 'Budapest, József körút 87.'),
(2200, 'Latte', 'Budapest, Deák Ferenc tér 7.'),
(2500, 'Pasta a la Rome', 'Budapest, Rákóczi út 54.'),
(1300, 'Pepperoni Pizza', 'Győr, Fő tér 5'),
(1800, 'Rákos Pad Thai', 'Budapest, Andrássy út 20.'),
(5000, 'Smash Burger', 'Budapest, Kazinczy utca 11.'),
(900, 'Sub Szendvics', 'Debrecen, Dózsa György út 8.'),
(2300, 'Sushi', 'Budapest, Lövőház utca 2-6.'),
(1600, 'Whopper', 'Budapest, Király utca 42.'),
(1500, 'Zinger Burger', 'Budapest, Váci út 1-3.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tipuskapcsolat`
--

CREATE TABLE `tipuskapcsolat` (
  `etterem_id` int(11) NOT NULL,
  `eteltipus_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `tipuskapcsolat`
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
  ADD PRIMARY KEY (`id`);

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
-- A tábla indexei `tipuskapcsolat`
--
ALTER TABLE `tipuskapcsolat`
  ADD KEY `idx_etterem_id` (`etterem_id`),
  ADD KEY `idx_eteltipus_id` (`eteltipus_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `eteltipusok`
--
ALTER TABLE `eteltipusok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `etterem`
--
ALTER TABLE `etterem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `felhasznalo`
--
ALTER TABLE `felhasznalo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT a táblához `futar`
--
ALTER TABLE `futar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
-- Megkötések a táblához `tipuskapcsolat`
--
ALTER TABLE `tipuskapcsolat`
  ADD CONSTRAINT `fk_eteltipus_id` FOREIGN KEY (`eteltipus_id`) REFERENCES `eteltipusok` (`id`),
  ADD CONSTRAINT `fk_etterem_id` FOREIGN KEY (`etterem_id`) REFERENCES `etterem` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
