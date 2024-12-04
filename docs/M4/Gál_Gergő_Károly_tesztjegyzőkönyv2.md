# Tesztjegyzőkönyv - Ételek részletezése és testreszabása

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó Ételek részletezése és testreszabása funkcióhoz készült.  
Felelős: Gál Gergő Károly

## 1. Teszteljárások (TP)

### 1.1. Ételek részletezése és testreszabása funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-06, TC-07, TC-08, TC-09, TC-10
- Leírás: Az ételek részletezése és testreszabási funkciók tesztelése.
    0. lépés: Nyissuk meg egy étterem oldalát.
    1. lépés: Válasszunk ki egy ételt az étlapról.
    2. lépés: Adjunk hozzá extra összetevőt.
    3. lépés: Ellenőrizzük, hogy a testreszabás helyesen megjelenik.
    4. lépés: A kosárból módosítsuk a hozzáadott elemeket.
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: a módosítások pontosan megjelennek mind az étel részleteinél, mind a kosárban.

## 2. Tesztesetek (TC)

### 2.1. Ételek részletezése és testreszabása tesztesetei

#### 2.1.1. TC-06
- TP: TP-02
- Leírás: Egy étel részleteinek megjelenítése.
- Bemenet: Étterem = "McDonalds", Ételtípus = "Chesee Burger"
- Művelet: Válasszuk ki a "Chesee Burger" ételt.
- Elvárt eredmény: Az étel részletező oldala megjelenik.

#### 2.1.2. TC-07
- TP: TP-02
- Leírás: Extra összetevő hozzáadása egy ételhez.
- Bemenet: Extra = "Paradicsom"
- Művelet: Adjuk hozzá a "Paradicsom" összetevőt.
- Elvárt eredmény: A testreszabott opció megjelenik.


#### 2.1.4. TC-09
- TP: TP-02
- Leírás: Nem elérhető összetevő kiválasztása.
- Bemenet: Extra = "Nem elérhető összetevő"
- Művelet: Próbáljuk hozzáadni az összetevőt.
- Elvárt eredmény: Hibaüzenet jelenik meg: "Az összetevő nem elérhető."

#### 2.1.5. TC-10
- TP: TP-02
- Leírás: Üres testreszabási opciók kiválasztása.
- Bemenet: Nincs megadva extra összetevő.
- Művelet: Folytassuk az étel hozzáadását testreszabás nélkül.
- Elvárt eredmény: Az étel alapváltozata kerül a kosárba.

## 3. Tesztriportok (TR)

### 3.1. Ételek részletezése és testreszabása tesztriportok

#### 3.1.1. TR-06 (TC-06)
- TP: TP-02
    1. lépés: Megnyitottam a "McDonalds" éttermet.
    2. lépés: Kiválasztottam a "Chesee Burger" ételt.
    3. lépés: Az étel részletező oldala helyesen megjelent.
    4. lépés: A funkció megfelelően működött.

#### 3.1.2. TR-10 (TC-10)
- TP: TP-02
    1. lépés: Kiválasztottam a "Chesee Burger" ételt.
    2. lépés: Nem adtam hozzá extra összetevőt.
    3. lépés: Az étel alapváltozata került a kosárba.
    4. lépés: A funkció megfelelően működött.
