# Tesztjegyzőkönyv-Kosár regisztrálása

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó 8.3.17.1 Kosár módosítása funkcióhoz készült. Felelőse: Sánta Gábor

## 1. Teszteljárások (TP)

### 1.1. Módosítás funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: módosítás funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk
    1. lépés: Rakjunk a kosárba termékeket
    2. lépés: Nyissuk meg a kosarunkat
    3. lépés: Kattintsunk rá egy termékre
    4. lépés: Módosítsuk a feltéteket
    5. lépés: Nyomjunk a 'Kosárba' gombra
    6. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Visszadob a kosár felületre, vagy hibát jelez

## 2. Teszesetek (TC)

### 2.1. Módosítás funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: módosítás funkció tesztelése 
- Bemenet: Módosított termék=Cheese Burger, Paradicsom=false, Wasabi=true, a kosárban ez már szerepel
- Művelet: Nyomjuk meg a kosárba gombot 
- Elvárt eredmény: A módosítás oldalon maradunk, a 'Kosárba' gomb alatt megjelenik a 'Ilyen már van a kosárban!' szöveg

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: módosítás funkció tesztelése 
- Bemenet: Módosított termék=Cheese Burger, Paradicsom=false, Wasabi=false, a kosárban más termék nem szerepel
- Művelet: Nyomjuk meg a kosárba gombot 
- Elvárt eredmény: Átirányít a kosár oldalra, a termék feltéteinek módosítása megtörtént

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: módosítás funkció tesztelése 
- Bemenet: Módosított termék=Cheese Burger, Paradicsom=false, Wasabi=true, a kosárban más feltétekkel szerepel ez a termék
- Művelet: Nyomjuk meg a kosárba gombot 
- Elvárt eredmény: Átirányít a kosár oldalra, a termék feltéteinek módosítása megtörtént

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: módosítás funkció tesztelése 
- Bemenet: Módosított termék=Cheese Burger, Paradicsom=true, Wasabi=false, a feltéteket nem módosítottuk
- Művelet: Nyomjuk meg a kosárba gombot 
- Elvárt eredmény: Átirányít a kosár oldalra, a termék az eddigi feltétekkel rendelkezik

## 3. Tesztriportok (TR)

### 3.1. Módosítás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: A kosárba helyeztem azonos termékeket más feltétekkel (Cheese Burger - Paradicsom; Cheese Burger - Wasabi)
    2. lépés: Rányomtam a (Cheese Burger - Paradicsom) termékre
    3. lépés: A Paradicsom helyett kiválasztottam a Wasabit
    4. lépés: Rányomtam a kosárba gombra
    5. lépés: Helyes eredményt kaptam: a módosítás oldalon maradtam és a gomb alatt megjelent a 'Ilyen már van a kosárban!' szöveg

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: A kosárba helyeztem egy terméket (Cheese Burger - Paradicsom)
    2. lépés: Rányomtam a (Cheese Burger - Paradicsom) termékre
    3. lépés: A Paradicsom feltétet leszedtem róla
    4. lépés: Rányomtam a kosárba gombra
    5. lépés: Helyes eredményt kaptam: átirányított a kosár oldalra és a kosárban a (Cheese Burger) termék szerepel

#### 3.1.2. TR-03 (TC-03)
- TP: TP-01
    1. lépés: A kosárba helyeztem azonos termékeket más feltétekkel (Cheese Burger - Paradicsom, Wasabi; Cheese Burger - Paradicsom)
    2. lépés: Rányomtam a (Cheese Burger - Paradicsom, Wasabi) termékre
    3. lépés: A Paradicsom feltétet leszedtem róla
    4. lépés: Rányomtam a kosárba gombra
    5. lépés: Helyes eredményt kaptam: átirányított a kosár oldalra és a kosárban a (Cheese Burger - Paradicsom) és a (Cheese Burger - Wasabi) termék szerepel

#### 3.1.2. TR-04 (TC-04)
- TP: TP-01
    1. lépés: A kosárba helyeztem azonos termékeket más feltétekkel (Cheese Burger - Paradicsom; Cheese Burger - Wasabi)
    2. lépés: Rányomtam a (Cheese Burger - Paradicsom) termékre
    3. lépés: A Paradicsom feltétet nem módosítottam
    4. lépés: Rányomtam a kosárba gombra
    5. lépés: Helyes eredményt kaptam: átirányított a kosár oldalra és a kosárban változatlanul a (Cheese Burger - Paradicsom; Cheese Burger - Wasabi) termékek szerepelnek
    