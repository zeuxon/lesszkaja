# Tesztjegyzőkönyv-`Fuvarok`

Az alábbi tesztdokumentum a `LesszKaja` projekthez tartozó `Fuvarok CRUD` funkcióihoz készült. Felelőse: `Gál Gergő Károly, Dudás Tímea` 

## 1. Teszteljárások (TP)

### 1.1. Fuvar hozzáadása (Create) tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: új fuvar létrehozásának tesztelése. 
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el a rendelés funkciót
    1. lépés: Tegyük össze a rendelés majd adjuk le.
    2. lépés: Ezzel automatikusan létrejön a fuvar a futár felhasználónak

### 1.2. Fuvar lekérdezése (Read) tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: fuvar adatainak lekérdezése 
    0. lépés: Nyissuk meg az alkalmazást
    1. lépés: Jelentkezzünk be futár felhasználóként
    2. lépés: Nyissuk meg a rendelések fület 
    3. lépés: Itt megjelennek a fuvarok

### 1.3. Fuvar módosítása (Update) tesztelése
- Azonosító: TP-03
- Tesztesetek: TC-04, TC-05
- Leírás: fuvar adatainak lekérdezése 
    0. lépés: Nyissuk meg az alkalmazást
    1. lépés: Jelentkezzünk be futár felhasználóként
    2. lépés: Nyissuk meg a rendelések fület 
    3. lépés: Itt megjelennek a fuvarok
    4. lépés: Kattiunktusnk rá a rendelés elfogadása gombra, ezzel átkerül az elfogadottak közé
    
### 1.4. Fuvar törlése (Delete) tesztelése
- Azonosító: TP-04
- Tesztesetek: TC-06
- Leírás: fuvar adatainak törlése 
    0. lépés: Nyissuk meg az alkalmazást
    1. lépés: Jelentkezzünk be admin felhasználóként
    2. lépés: Kattintsunk az admin felületre és ott töröljük a rendelés

## 2. Teszesetek (TC)

### 2.1. Fuvar hozzáadása tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: fuvar hozzáadása helyes adatokkal
- Bemenet: Bemenet: FUVAR_ID = 3 ; DATUM = 2024-11-10 ; KISZALLITVA = 0; FUTAR_ID : 2; FELHASZNALO : Teszt Elek; CIM : Budaspest, Király utca 42
- Művelet: nyomjuk meg a MENTÉS gombot
- Elvárt kimenet: a fuvar sikeresen létrejött

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: fuvar hozzáadása hiányos adatokkal 
- Bemenet: FUVAR_ID = ; DATUM = ; KISZALLITVA = 0; FUTAR_ID : 2; FELHASZNALO : ; CIM : Budaspest, Király utca 42 
- Művelet: nyomjuk meg a MENTÉS gombot
- Elvárt kimenet: Hiba, nem jött létre a fuvar

### 2.2. Fuvar lekérdezése tesztesetei

#### 2.2.1. TC-03
- TP: TP-02
- Leírás: meglévő fuvar adatainak lekérdezése
- Bemenet: FUTAR_ID:2
- Művelet: automatikusan listázódnak a fuvarok
- Elvárt kimenet: megjelennek a fuvarok

### 2.3. Fuvar módosítása tesztesetei

#### 2.3.1. TC-04
- TP: TP-03
- Leírás: nem elfogadott fuvarok elfogadása
- Bemenet: FUVAR_ID: 3
- Művelet: gomb hatására elfogadottá válik
- Elvárt kimenet: átkerül az elfogadott fuvarokhoz

### 2.4. Fuvar módosítása tesztesetei

#### 2.4.1. TC-06
- TP: TP-04
- Leírás: fuvar törlése
- Bemenet: FUVAR_ID: 3
- Művelet: nyomjuk meg a törlés gombot
- Elvárt kimenet: a fuvar sikeresen törlődött

## 3. Tesztriportok (TR)

### 3.1. Fuvar hozzáadása tesztriportok

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Az összes adatot kitöltöttem
    2. lépés: a gomb egyszeri megnyomás után inaktív lett
    3. lépés: helyes eredményt kaptam (fuvar létrejött)
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: Az azonosító mezőt üresen hagytam
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (HIBA)

### 3.2. Fuvar lekérdezése tesztriportok

#### 3.2.1. TR-03 (TC-03)
- TP: TP-02
    1. lépés: Fuvar adatait lekértem
    2. lépés: helyes eredményt kaptam (adatok megjelentek)

### 3.3. Fuvar módosítása tesztriportok

#### 3.3.1. TR-04 (TC-04)
- TP: TP-03
    1. lépés: Fuvar állapotát frissítettem
    2. lépés: helyes eredményt kaptam (frissült az adat)

### 3.4. Fuvar törlése tesztriportok

#### 3.4.1. TR-05 (TC-05)
- TP: TP-05
    1. lépés: Töröltem a fuvart
    2. lépés: helyes eredményt kaptam (törlődött az adat)    
    
