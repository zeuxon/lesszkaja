# Tesztjegyzőkönyv - Fizetési folyamat megvalósítása

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó Fizetési folyamat funkcióhoz készült.  
Felelős: Gál Gergő Károly

## 1. Teszteljárások (TP)

### 1.1. Fizetési folyamat funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-06, TC-07, TC-08, TC-09
- Leírás: A kosár menüpontban elérhető fizetési folyamat tesztelése.
    0. lépés: Nyissuk meg a kosár oldalt.
    1. lépés: Válasszuk ki a fizetési módot (készpénz vagy bankkártya).
    2. lépés: Bankkártyás fizetés esetén adjuk meg a kártyaszámot.
    3. lépés: Nyomjuk meg a "Fizetés" gombot.
    4. lépés: Ellenőrizzük, hogy a rendelés leadódik-e, és megjelenik-e a visszaigazolás.
    5. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: sikeres fizetés és rendelés leadása.

## 2. Tesztesetek (TC)

### 2.1. Fizetési folyamat tesztesetei

#### 2.1.1. TC-06
- TP: TP-02
- Leírás: Fizetés készpénzzel.
- Bemenet: Fizetési mód = "Készpénz"
- Művelet: Nyomjuk meg a "Fizetés" gombot.
- Elvárt eredmény: A rendelés leadódik, és megjelenik a visszaigazolás.

#### 2.1.2. TC-07
- TP: TP-02
- Leírás: Fizetés érvényes bankkártyaszámmal.
- Bemenet: Fizetési mód = "Bankkártya", Kártyaszám = "1234 5678 9012 3456"
- Művelet: Nyomjuk meg a "Fizetés" gombot.
- Elvárt eredmény: A rendelés leadódik, és megjelenik a visszaigazolás.

#### 2.1.3. TC-08
- TP: TP-02
- Leírás: Fizetés érvénytelen bankkártyaszámmal.
- Bemenet: Fizetési mód = "Bankkártya", Kártyaszám = "1111 2222 3333 444"
- Művelet: Nyomjuk meg a "Fizetés" gombot.
- Elvárt eredmény: A fizetés nem történik meg.

#### 2.1.4. TC-09
- TP: TP-02
- Leírás: Fizetés kártyaszám megadása nélkül.
- Bemenet: Fizetési mód = "Bankkártya", Kártyaszám = ""
- Művelet: Nyomjuk meg a "Fizetés" gombot.
- Elvárt eredmény: A fizetés nem történik meg.

## 3. Tesztriportok (TR)

### 3.1. Fizetési folyamat tesztriportok

#### 3.1.1. TR-06 (TC-06)
- TP: TP-02
    1. lépés: Kiválasztottam a "Készpénz" fizetési módot.
    2. lépés: Megnyomtam a "Fizetés" gombot.
    3. lépés: A rendelés leadódott, és megjelent a visszaigazolás.
    4. lépés: A funkció megfelelően működött.

#### 3.1.2. TR-07 (TC-07)
- TP: TP-02
    1. lépés: Kiválasztottam a "Bankkártya" fizetési módot.
    2. lépés: Beírtam a "1234 5678 9012 3456" kártyaszámot.
    3. lépés: Megnyomtam a "Fizetés" gombot.
    4. lépés: A rendelés leadódott, és megjelent a visszaigazolás.
    5. lépés: A funkció megfelelően működött.

#### 3.1.3. TR-08 (TC-08)
- TP: TP-02
    1. lépés: Kiválasztottam a "Bankkártya" fizetési módot.
    2. lépés: Beírtam a "1111 2222 3333 444" érvénytelen kártyaszámot.
    3. lépés: Megnyomtam a "Fizetés" gombot.
    4. lépés: A fizetés nem történt meg.
    5. lépés: A funkció megfelelően működött.

#### 3.1.4. TR-09 (TC-09)
- TP: TP-02
    1. lépés: Kiválasztottam a "Bankkártya" fizetési módot.
    2. lépés: Nem adtam meg kártyaszámot.
    3. lépés: Megnyomtam a "Fizetés" gombot.
    4. lépés: A fizetés nem történt meg.
    5. lépés: A funkció megfelelően működött.
