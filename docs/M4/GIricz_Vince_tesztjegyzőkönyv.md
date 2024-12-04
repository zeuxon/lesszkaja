# Étterem kezelése

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó 8.4.5 Étterem kezelése és kosár kezelése funkciókhoz készült. Felelőse: Giricz Vince

## 1. Teszteljárások (TP)

### 1.1. Étterem regisztrálása funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: étterem regisztrálás tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be egy admin felhasználóval
    0. lépés: Navigáljunk el az admin panel oldalra és válasszuk ki az étterem regisztrálása gombot
    1. lépés: A név szövegbeviteli mezőbe írjuk be az étterem nevét
    2. lépés: Az email szövegbeviteli mezőbe írjuk be az étterem email-ét
    3. lépés: A telefonszám szövegbeviteli mezőbe írjuk be az étterem telefonszámát
    4. lépés: A cím szövegbeviteli mezőbe írjuk be a az étterem pontos címet
    5. lépés: A jelszó szövegbeviteli mezőbe irjuk be egy jelszót
    6. lépés: Töltsünk fel az étteremnek egy fényképet
    6. lépés: Nyomjuk meg a regisztráció gombot 
    7. lépés: Ellenőrizzük az eredményt. 
    Elvárt eredmény: adatok megfelelően eltárolva az adatbázisban

## 2. Teszesetek (TC)

### 2.1. Étterem regisztrálása funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Helyes információkkal való regisztrálás 
- Bemenet: név = Étterem; email = etterem@gmail.com; telefonszám = 06301111111; cím = Budapest, a utca 1.; jelszó = 111111111; profilkép = egy jpg a könyvtáramból
- Művelet: regisztráció gombra kattintás
- Elvárt eredmény: a regisztráció sikeres, megjelenik az étterem listán, és a megadott adatokkal be is lehet jelentkezni

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Helyes információkkal való regisztrálás, profilképnek png fájlt adok
- Bemenet: név = Étterem; email = etterem@gmail.com; telefonszám = 06301111111; cím = Budapest, a utca 1.; jelszó = 111111111; profilkép = egy png a könyvtáramból
- Művelet: regisztráció gombra kattintás
- Elvárt eredmény: a regisztráció sikeres, megjelenik az étterem listán, és a megadott adatokkal be is lehet jelentkezni

#### 2.1.3. TC-01
- TP: TP-01
- Leírás: Túl rövid jelszóval való regisztráció
- Bemenet: név = Étterem; email = etterem@gmail.com; telefonszám = 06301111111; cím = Budapest, a utca 1.; jelszó = 1111; profilkép = egy jpg a könyvtáramból
- Művelet: regisztráció gombra kattintás
- Elvárt eredmény: a regisztráció nem sikeres a jelszó mező és írja a hibát

#### 2.1.4. TC-01
- TP: TP-01
- Leírás: Helytelen email címmel való regisztráció 
- Bemenet: név = Étterem; email = etteremgmail.com; telefonszám = 06301111111; cím = Budapest, a utca 1.; jelszó = 111111111; profilkép = egy jpg a könyvtáramból
- Művelet: regisztráció gombra kattintás
- Elvárt eredmény: a regisztráció nem sikeres az email mező és írja a hibát

## 3. Tesztriportok (TR)

### 3.1. Étterem regisztrálása funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: a név szövegbeviteli mezőbe beírtam: Étterem
    2. lépés: az email szövegbeviteli mezőbe beírtam: etterem@gmail.com
    3. lépés: a telefonszám szövegbeviteli mezőbe beírtam: 06301111111
    4. lépés: a cím szövegbeviteli mezőbe beírtam: Budapest, a utca 1.
    5. lépés: a jelszó szövegbeviteli mezőbe beírtam: 111111111
    6. lépés: a profilképhez feltöltöttem: background.jpg
    Eredmény: a regisztráció sikeres volt, az étterem meg is jelent az étterem oldalon és bejelentkezni is lehet a megadott adatokkal    


#### 3.1.1. TR-02 (TC-02)
- TP: TP-01
    1. lépés: a név szövegbeviteli mezőbe beírtam: Étterem
    2. lépés: az email szövegbeviteli mezőbe beírtam: etterem@gmail.com
    3. lépés: a telefonszám szövegbeviteli mezőbe beírtam: 06301111111
    4. lépés: a cím szövegbeviteli mezőbe beírtam: Budapest, a utca 1.
    5. lépés: a jelszó szövegbeviteli mezőbe beírtam: 111111111
    6. lépés: a profilképhez feltöltöttem: beach.png
    Eredmény: a regisztráció sikeres volt, az étterem meg is jelent az étterem oldalon és bejelentkezni is lehet a megadott adatokkal

#### 3.1.1. TR-03 (TC-03)
- TP: TP-01
    1. lépés: a név szövegbeviteli mezőbe beírtam: Étterem
    2. lépés: az email szövegbeviteli mezőbe beírtam: etterem@gmail.com
    3. lépés: a telefonszám szövegbeviteli mezőbe beírtam: 06301111111
    4. lépés: a cím szövegbeviteli mezőbe beírtam: Budapest, a utca 1.
    5. lépés: a jelszó szövegbeviteli mezőbe beírtam: 11111
    6. lépés: a profilképhez feltöltöttem: background.jpg
    Eredmény: a regisztráció nem lehetett elküldeni, és jelezte az oldal a hibát

#### 3.1.1. TR-04 (TC-04)
- TP: TP-01
    1. lépés: a név szövegbeviteli mezőbe beírtam: Étterem
    2. lépés: az email szövegbeviteli mezőbe beírtam: etteremgmail.com
    3. lépés: a telefonszám szövegbeviteli mezőbe beírtam: 06301111111
    4. lépés: a cím szövegbeviteli mezőbe beírtam: Budapest, a utca 1.
    5. lépés: a jelszó szövegbeviteli mezőbe beírtam: 111111111
    6. lépés: a profilképhez feltöltöttem: background.jpg
    Eredmény: a regisztráció nem lehetett elküldeni, és jelezte az oldal a hibát


# Kosár kezelése

## 1. Teszteljárások (TP)

### 1.1. Kosárba rakás funkció tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: étterem regisztrálás tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be egy bármilyen felhasználóval
    0. lépés: Navigáljunk el az étterem oldalra és azon belül válasszuk ki éttermet
    1. lépés: Az étterem választéka közül válaaszunk ki valamit és opcionálisa adjunk hozzá extrákat
    2. lépés: Rakjuk a terméket a kosárba
    3. lépés: Ellenőrizzük az eredményt a kosár oldalon. 
    Elvárt eredmény: a kiválasztott termék megjelenik a kosárban

## 2. Teszesetek (TC)

### 2.1. Kosárba rakás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-02
- Leírás: egy termék kosárba helyezése 
- Művelet: kiválasztottam a mcdonalds éttermet és az ételeik közül egyet a kosárba raktam
- Elvárt eredmény: az étel megjelenik a kosárban az elvárt módon

#### 2.1.1. TC-02
- TP: TP-02
- Leírás: több termék kosárba helyezése
- Művelet: kiválasztottam a mcdonalds éttermet és ételeik közül többet a kosárba helyeztem
- Elvárt eredmény: minden étel megjelenik a kosárban az elvárt módon

## 3. Tesztriportok (TR)

### 3.1. Kosárba rakás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: az éttermek közül kiválasztottam a mcdonalds-ot
    2. lépés: az ételei közül kiválasztottam a Big Mac-et
    3. lépés: kosárba helyeztem a kiválasztott ételt
    Eredmény: a kosár oldal megnyitása után látható volt a Big Mac a kosárban

#### 3.1.1. TR-02 (TC-02)
- TP: TP-02
    1. lépés: az éttermek közül kiválasztottam a mcdonalds-ot
    2. lépés: az ételei közül kiválasztottam a Big Mac-et kétszer és egyszer a Cheese Burgert 
    3. lépés: kosárba helyeztem a kiválasztott ételeket
    Eredmény: a kosár oldal megnyitása után látható volt mind a két Big Mac és a Cheese Burger a kosárban


# Kosár módosítása

## 1. Teszteljárások (TP)

### 1.1. Kosár módosítása funkció tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: étterem regisztrálás tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be egy bármilyen felhasználóval
    0. lépés: Navigáljunk el a kosár oldalra és legyen a kosárban előre termék
    1. lépés: A kosár oldalon módosítsuk a termékre kattintással, vagy szimplán töröljük
    2. lépés: Ellenőrizzük az eredményt a kosár oldalon. 
    Elvárt eredmény: a módosítás/ törlés megfelelően megjelenik a kosárban

## 2. Teszesetek (TC)

### 2.1. Kosár módosítása funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-02
- Leírás: törlés a kosárból
- Művelet: a kosárba előre behelyezett termék törlése
- Elvárt eredmény: az étel eltűnik a kosárból

#### 2.1.1. TC-02
- TP: TP-02
- Leírás: a kosárban lévő termék módosítása
- Művelet: a kosárba előre behelyezett Cheese Burger extráit módosítottam
- Elvárt eredmény: a módosított termék megfelelően megjelenik a kosárban

## 3. Tesztriportok (TR)

### 3.1. Kosár módosítása tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: a kosárban a Big Mac melletti törlés gombra kattintottam
    Eredmény: eltűnt a termék a kosár oldalól

#### 3.1.1. TR-02 (TC-02)
- TP: TP-02
    1. lépés: az előre behelyezett Cheese Burgerre kattintottam a módosításhoz
    2. lépés: az extrák közül kiválasztottam a wasabit
    Eredmény: a kosár oldalon megfelelően megjelent a Cheese Burger a kijelölt extrával