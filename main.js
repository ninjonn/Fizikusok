const array = [
    { // Az első objektum a táblázat fejlécének adatait tartalmazza
        field1: 'Fizika területe', // Az első fejléc cella szövegét állítja be
        field2: 'Időszak', // A második fejléc cella szövegét állítja be
        field3: 'Képviselők' // A harmadik fejléc cella szövegét állítja be
    },

    { // Az első adatokat tartalmazó sor objektuma
        field1: 'Optika', // // Az első cella szövegét állítja be az első sorban
        field2: 'XI. század', // A második cella szövegét állítja be az első sorban
        field3: 'Alhazen' // A harmadik cella szövegét állítja be az első sorban
    },

    { // A második adatokat tartalmazó sor objektuma
        field1: 'Asztronómia', // Az első cella szövegét állítja be a második sorban
        field2: 'reneszánsz', // A második cella szövegét állítja be a második sorban
        field3: 'Kepler', // A harmadik cella szövegét állítja be a második sorban
        field4: 'Galilei' // A negyedik cella szövegét állítja be a második sorban
    },

    { // A harmadik adatokat tartalmazó sor objektuma
        field1: 'Kvantumfizika', // Az első cella szövegét állítja be a harmadik sorban
        field2: 'XIX-XX. század', // A második cella szövegét állítja be a harmadik sorban
        field3: 'Max Planck', // A harmadik cella szövegét állítja be a harmadik sorban
        field4: 'Albert Einstein' // A negyedik cella szövegét állítja be a harmadik sorban
    },

    { // A negyedik adatokat tartalmazó sor objektuma
        field1: 'Modern fizika', // Az első cella szövegét állítja be a negyedik sorban
        field2: 'XX-XXI. század', // A második cella szövegét állítja be a negyedik sorban
        field3: 'Richard Feynman', // A harmadik cella szövegét állítja be a negyedik sorban
        field4: 'Stephen Hawking' // A negyedik cella szövegét állítja be a negyedik sorban
    }
];

const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez (body)

function renderTable() { // Definiálom a renderTable függvényt
    table.innerHTML = '';

    const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
    table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)

    const tableBody = document.createElement('tbody'); // Táblázat törzs elem (tbody) létrehozása
    table.appendChild(tableBody); // A törzs (tbody) hozzáadása a táblázathoz (table)

    let headerKeszVan = false; // Változó aminek értékét előszőr false-ra állítjuk, hogyha létrehoztuk a header true lesz, hogy a header csak egyszer jöjjön létre

    for (const currentElement of array) { // Végigiterálok az array elemein
        if (!headerKeszVan) { // Ha még nincs fejléc, akkor létrehozom
            const headerRow = document.createElement('tr'); // Létrehoz egy új fejlécsort.

            const headerCell1 = document.createElement('th'); // Létrehoz egy új fejléc cellát az első oszlophoz
            headerCell1.innerHTML = currentElement.field1; // A cella tartalma az első mező
            headerRow.appendChild(headerCell1); // Hozzáfűzi a fejlécsorhoz

            const headerCell2 = document.createElement('th'); // Létrehoz egy új fejléc cellát a második oszlophoz
            headerCell2.innerHTML = currentElement.field2; // A cella tartalma a második mező
            headerRow.appendChild(headerCell2); // Hozzáfűzi a fejlécsorhoz

            const headerCell3 = document.createElement('th'); // Létrehoz egy új fejléc cellát a harmadik oszlophoz
            headerCell3.innerHTML = currentElement.field3; // A cella tartalma a harmadik mező
            headerCell3.colSpan = 2; // Beállítja, hogy a cella két oszlopot foglaljon el
            headerRow.appendChild(headerCell3); // Hozzáfűzi a fejlécsorhoz

            tableHeader.appendChild(headerRow); // Hozzáadja a fejlécsort a táblázathoz.
            headerKeszVan = true; // Jelzi, hogy a fejléc már létrejött
            continue; // Továbblép a következő iterációra, mert létrehoztuk a fejlécet
        }

        const row = document.createElement('tr'); // Létrehoz egy új táblázatsort (<tr> elemet).
        tableBody.appendChild(row); // Hozzáadja az új sort a táblázat törzséhez (tbody).

        const rowterulet = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field1" adatának tárolására.
        rowterulet.innerHTML = currentElement.field1; // Beállítja a cella tartalmát az aktuális objektum "field1" mezőjére.
        row.appendChild(rowterulet); // Hozzáadja a cellát az aktuális táblázatsorhoz.

        const rowidoszak = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field2" adatának tárolására.
        rowidoszak.innerHTML = currentElement.field2; // Beállítja a cella tartalmát az aktuális objektum "field2" mezőjére.
        row.appendChild(rowidoszak); // Hozzáadja a cellát az aktuális táblázatsorhoz.

        if (currentElement.field3 && !currentElement.field4) { // Ellenőrzi, hogy az aktuális objektumnak van-e "field3" értéke, de nincs "field4" értéke.
            const rowkepviselok1 = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field3" adatának tárolására.
            rowkepviselok1.innerHTML = currentElement.field3; // Beállítja a cella tartalmát az aktuális objektum "field3" mezőjére.
            rowkepviselok1.colSpan = 2; // Ha nincs "field4", az első "Képviselők" cella két oszlopot foglal el.
            row.appendChild(rowkepviselok1); // Hozzáadja a cellát az aktuális táblázatsorhoz.
        } else if (!currentElement.field3 && currentElement.field4) { // Ellenőrzi, hogy az aktuális objektumnak van-e "field4" értéke, de nincs "field3" értéke.
            const rowkepviselok2 = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field4" adatának tárolására.
            rowkepviselok2.innerHTML = currentElement.field4; // Beállítja a cella tartalmát az aktuális objektum "field4" mezőjére.
            rowkepviselok2.colSpan = 2; // Ha nincs "field3", a második "Képviselők" cella két oszlopot foglal el.
            row.appendChild(rowkepviselok2); // Hozzáadja a cellát az aktuális táblázatsorhoz.
        } else if(currentElement.field3 && currentElement.field4) { // Ellenőrzi, hogy az aktuális objektumnak van "field3" és "field4" értéke is.
            const rowkepviselok1 = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field3" adatának tárolására.
            rowkepviselok1.innerHTML = currentElement.field3; // Beállítja a cella tartalmát az aktuális objektum "field3" mezőjére.
            row.appendChild(rowkepviselok1) // Hozzáadja a cellát az aktuális táblázatsorhoz.

            const rowkepviselok2 = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field4" adatának tárolására.
            rowkepviselok2.innerHTML = currentElement.field4; // Beállítja a cella tartalmát az aktuális objektum "field4" mezőjére.
            row.appendChild(rowkepviselok2) // Hozzáadja a cellát az aktuális táblázatsorhoz.
        }
    }
}
renderTable(); // A renderTable() függvény hívása a rendereléshez.

const form = document.getElementById('form'); // Megkeresi az `form` azonosítójú HTML elemet.

form.addEventListener('submit', function (e) { // Hozzáad egy eseménykezelőt, amely a form elküldésekor fut le.
    e.preventDefault(); // Eltávolítja a form default értesítőjét
    const teruletmegnevezeseHtmlElement = document.getElementById('fizika') // Megkeresi a `fizika` azonosítójú HTML elemet.
    const idoszakHtmlElement = document.getElementById('ido') // Megkeresi az `ido` azonosítójú HTML elemet.
    const elsotudosHtmlElement = document.getElementById('tudos1') // Megkeresi a `tudos1` azonosítójú HTML elemet.
    const masodiktudosHtmlElement = document.getElementById('tudos2') // Megkeresi a `tudos2` azonosítójú HTML elemet.

    const urlap = e.currentTarget;
    const errors = urlap.querySelectorAll('.error-message'); // Kiválasztjuk az összes HTML elemet, amelyek az "error-message" osztállyal rendelkeznek, a formon belül.
    for (const error of errors) { // Végigiterálunk az összes talált error-message elemen.
        error.innerHTML = ''; // Töröljük a hibák szövegét, hogy ne jelenjenek meg korábbi hibák.
    }

    const teruletmegnevezeseValue = teruletmegnevezeseHtmlElement.value // Lekéri a `fizika` mező értékét.
    const idoszakValue = idoszakHtmlElement.value // Lekéri az `ido` mező értékét.
    const elsotudosValue = elsotudosHtmlElement.value // Lekéri a `tudos1` mező értékét.
    const masodiktudosValue = masodiktudosHtmlElement.value // Lekéri a `tudos2` mező értékét.

    let valid = true; // A valid változót alapértelmezetten igazra állítjuk, majd később ennek az értékét hamisra módosítjuk, ha hiba történik.

    if (teruletmegnevezeseValue === '') { // Ha a 'fizika' mező üres
        const szuloElem = teruletmegnevezeseHtmlElement.parentElement; // Elmentjük a mező szülő elemét, amely tartalmazza a hibajelzést.
        const errorMessage = szuloElem.querySelector('.error-message'); // Megkeressük a szülő elemében azt a HTML elemet, amely az "error-message" osztállyal rendelkezik
        if (errorMessage != undefined) { // Ha létezik ilyen hibaüzenet elem.
            errorMessage.innerHTML = 'A terület kitöltése kötelező!'; // Hibaüzenet szövegének beállítása
        }
        valid = false; // Beállítjuk, hogy a valid változó hamis, mert a mező üres maradt
    }

    if (idoszakValue === '') { // Ha az 'ido' mező üres
        const szuloEleme = idoszakHtmlElement.parentElement; // Elmentjük a mező szülő elemét, amely tartalmazza a hibajelzést
        const hibauzenet = szuloEleme.querySelector('.error-message'); // Megkeressük a szülő elemében azt a HTML elemet, amely az "error-message" osztállyal rendelkezik
        if (hibauzenet != undefined) { // Ha létezik ilyen hibaüzenet elem.
            hibauzenet.innerHTML = 'Az időszak kitöltése kötelező!'; // Hibaüzenet szövegének beállítása

        }
        valid = false; // Beállítjuk, hogy a valid változó hamis, mert a mező üres maradt
    }

    if (elsotudosValue === '' && masodiktudosValue === '') {
        const szuloEleme1 = elsotudosHtmlElement.parentElement; // Elmentjük a mező szülő elemét, amely tartalmazza a hibajelzést
        const szuloEleme2 = masodiktudosHtmlElement.parentElement; // Elmentjük a mező szülő elemét, amely tartalmazza a hibajelzést
        const error1 = szuloEleme1.querySelector('.error-message'); // A szuloEleme1 elem belsejében keres egy '.error-message' osztályú elemet.
        const error2 = szuloEleme2.querySelector('.error-message'); // A szuloEleme2 elem belsejében keres egy '.error-message' osztályú elemet.
        if (error1 != undefined && error2 != undefined) { // Ellenőrzi, hogy mindkét hibaüzenet elem létezik-e
            error1.innerHTML = 'Legalább egy tudóst meg kell adni!'; // Beállítja az első hibaüzenet elem szövegét
            error2.innerHTML = 'Legalább egy tudóst meg kell adni!'; // Beállítja a második hibaüzenet elem szövegét
        }
        valid = false; // Beállítjuk, hogy a valid változó hamis, mert a mező üres maradt
    }

    if (valid) {
        const newElement = { // Létrehoz egy új objektumot az űrlap mezőinek értékeivel.
            field1: teruletmegnevezeseValue, // Az objektum `field1` mezőjéhez az `fizika` mező értéke kerül.
            field2: idoszakValue, // Az objektum `field2` mezőjéhez az `ido` mező értéke kerül.
            field3: elsotudosValue, // Az objektum `field3` mezőjéhez a `tudos1` mező értéke kerül.
            field4: masodiktudosValue // Az objektum `field4` mezőjéhez a `tudos2` mező értéke kerül.
        }

        array.push(newElement); // Hozzáadja az új elemet az array végére
        table.innerHTML = ''; // Kiüríti a táblázat tartalmát
        renderTable(); // Frissíti a táblázatot
    }
})