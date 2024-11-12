# Tesztjegyzőkönyv-Felhasználók regisztrálása

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó 8.3.1.1 Felhasználók létrehozása funkcióhoz készült. Felelőse: Kelemen Bálint Péter 

## 1. Teszteljárások (TP)

### 1.1. Összeadás funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: összeadás funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el az admin.component modult
    1. lépés: A felhasználónév szövegbeviteli mezőbe írjuk be a szöveget
    2. lépés: Az email szövegbeviteli mezőbe írjuk be az emailt
    3. lépés: A telefonszám szövegbeviteli mezőbe írjuk be a telefonszámot
    4. lépés: A lakcím szövegbeviteli mezőbe írjuk be a lakcímet
    5. lépés: A jelszó szövegbeviteli mezőbe irjuk be a jelszót
    6. lépés: Nyomjuk meg a regisztráció gombot 
    7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: adatok eltárolása az adatbázisban

## 2. Teszesetek (TC)

### 2.1. Összeadás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: felhasználónév = Tesztelek ; email = tesztelek@gmail.com ; telefonszám = 06701111111 ; lakcím = Teszt utca 20. ; jelszó = hihetetlentitkos
- Művelet: nyomjuk meg a regisztráció gombot 
- Elvárt eredmény: a regisztráció mező alatti rész tartalma: Sikeres regiszráció!

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: felhasználónév = A; ; email = tesztelek@gmail.com ; telefonszám = 06701111111 ; lakcím = Teszt utca 20. ; jelszó = hihetetlentitkos
- Művelet: nyomjuk meg a regisztráció gombot 
- Elvárt kimenet: a felhasználónév input mező alatti rész tartalma: Ez a mező kötelező!

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: felhasználónév = Tesztelek; ; email = tesztelek@gmail ; telefonszám = 06701111111 ; lakcím = Teszt utca 20. ; jelszó = hihetetlentitkos
- Művelet: nyomjuk meg a regisztráció gombot 
- Elvárt kimenet: az email input mező alatti rész tartalma: Ez a mező kötelező!

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: felhasználónév = Tesztelek; ; email = tesztelek@gmail.com ; telefonszám = 0670 ; lakcím = Teszt utca 20. ; jelszó = hihetetlentitkos
- Művelet: nyomjuk meg a regisztráció gombot 
- Elvárt kimenet: a telefonszám input mező alatti rész tartalma: Ez a mező kötelező!

## 3. Tesztriportok (TR)

### 3.1. Összeadás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Tesztelek-t beírtam
    2. lépés: tesztelek@gmail.com-t beírtam 
    3. lépés: 06701111111-t beírtam
    4. lépés: Teszt utca 20.-t beírtam 
    5. lépés: hihetetlentitkos-t beírtam
    6. lépés: a regisztráció gomb egyszeri megnyomás után inaktív lett
    7. lépés: helyes eredményt kaptam a regisztráció gomb alatt: Sikeres regisztráció
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: A-t beírtam
    2. lépés: tesztelek@gmail.com-t beírtam 
    3. lépés: 06701111111-t beírtam
    4. lépés: Teszt utca 20.-t beírtam 
    5. lépés: hihetetlentitkos-t beírtam
    6. lépés: a regisztráció gomb egyszeri megnyomás után inaktív lett
    7. lépés: helyes eredményt kaptam a felhasználónév mező alatt: Ez a mező kötelező!

#### 3.1.2. TR-03 (TC-03)
- TP: TP-01
    1. lépés: Tesztelek-t beírtam
    2. lépés: tesztelek@gmail-t beírtam 
    3. lépés: 06701111111-t beírtam
    4. lépés: Teszt utca 20.-t beírtam 
    5. lépés: hihetetlentitkos-t beírtam
    6. lépés: a regisztráció gomb egyszeri megnyomás után inaktív lett
    7. lépés: helyes eredményt kaptam az email mező alatt: Ez a mező kötelező!

#### 3.1.2. TR-04 (TC-04)
- TP: TP-01
    1. lépés: Tesztelek-t beírtam
    2. lépés: tesztelek@gmail.com-t beírtam 
    3. lépés: 0670-t beírtam
    4. lépés: Teszt utca 20.-t beírtam 
    5. lépés: hihetetlentitkos-t beírtam
    6. lépés: a regisztráció gomb egyszeri megnyomás után inaktív lett
    7. lépés: helyes eredményt kaptam a telefonszám mező alatt: Ez a mező kötelező!
    