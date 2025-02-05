/**
     * Létrehoz egy dinamikus űrlapot a tudományterületek és tudósok hozzáadásához
     * @returns {HTMLFormElement} A létrehozott HTML űrlapelem
     */
function generateForm() {
    const form = document.createElement('form'); // Létrehoz egy új form elemet
    form.id = 'form'; // Beállítja az űrlap azonosítóját form-ra
    form.action = '#'; // Beállítja az űrlap action attribútumát üres hivatkozásra

    const fields = [ // Létrehoz egy tömböt az űrlap mezőinek adataival
        { label: 'Terület megnevezése', id: 'fizika', type: 'text' },
        { label: 'Időszak', id: 'ido', type: 'text' },
        { label: 'Első tudós', id: 'tudos1', type: 'text' },
        { label: 'Második tudós', id: 'tudos2', type: 'text' }
    ];

    for (let i = 0; i < fields.length; i++) { // Végigiterál a tömb elemein és létrehozza az input mezőket
        const field = fields[i]; // Az aktuális mező objektum
        const div = document.createElement('div'); // Létrehoz egy div elemet a mező számára

        const label = document.createElement('label'); // Létrehoz egy címkét label az input mezőhöz
        label.htmlFor = field.id; // Összeköti a címkét az input mezővel
        label.innerText = field.label; // Beállítja a címke szövegét
        div.appendChild(label); // Hozzáadja a címkét a div-hez

        div.appendChild(document.createElement('br')); // Sor törés az elrendezéshez

        const input = document.createElement('input'); // Létrehoz egy input mezőt
        input.type = field.type; // Beállítja az input típusát
        input.id = field.id; // Beállítja az input azonosítóját
        input.name = field.id; // Beállítja az input nevét
        div.appendChild(input); // Hozzáadja az input mezőt a div-hez

        div.appendChild(document.createElement('br')); // Sor törés az elrendezéshez
        div.appendChild(document.createElement('br')); // Sor törés az elrendezéshez

        const errorDiv = document.createElement('div'); // Létrehoz egy hibaüzenet megjelenítésére szolgáló div-et
        errorDiv.className = 'error-message'; // Hozzáad egy osztályt a div-hez
        div.appendChild(errorDiv); // Hozzáadja a hibaüzenet div-et a mező div-jéhez

        form.appendChild(div); // Hozzáadja az elkészült mező div-et az űrlaphoz
    }

    const submit = document.createElement('button'); // Létrehoz egy "Hozzáadás" gombot
    submit.innerText = 'Hozzáadás'; // Beállítja a gomb szövegét
    form.appendChild(submit); // Hozzáadja a gombot az űrlaphoz

    document.body.appendChild(form); // Hozzáadja az űrlapot a dokumentum törzséhez
    return form; // Visszatér az elkészült űrlappal
}

/**
     * Létrehoz egy táblázat fejlécét a megadott adatok alapján
     * @param {Object} headerAdat Az objektum, amely a fejléc cellák tartalmát tartalmazza
     * @param {HTMLElement} tableHeader A táblázat fejléc eleme
     */
function generateTableHeader(headerAdat, tableHeader) { // Definiálom a renderTable függvényt és adok neki 2 változót
    const headerRow = document.createElement('tr'); // Létrehoz egy új táblázatsort a fejléc számára.
    for (const i in headerAdat) { // Végigmegy a `headerAdat` elemein, hogy minden mezőhöz létrehozzon egy cellát
        const headerCell = document.createElement('th'); // Létrehoz egy új fejléc cellát
        headerCell.innerHTML = headerAdat[i]; // A cella belső tartalmát beállítja a `headerAdat` aktuális mezőjére
        if (i === 'field3') { // Ha az aktuális mező neve 'field3', akkor a cella szélességét két oszlopnyi méretre állítja.
            headerCell.colSpan = 2; // Ha a cella a field3 mező, akkor két oszlopot foglaljon el
        }
        headerRow.appendChild(headerCell); // Hozzáadja a fejlécsort a fejléc elemhez
    }
    tableHeader.appendChild(headerRow); // Hozzáadja a fejlécsort a fejléc elemhez
}

/**
     * Kirendereli a táblázatot az adatok alapján
     * @param {Array<Object>} data A megjelenítendő adatokat tartalmazó objektumtömb 
     * @param {HTMLElement} table A táblázat HTML eleme, amelybe renderelünk
     */
function renderTable(data, table) { // Definiálom a renderTable függvényt
    table.innerHTML = ''; // Kiüríti a táblázat tartalmát, hogy újra generálható legyen

    const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
    table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)

    const tableBody = document.createElement('tbody'); // Táblázat törzs elem (tbody) létrehozása
    table.appendChild(tableBody); // A törzs (tbody) hozzáadása a táblázathoz (table)

    let headerKeszVan = false; // Változó aminek értékét előszőr false-ra állítjuk, hogyha létrehoztuk a header true lesz, hogy a header csak egyszer jöjjön létre

    for (const currentElement of data) { // mostantól a rendertable függvény bemeneti paraméterként kapja meg a táblázat adatait, és ezen iterál végig. ÍGy a globális array helyett az aktuálisan átadott adatok alapján generáljuk a táblázatot
        if (!headerKeszVan) { // Ha a fejléc még nem készült el
            generateTableHeader(currentElement, tableHeader);  // Generálja a fejlécet az aktuális elem adatai alapján.
            headerKeszVan = true; // A fejléc elkészült, így a későbbiekben nem generálunk ujra
            continue; // Végeztük a fejlécek generálását, folytassuk tovább a ciklusban
        }

        const row = document.createElement('tr'); // Létrehoz egy új táblázatsort (<tr> elemet).
        tableBody.appendChild(row); // Hozzáadja az új sort a táblázat törzséhez (tbody).

        const field1Cell = document.createElement('td');  // Új cella létrehozása az `field1` mezőhöz.
        field1Cell.innerHTML = currentElement.field1 || ''; // Beállítja a cella tartalmát az aktuális objektum "field1" mezőjére.
        row.appendChild(field1Cell); // Hozzáadja a cellát a sorhoz

        const field2Cell = document.createElement('td'); // Új cella létrehozása az `field2` mezőhöz.
        field2Cell.innerHTML = currentElement.field2 || ''; // Beállítja a cella tartalmát az aktuális objektum "field2" mezőjére.
        row.appendChild(field2Cell); // Hozzáadja a cellát a sorhoz

        if (currentElement.field3 && currentElement.field4) {
            // Ha mindkét tudós mező ki van töltve, két külön cella jelenik meg.
            const field3Cell = document.createElement('td');
            field3Cell.innerHTML = currentElement.field3;
            row.appendChild(field3Cell);

            const field4Cell = document.createElement('td');
            field4Cell.innerHTML = currentElement.field4;
            row.appendChild(field4Cell);
        } else if (currentElement.field3) {
            // Ha csak az első tudós mező van kitöltve, akkor egy cellában jelenik meg két oszlopnyi helyen.
            const field3Cell = document.createElement('td');
            field3Cell.innerHTML = currentElement.field3;
            field3Cell.colSpan = 2;
            row.appendChild(field3Cell);
        } else if (currentElement.field4) {
            // Ha csak a második tudós mező van kitöltve, akkor egy cellában jelenik meg két oszlopnyi helyen.
            const field4Cell = document.createElement('td');
            field4Cell.innerHTML = currentElement.field4;
            field4Cell.colSpan = 2;
            row.appendChild(field4Cell);
        }
    }
}

/**
     * ellenőrzi, hogy a terület és időszak mezők ki vannak-e töltve
     * @param {HTMLElement} teruletHtmlElement A terület beviteli mező HTML eleme
     * @param {HTMLElement} idoszakHtmlElement Az időszak beviteli mező HTML eleme
     * @returns {boolean} True, ha a validáció sikeres, különben false
     */
function simpleValidation(teruletHtmlElement, idoszakHtmlElement) { // Simple validációs függvény, amely ellenőrzi, hogy ki van e töltve a terület és idő field
    let valid = true; // A valid változót alapértelmezetten igazra állítjuk, majd később ennek az értékét hamisra módosítjuk, ha hiba történik.

    if (!validateFormHtmlField(teruletHtmlElement, "A terület kitöltése kötelező")) { // Ellenőrzi, hogy a terulet mező ki van e töltve.
        valid = false; // Ha nincs kitöltve, a validáció hibás.
    }

    if (!validateFormHtmlField(idoszakHtmlElement, "Az időszak kitöltése kötelező")) { // Ellenőrzi, hogy az idő mező ki van e töltve.
        valid = false; // Ha nincs kitöltve, a validáció hibás.
    }
    return valid; // Visszaadja a validáció eredményét.

}

/**
     * ellenőrzi, hogy legalább egy tudós mező ki van-e töltve
     * @param {HTMLElement} elsotudosHtmlElement Az első tudós beviteli mező HTML eleme
     * @param {HTMLElement} masodiktudosHtmlElement A második tudós beviteli mező HTML eleme
     * @returns {boolean} True, ha legalább egy mező ki van töltve, különben false
     */
function complexValidation(elsotudosHtmlElement, masodiktudosHtmlElement) { // Komplex validációs függvény, amely ellenőrzi, hogy legalább az egyik tudós mező ki van-e töltve.
    let valid = true; // A valid változót alapértelmezetten igazra állítjuk, majd később ennek az értékét hamisra módosítjuk, ha hiba történik.

    if (elsotudosHtmlElement.value === '' && masodiktudosHtmlElement.value === '') { // Ha egyik tudós mező sem lett kitöltve, hibaüzenetet jelenít meg.
        const errorMessage = 'Legalább egy tudóst meg kell adni'; // Hibajelzés szövege.

        if (!validateFormHtmlField(elsotudosHtmlElement, errorMessage)) { // Ellenőrzi, hogy az első tudós mező ki van e töltve.
            valid = false; // Ha nincs kitöltve, a validáció hibás.
        }

        if (!validateFormHtmlField(masodiktudosHtmlElement, errorMessage)) { // Ellenőrzi, hogy a második tudós mező ki van e töltve.
            valid = false; // Ha nincs kitöltve, a validáció hibás.
        }
    }
    return valid; // Visszaadja a validáció eredményét.
}

/**
     * üres mező esetén hibaüzenetet jelenít meg
     * @param {HTMLElement} inputHtmlElement A beviteli mező HTML eleme
     * @param {string} errorMessage A megjelenítendő hibaüzenet
     * @returns {boolean} True, ha a mező ki van töltve, különben false
     */
function validateFormHtmlField(inputHtmlElement, errorMessage) { // Definiáljuk a validateFormHtmlField függvényt
    let valid = true; // Definiáljuk a valid lokális változót true értékkel
    if (inputHtmlElement.value === '') { // Ha a paraméterben kapott beviteli mező üres
        const parentElement = inputHtmlElement.parentElement; // Eltároljuk a mező szülő elemét
        const errorPlace = parentElement.querySelector('.error-message'); // A szülő elemben megkeressük az "error-message" osztályú elemet
        if (errorPlace) { // Ha van hibajelzés
            errorPlace.textContent = errorMessage; // Ha már van ilyen hibaüzenet, akkor cseréljük át.
            errorPlace.style.color = 'red'; //
        }
        valid = false; // Ha hiba van, a valid változó értéke hamisra változik.
    }
    return valid; // Visszatér a valid változóval.
}