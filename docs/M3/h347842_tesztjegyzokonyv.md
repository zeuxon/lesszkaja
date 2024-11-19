# Tesztjegyzőkönyv-Felhasználók bejelentkezése

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó 8.3.1.2 Felhasználók lekérdezése funkcióhoz készült. Felelőse: Birkás Bertalan 

## 1. Teszteljárások (TP)

### 1.1. Bejelentkezés funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Bejelentkezés funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el az login.component modult
    1. lépés: Az email szövegbeviteli mezőbe írjuk be a szöveget
    2. lépés: A jelszó szövegbeviteli mezőbe irjuk be a jelszót
    3. lépés: Nyomjuk meg a bejelentkezés gombot 
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: megfelelő fiókba bejelentkezik

## 2. Teszesetek (TC)

### 2.1. Bejelentkezés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: bejelentkezés funkció tesztelése egy admin fiókba. Adatai: email: tesztelek@teszt.hu, jelszó: tesztelek
- Bemenet: email: tesztelek@teszt.hu, jelszó = tesztelek
- Művelet: nyomjuk meg a bejelentkezés gombot 
- Elvárt eredmény: sikeres a bejelentkezés, visszadob a főoldalra és automatikusan frissül a navigációs menü tartalma

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: bejelentkezés funkció tesztelése egy futár fiókba. Adatai: email: futaregy@futar.com, jelszó: futaregy
- Bemenet: email: futaregy@futar.com, jelszó: futaregy
- Művelet: nyomjuk meg a bejelentkezés gombot 
- Elvárt kimenet: sikeres a bejelentkezés, visszadob a főoldalra és automatikusan frissül a navigációs menü tartalma

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: bejelentkezés funkció tesztelése egy étterem fiókba. Adatai: email: info@mcdonalds.com, jelszó: mcdonalds123
- Bemenet: email: info@mcdonalds.com, jelszó: mcdonalds123
- Művelet: nyomjuk meg a bejelentkezés gombot 
- Elvárt kimenet: sikeres a bejelentkezés, visszadob a főoldalra és automatikusan frissül a navigációs menü tartalma

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: bejelentkezés funkció tesztelése egy nem létező fiókba
- Bemenet: email: nincs@ilyen.com, jelszó: jelszo123
- Művelet: nyomjuk meg a bejelentkezés gombot 
- Elvárt kimenet: a bejelentkezés gomb alatt megjelenik a "Helytelen adatok!" felirat

## 3. Tesztriportok (TR)

### 3.1. Bejelentkezés funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: tesztelek@teszt.hu-t beírtam az emailhez
    2. lépés: teszeleket-et beírtam a jelszóhoz
    3. lépés: a bejelentkezés gomb megnyomása után átvitt a főoldalra
    4. lépés: a navigációs menünél megjelent az admin panel menüpont
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: futaregy@futar.com-ot beírtam az emailhez
    2. lépés: futaregy-et beírtam a jelszóhoz
    3. lépés: a bejelentkezés gomb megnyomása után átvitt a főoldalra
    4. lépés: a navigációs menünél megjelent a rendelések menüpont

#### 3.1.2. TR-03 (TC-03)
- TP: TP-01
    1. lépés: info@mcdonalds.com-ot beírtam az emailhez
    2. lépés: mcdonalds123-at beírtam a jelszóhoz
    3. lépés: a bejelentkezés gomb megnyomása után átvitt a főoldalra
    4. lépés: a navigációs menünél megjelent a raktár és megrendelések menüpont

#### 3.1.2. TR-04 (TC-04)
- TP: TP-01
    1. lépés: nincs@ilyen.com-ot beírtam az emailhez
    2. lépés: jelszo123-at beírtam a jelszóhoz
    3. lépés: a bejelentkezés gomb megnyomása után a gomb alatt megjelent a helytelen adatok felirat
    