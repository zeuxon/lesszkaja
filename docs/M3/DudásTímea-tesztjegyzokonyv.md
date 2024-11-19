# Tesztjegyzőkönyv-Éttermek keresése, szűrése és ételek részletezése, személyreszabása

Az alábbi tesztdokumentum a LesszKaja projekthez tartozó 8.3.19.3. "Éttermek keresése és szűrése" és "Ételek részletezése és személyreszabása" tesztelésehez készült. Felelőse: Dudás Tímea

## 1. Teszteljárások (TP)

### 1.1. Éttermek keresése és szűrése tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Éttermek keresése tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el az restaurantlist.component modult
    1. lépés: Kattintás a kereső mezőbe és szöveg beírása
    6. lépés: Nyomjuk meg a Keresés vagy Enter gombot 
    7. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: adott étterem kilistázása

## 2. Teszesetek (TC)

### 2.1. Éttermek keresésének és szűrésének tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: keresés és szűrés funkció tesztelése 
- Bemenet: keresés = KFC
- Művelet: nyomjuk meg a keresés gombot 
- Elvárt eredmény:a KFC étterem kilistázásra került

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: keresés és szűrés funkció tesztelése 
- Bemenet: keresés = ""(üres string)
- Művelet: nyomjuk meg a keresés gombot 
- Elvárt kimenet: minden étterem kilistázásra kerül

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: keresés és szűrés funkció tesztelése 
- Bemenet: keresés = alma
- Művelet: nyomjuk meg a keresés gombot 
- Elvárt kimenet: nem listáz ki semmit, mivel nem található alma nevű étterem a listában

## 3. Teszteljárások (TP)

### 3.1. Ételek részletezése és személyreszabása tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Ételek részletezése és személyreszabása tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és indítsuk el az restaurantlist.component modult
    1. lépés: Kattintás egy adott étterem csempére
    6. lépés: Nyomjunk rá valamely elérhető termékre
    7. lépés: Kívánt plusz összetevők kiválasztjuk és kosárba gombra rákattinttunk
    8. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: adott étel és annak személyreszabott változata a kosárba került

## 4. Teszesetek (TC)

### 4.1. Éttermek keresésének és szűrésének tesztesetei

#### 4.1.1. TC-01
- TP: TP-02
- Leírás: Ételek részletezése és személyreszabása tesztelése 
- Bemenet: üres (semmi plusz opció nincs kiválasztva)
- Művelet: nyomjuk meg a kosárba gombot 
- Elvárt kimenet: kosárban az az adott étel kilistázva, semmi plusz összetevő nem szerepel mellette a kosárban


#### 4.1.2. TC-02
- TP: TP-02
- Leírás: Ételek részletezése és személyreszabása tesztelése 
- Bemenet: egy összetevő kiválasztása
- Művelet: nyomjuk meg a kosárba gombot 
- Elvárt kimenet: A kosárban megjelenik a választott étel a kiválasztott plusz hozzávalóval együtt

#### 4.1.3. TC-02
- TP: TP-02
- Leírás: Ételek részletezése és személyreszabása tesztelése 
- Bemenet: két összetevő kiválasztása
- Művelet: nyomjuk meg a kosárba gombot 
- Elvárt kimenet: A kosárban szerepel az adott étel és az általam kiválasztott plusz összetevők

#### 4.1.4. TC-03
- TP: TP-02
- Leírás: Ételek részletezése és személyreszabása tesztelése 
- Bemenet: két ugyanolyan plusz összetevőkkel rendelkező étel egymás után
- Művelet: nyomjuk meg a kosárba gombot 
- Elvárt kimenet: A kosárban szerepel az adott étel és az általam kiválasztott plusz összetevők plusz a darabszáma frissítve


## 5. Tesztriportok (TR)

### 5.1. Éttermek keresése és szűrése

#### 5.1.1. TR-01 (TC-01)
    1. lépés: KFC-t beírtam
    2. lépés: a keresés gombra rányomtam
    3. lépés: helyes eredményt kaptam, az étterem egyedül kilistázva megjelent
    

#### 5.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: üresen hagytam a kereső mezőt
    2. lépés: a keresés gombra rányomtam
    3. lépés: helyes eredményt kaptam, minden étterem kilistázva megjelent

#### 5.1.2. TR-03 (TC-03)
- TP: TP-01
    1. lépés: alma-t beírtam
    2. lépés: a keresés gombra rányomtam
    3. lépés: helyes eredményt kaptam, semmilyen étterem nem került kilistázásra
    

    
### 5.2. Ételek részletezése és személyreszabása tesztelése

#### 5.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: a mcdonalds étteremnél mindent üresen hagytam (nincs egy checkbox se kipipálva)
    2. lépés: a kosárba gombra rányomtam
    3. lépés: helyes eredményt kaptam, kosárban az az adott étel kilistázva, semmi plusz összetevő nem szerepel mellette a kosárban
    

#### 5.2.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: a mcdonalds étteremnél, a cheese burger opciónál paradicsom plusz összetevőt kiválasztottam
    2. lépés: a kosárba gombra rányomtam
    3. lépés: helyes eredményt kaptam, a kosárban megjelenik a választott étel a kiválasztott plusz hozzávalóval együtt

#### 5.2.3. TR-03 (TC-03)
- TP: TP-02
    1. lépés: a mcdonalds étteremnél, a cheese burger opciónál a paradicsom és a wasabi plusz összetevőt kiválasztottam
    2. lépés: a kosárba gombra rányomtam
    3. lépés: helyes eredményt kaptam, a kosárban megjelenik a választott étel a kiválasztott plusz hozzávalóval együtt
    

#### 5.2.3. TR-03 (TC-04)
- TP: TP-02
    1. lépés: a már meglévő plusz paradicsomos cheese burger mellé egy ugyanezzel a feltéttel rendelkező terméket választottam ki
    2. lépés: a kosárba gombra rányomtam
    3. lépés: helyes eredményt kaptam, a kosárban szerepel az adott étel és az általam kiválasztott plusz összetevők plusz a darabszáma frissítve
    
