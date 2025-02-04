document.addEventListener('DOMContentLoaded', function () {

    function generateForm() {
        const form = document.createElement('form');
        form.id = 'form';

        const fields = [
            { label: 'Terület megnevezése', id: 'fizika', type: 'text' },
            { label: 'Időszak', id: 'ido', type: 'text' },
            { label: 'Első tudós', id: 'tudos1', type: 'text' },
            { label: 'Második tudós', id: 'tudos2', type: 'text' }
        ];

        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];
            const div = document.createElement('div');

            const label = document.createElement('label');
            label.htmlFor = field.id;
            label.innerText = field.label;
            div.appendChild(label);

            const input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.name = field.id;
            div.appendChild(input);

            const errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            div.appendChild(errorSpan);

            form.appendChild(div);
        }

        const submit = document.createElement('button');
        submit.type = 'submit';
        submit.innerText = 'Hozzáadás';
        form.appendChild(submit);

        document.body.appendChild(form);
        return form;
    }

    const formElement = generateForm()

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

    function renderTable(data) { // Definiálom a renderTable függvényt
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

    renderTable(array); // Az inicializáláskor most a globális array-t adjuk át a renderTable függvénynek.

    const form = document.getElementById('form'); // Megkeresi az `form` azonosítójú HTML elemet.


    formElement.addEventListener('submit', function (e) { // Hozzáad egy eseménykezelőt, amely a form elküldésekor fut le.
        e.preventDefault(); // Eltávolítja a form default értesítőjét

        const teruletmegnevezeseHtmlElement = document.getElementById('fizika') // Megkeresi a `fizika` azonosítójú HTML elemet.
        const idoszakHtmlElement = document.getElementById('ido') // Megkeresi az `ido` azonosítójú HTML elemet.
        const elsotudosHtmlElement = document.getElementById('tudos1') // Megkeresi a `tudos1` azonosítójú HTML elemet.
        const masodiktudosHtmlElement = document.getElementById('tudos2') // Megkeresi a `tudos2` azonosítójú HTML elemet.

        const formErrors = e.currentTarget.querySelectorAll('.error-message');
        for (const error of formErrors) { // Végigiterálunk az összes talált error-message elemen.
            error.innerHTML = ''; // Töröljük a hibák szövegét, hogy ne jelenjenek meg korábbi hibák.
        }

        const teruletmegnevezeseValue = teruletmegnevezeseHtmlElement.value // Lekéri a `fizika` mező értékét.
        const idoszakValue = idoszakHtmlElement.value // Lekéri az `ido` mező értékét.
        const elsotudosValue = elsotudosHtmlElement.value // Lekéri a `tudos1` mező értékét.
        const masodiktudosValue = masodiktudosHtmlElement.value // Lekéri a `tudos2` mező értékét.

        let valid = simpleValidation(teruletmegnevezeseHtmlElement, idoszakHtmlElement); // betesszük egy változóba a simpleValidation függvény visszatérési értékét
        valid = complexValidation(elsotudosHtmlElement, masodiktudosHtmlElement) && simpleValidation(teruletmegnevezeseHtmlElement, idoszakHtmlElement); // a valid változó felveszi értékként a complexValidation és a simpleValidation függvény visszatérési értékét.


        if (valid) { // true, ha a field1 és field2 ki van töltve plusz hogyha minimum 1 tudós
            const newElement = { // Létrehoz egy új objektumot az űrlap mezőinek értékeivel.
                field1: teruletmegnevezeseValue, // Az objektum `field1` mezőjéhez az `fizika` mező értéke kerül.
                field2: idoszakValue, // Az objektum `field2` mezőjéhez az `ido` mező értéke kerül.
                field3: elsotudosValue, // Az objektum `field3` mezőjéhez a `tudos1` mező értéke kerül.
                field4: masodiktudosValue // Az objektum `field4` mezőjéhez a `tudos2` mező értéke kerül.
            };
            array.push(newElement); // Hozzáadja az új elemet az array végére
            renderTable(array); // Frissíti a táblázatot
            e.currentTarget.reset(); // Formot alapallálapotba állítja vissza
        }
    })
    
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

    function validateFormHtmlField(inputHtmlElement, errorMessage) { // Definiáljuk a validateFormHtmlField függvényt
        let valid = true; // Definiáljuk a valid lokális változót true értékkel
        if (inputHtmlElement.value === '') { // Ha a paraméterben kapott beviteli mező üres
            const parentElement = inputHtmlElement.parentElement; // Eltároljuk a mező szülő elemét
            const errorPlace = parentElement.querySelector('.error-message'); // A szülő elemben megkeressük az "error-message" osztályú elemet
            if (errorPlace != undefined) { // Ha van hibajelzés
                errorPlace.innerHTML = errorMessage; // Ha már van ilyen hibaüzenet, akkor cseréljük át.
            }
            valid = false; // Ha hiba van, a valid változó értéke hamisra változik.
        }
        return valid; // Visszatér a valid változóval.
    }
});