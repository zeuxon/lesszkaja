# Tesztjegyzőkönyv - Éttermek keresése és szűrése

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó Admin által elérhető Felhasználók/Futár/Étterem módosítása, felfüggesztése, törlése funkcióhoz készült.  
Felelős: Kelemen Bálint Péter

## 1. Teszteljárások (TP)

### 1.1. Felhasználók módosítása funkció tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04, TC-05
- Leírás: Az admin oldalon elérhető felhazsnáló módosítása funckió tesztelés.
    0. lépés: Nyissuk meg az admin oldalt.
    1. lépés: Kattintsunk a felhasználók módosítása gombra.
    2. lépés: Válasszunk egy felhasználót.
    3. lépés: Írjunk valamelyik mezőbe új értéket.
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: módosul az adatbázisban az adat és frissül az oldal

## 2. Tesztesetek (TC)

### 2.1. Felhasználók módosítása tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Felhasználó módosítása email mezőt módosítva.
- Bemenet: Email="nemletezofiok@gmail.com"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Módosul a felhasználó emaile, frissül az oldal.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Felhasználó módosítása felhasználónév mezőt módosítva.
- Bemenet: Felhasználónév="Új Felhasználó"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Módosul a felhasználó felhasználóneve, frissül az oldal.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Felhasználó módosítása lakcím mezőt módosítva.
- Bemenet: Lakcím="Új Lakhely utca 20"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Módosul a felhasználó lakcíme, frissül az oldal.

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: Felhasználó módosítása telefonszám mezőt módosítva.
- Bemenet: Tel="06707777777"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Módosul a felhasználó telefonszáma, frissül az oldal.

#### 2.1.5. TC-05
- TP: TP-01
- Leírás: Felhasználó módosítása telefonszám mezőt módosítva.
- Bemenet: Tel="0670"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel hibás telefonszám esetén nem lehet megnyomni a gombot.

#### 2.1.6. TC-06
- TP: TP-01
- Leírás: Felhasználó módosítása felhasználónév mezőt módosítva.
- Bemenet: felhasználónév="123"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel hibás felhasználónév esetén nem lehet megnyomni a gombot.

#### 2.1.7. TC-07
- TP: TP-01
- Leírás: Felhasználó módosítása email mezőt módosítva.
- Bemenet: felhasználónév="tesztemnail@a"
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel hibás email esetén nem lehet megnyomni a gombot.

#### 2.1.8. TC-08
- TP: TP-01
- Leírás: Felhasználó módosítása lakcím mezőt módosítva.
- Bemenet: lakcím=""
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel üres lakcím esetén nem lehet megnyomni a gombot.

#### 2.1.9. TC-09
- TP: TP-01
- Leírás: Felhasználó módosítása felhasználónév mezőt módosítva.
- Bemenet: felhasználónév=""
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel üres felhasználónév esetén nem lehet megnyomni a gombot.

#### 2.1.10. TC-10
- TP: TP-01
- Leírás: Felhasználó módosítása telefonszám mezőt módosítva.
- Bemenet: telefonszám=""
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel üres telefonszám esetén nem lehet megnyomni a gombot.

#### 2.1.11. TC-11
- TP: TP-01
- Leírás: Felhasználó módosítása email mezőt módosítva.
- Bemenet: email=""
- Művelet: Nyomjuk meg a módosítás gombot.
- Elvárt eredmény: Nem történik semmi mivel hibás email esetén nem lehet megnyomni a gombot.

## 3. Tesztriportok (TR)

### 3.1. Éttermek keresése és szűrése tesztriportok

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: "nemletezofiok@gmail.com"-t beírtam az email mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Módosult az adatbázisban az emaile az adott felhasználónak.
    4. lépés: A funkció megfelelően működött.

#### 3.1.1. TR-02 (TC-11)
- TP: TP-01
    1. lépés: ""-t beírtam az email mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert üres volt az email mező.
    4. lépés: A funkció megfelelően működött.
    
#### 3.1.1. TR-03 (TC-07)
- TP: TP-01
    1. lépés: "tesztemail@a"-t beírtam az email mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert hibás volt az email mező.
    4. lépés: A funkció megfelelően működött.

#### 3.1.1. TR-04 (TC-02)
- TP: TP-01
    1. lépés: "Új Felhasználó"-t beírtam a felhasználónév mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Módosult az adatbázisban a felhasználóneve az adott felhasználónak.
    4. lépés: A funkció megfelelően működött.

#### 3.1.1. TR-05 (TC-06)
- TP: TP-01
    1. lépés: "123"-t beírtam az felhasználónév mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert hibás volt a felhasználónév mező.
    4. lépés: A funkció megfelelően működött.
    
#### 3.1.1. TR-06 (TC-09)
- TP: TP-01
    1. lépés: ""-t beírtam az felhasználónév mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert üres volt a felhasználónév mező.
    4. lépés: A funkció megfelelően működött.
    
#### 3.1.1. TR-07 (TC-04)
- TP: TP-01
    1. lépés: "06707777777"-t beírtam a tel mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Módosult az adatbázisban a telefonszám az adott felhasználónak.
    4. lépés: A funkció megfelelően működött.

#### 3.1.1. TR-08 (TC-10)
- TP: TP-01
    1. lépés: "0670"-t beírtam a tel mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert hibás volt a telefonszám mező.
    4. lépés: A funkció megfelelően működött.
    
#### 3.1.1. TR-09 (TC-05)
- TP: TP-01
    1. lépés: ""-t beírtam a tel mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert üres volt a telefonszám mező.
    4. lépés: A funkció megfelelően működött.
    
#### 3.1.1. TR-10 (TC-03)
- TP: TP-01
    1. lépés: "Új Lakhely utca 20"-t beírtam a lakcím mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Módosult az adatbázisban a lakcíme az adott felhasználónak.
    4. lépés: A funkció megfelelően működött.
 
#### 3.1.1. TR-11 (TC-08)
- TP: TP-01
    1. lépés: ""-t beírtam a lakcím mezőbe.
    2. lépés: Megnyomtam a módosítás gombot.
    3. lépés: Nem történt semmi mert üres volt a lakcím mező.
    4. lépés: A funkció megfelelően működött.

