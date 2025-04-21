# LesszKaja Projektterv 2024

## 1. Összefoglaló 

A sikeres ételkiszállítás csakis arról szól, hogy lesz étel a leggyorsabb, legmegbízhatóbb módon. 
Ahhoz hogy az emberek minél könnyebben elérjék az oldalt, illetve minél többen tudjanak csúcsidőben rendelni egy robosztus skálázható oldalra van szükség, mely ki tudja szolgálni a megrendelőket, illetve a futárokat.
Az átláthatóság érdekében megfelelő felülettel kell rendelkezni, mind a felhasználók, adminok, illetve futárok számára szükséges oldalakon, a munkafolyamatokat, illetve megrendelések folyamatát könnyítve.
Projektünk célja az eddig felvázolt optimális ételkiszállító webalkalmazás megalkotása az ebéd/ételszállító cégeknek, mely megvalósítja ezeket, illetve a bonyolult régimódi munkaelosztásokat és rendeléseket leváltja.


## 2. A projekt bemutatása

Ez a projektterv a Lesszkaja projektet mutatja be, amely 2024-10-05-től 2024-12-04-ig tart, azaz összesen 60 napon keresztül fog futni. A projekten hat fejlesztő fog dolgozni, az elvégzett feladatokat pedig négy alkalommal fogjuk prezentálni a megrendelőnek, annak érdekében, hogy biztosítsuk a projekt folyamatos előrehaladását.


### 2.1. Rendszerspecifikáció

A rendszernek tudnia kell kezelnie a különböző éttermeket, azok tulajdonosainak biztosítania kell egy felületet ahol módosítani tudják éttermük adatait, illetve az általuk forgalmazott ételeket, ezen felül nyomon követhetik és feltölhetik árukészletüket. A futároknak biztosítania kell, hogy a megrendeléseket meg tudják tekinteni és azokat el tudják fogadni. A különböző felhasználóknak biztosítani kell az éttermekre való szűrést, a rendelések felvételét, bizonyos szinten az éttermek által beállított opciókkal ezen rendelések tételeinek személyreszabását, saját kosaruk kezelését, azok kifizetését, illetve rendeléseik állapotának megtekintését. Emellett a vendég felhasználók kosarát is tudnia kell kezelni. Az admin felhasználóknak egy olyan felületet kell biztosítani, ahol a megvalósított elemeket módosíthatják.


### 2.2. Funkcionális követelmények

 - Felhasználók kezelése (admin, étterem, felhasználó) (CRUD):
    - Admin felhasználó: Az admin jogosult új felhasználók (pl. éttermek, vendégek) létrehozására, meglévő felhasználók adatainak módosítására, inaktiválására vagy törlésére.
    - Éttermek: Az éttermek kezelhetik saját profiljukat, menüjüket.
    - Felhasználók: A vendégek regisztrálhatnak, bejelentkezhetnek, és szerkeszthetik saját profiljukat (személyes adatok, szállítási címek).
    - Futár: A futárok felvehetnek rendeléseket, megtekinthetik a rendeléseik címét, összegét, és megerősíthetik azok átvételét.
 
 - Felhasználói munkamenet megvalósítása több jogosultsági szinttel:
    - A különböző típusú felhasználók (adminok, éttermek, vendégek) különböző hozzáférési szintekkel rendelkeznek, és a rendszer figyeli, hogy melyik felhasználó milyen szerepkörben van bejelentkezve.
    - Admin: Teljes hozzáférés az összes funkcióhoz és adatbázishoz.
    - Éttermi felhasználók: Korlátozott hozzáférés csak a saját éttermükhöz és menüjükhöz, valamint rendeléskezeléshez.
    - Vendégek: Csak saját profiljuk, rendeléseik és kosaruk elérésére jogosultak.
    - Futárok: Megtekinthetik az elérhető rendeléseket és felvehetik, majd teljesíthetik azokat, illetve a vendég felhasználók jogosultságaival is rendelkeznek.
 
 - Éttermek kezelése (CRUD):
    - Az adminok és éttermi felhasználók létrehozhatnak, megtekinthetnek, módosíthatnak és törölhetnek éttermi adatokat.
    - Létrehozás: Új éttermek felvétele a rendszerbe.
    - Lekérdezés: Éttermek adatainak megtekintése (pl. neve, címe, nyitvatartási idő, menüje).
    - Frissítés: Éttermek adatainak módosítása (pl. menü változtatása, árak frissítése).
    - Törlés: Nem aktív vagy bezárt éttermek eltávolítása a rendszerből.
 
 - Ételek részletezése és személyreszabása:
    - A felhasználók megtekinthetik az egyes ételek részletes adatait (pl. hozzávalók, tápanyagértékek, allergének).
    - Személyre szabás: A vendégek módosíthatják a rendeléseiket (pl. extra feltétek hozzáadása, összetevők eltávolítása).

 - Árukészletek kezelése (CRUD): Az éttermek követhetik és frissíthetik az árukészletüket.
    - Létrehozás: Új termékek hozzáadása az árukészlethez.
    - Lekérdezés: A jelenleg elérhető árukészlet lekérdezés.
    - Frissítés: Az árukészlet frissítése, ha új termékek érkeznek vagy bizonyos áruk kifogynak.
    - Törlés: Termékek eltávolítása a listából.

 - Kosár kezelése (CRUD)
    - Termékek hozzáadása a kosárhoz
    - Kosárban lévő termék módosítása (pl. pizza feltétek megváltoztatása, mennyiség módosítása)
    - Kosárban lévő termékek megtekintése
    - Termékek törlése a kosárból

 - Fizetési folyamat megvalósítása:
    - Kizárólag szimuláció!
    - Fizetési módok kiválasztása (pl. bankkártya, PayPal).
    - Tranzakció feldolgozása: Az árak összesítése.
    - Visszaigazolás: A sikeres fizetés után a felhasználó kap egy visszaigazolást a rendelésről és fizetésről.

Szeged, 2024-10-8.
