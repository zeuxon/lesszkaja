# Tesztjegyzőkönyv - Éttermek keresése és szűrése

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó Éttermek keresése funkcióhoz készült.  
Felelős: Gál Gergő Károly

## 1. Teszteljárások (TP)

### 1.1. Éttermek keresése és szűrése funkció tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04, TC-05
- Leírás: Az éttermek oldalon elérhető keresési funkció tesztelése.
    0. lépés: Nyissuk meg az éttermek oldalt.
    1. lépés: A keresőmezőbe írjuk be az étterem nevét vagy tag-jét.
    2. lépés: Ellenőrizzük, hogy a találatok megfelelően megjelennek-e.
    3. lépés: Vizsgáljuk meg, hogy nincs irreleváns találat.
    4. lépés: Üres keresőmező esetén ellenőrizzük, hogy az összes étterem megjelenik-e.
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: megfelelő találatok megjelenítése a keresési feltételek szerint.

## 2. Tesztesetek (TC)

### 2.1. Éttermek keresése és szűrése tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Keresés egy létező étterem nevével.
- Bemenet: Keresőmező = "KFC"
- Művelet: Nyomjuk meg a keresés gombot.
- Elvárt eredmény: A "KFC" étterem jelenik meg a találatok között.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Keresés egy létező taggel.
- Bemenet: Keresőmező = "Pizza"
- Művelet: Nyomjuk meg a keresés gombot.
- Elvárt eredmény: Az összes Pizza-t tartalmazó étterem megjelenik a találatok között.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Keresés nem létező névvel.
- Bemenet: Keresőmező = "NemLétezik"
- Művelet: Nyomjuk meg a keresés gombot.
- Elvárt eredmény: nem jelenik meg semmi.

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: Üres keresőmező esetén megjelenő lista ellenőrzése.
- Bemenet: Keresőmező = ""
- Művelet: Nyomjuk meg a keresés gombot.
- Elvárt eredmény: Az összes elérhető étterem megjelenik.

#### 2.1.5. TC-05
- TP: TP-01
- Leírás: Keresés speciális karakterekkel.
- Bemenet: Keresőmező = "@#$%"
- Művelet: Nyomjuk meg a keresés gombot.
- Elvárt eredmény: nem jelenik meg semmi.

## 3. Tesztriportok (TR)

### 3.1. Éttermek keresése és szűrése tesztriportok

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: "KFC"-t beírtam a keresőmezőbe.
    2. lépés: Megnyomtam a keresés gombot.
    3. lépés: A találatok között szerepelt a "KFC" étterem.
    4. lépés: A funkció megfelelően működött.

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: "pizza"-t beírtam a keresőmezőbe.
    2. lépés: Megnyomtam a keresés gombot.
    3. lépés: Az összes pizza-t áruló étterem megjelent.
    4. lépés: A funkció megfelelően működött.

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: "NemLétezik"-et beírtam a keresőmezőbe.
    2. lépés: Megnyomtam a keresés gombot.
    3. lépés: nem jelent meg semmi.
    4. lépés: A funkció megfelelően működött.

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
    1. lépés: Üresen hagytam a keresőmezőt.
    2. lépés: Megnyomtam a keresés gombot.
    3. lépés: Az összes étterem megjelent a találatok között.
    4. lépés: A funkció megfelelően működött.

#### 3.1.5. TR-05 (TC-05)
- TP: TP-01
    1. lépés: "@#$%"-t beírtam a keresőmezőbe.
    2. lépés: Megnyomtam a keresés gombot.
    3. lépés: nem jelent meg semmi.
    4. lépés: A funkció megfelelően működött.
