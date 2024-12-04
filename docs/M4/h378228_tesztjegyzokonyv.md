# Tesztjegyzőkönyv-Rendelés funkció

## 1. Teszteljárások (TP)

### 1.1. Rendelés funkció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Rendelés tesztelése
    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk
    1. lépés: Rakjunk a kosárba termékeket
    2. lépés: Nyomjunk a vásárlás gombra
    3. Válasszuk ki a fizetési módot és nyomjunk rá a rendelés gombra
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Létrejön egy rendelés, összetevőket levonja a raktárból

## 2. Teszesetek (TC)

### 2.1. Rendelés funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Rendelés funkció tesztelése 
- Bemenet: Kosárban lévő termék: Cheese Burger, Paradicsom=false, Wasabi=true
- Művelet: Vásároljuk meg a terméket 
- Elvárt eredmény: Létrejött egy rendelés. Az étterem raktárából levonódott a megfelelő mennyiség.

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Rendelés funkció tesztelése 
- Bemenet: Kosárban lévő termék: Cheese Burger, nincs feltét
- Művelet: Vásároljuk meg a terméket 
- Elvárt eredmény: Létrejött egy rendelés. Az étterem raktárából levonódott a megfelelő mennyiség.

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Rendelés funkció tesztelése 
- Bemenet: Kosárban nincs termék
- Művelet: Ellenőrizzük a kosár oldalt
- Elvárt eredmény: Nem jelenik meg a rendelés gomb

## 3. Tesztriportok (TR)

### 3.1. Módosítás funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: A kosárba helyeztem egy termékeket (Cheese Burger - Wasabi)
    2. lépés: Rányomtam a vásárlás gombra
    3. lépés: Kiválasztottam a fizetési módot
    4. lépés: Rányomtam a rendelés gombra
    5. lépés: Helyes eredményt kaptam: a rendelés létrejött és levonásra került a raktárból a megfelelő mennyiség

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: A kosárba helyeztem egy termékeket (Cheese Burger)
    2. lépés: Rányomtam a vásárlás gombra
    3. lépés: Kiválasztottam a fizetési módot
    4. lépés: Rányomtam a rendelés gombra
    5. lépés: Helyes eredményt kaptam: a rendelés létrejött és levonásra került a raktárból a megfelelő mennyiség

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: A kosárba nem raktam semmit
    2. lépés: Megnyitottam a kosár oldalt
    3. lépés: Helyes eredményt kaptam: a vásárlás gomb nem jelent meg
    