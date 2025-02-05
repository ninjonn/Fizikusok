const formElement = generateForm(); // Meghívja a generateForm függvényt és eltárolja az eredményt a formElement változóban

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

renderTable(array, table); // Az inicializáláskor most a globális array-t adjuk át a renderTable függvénynek.

formElement.addEventListener('submit', function (e) { // Hozzáad egy eseménykezelőt, amely a form elküldésekor fut le.
    e.preventDefault(); // Eltávolítja a form default értesítőjét

    const formErrors = e.currentTarget.querySelectorAll('.error-message');
    for (const error of formErrors) { // Végigiterálunk az összes talált error-message elemen.
        error.textContent = ''; // Töröljük a hibák szövegét, hogy ne jelenjenek meg korábbi hibák.
    }

    const teruletmegnevezeseHtmlElement = document.getElementById('fizika') // Megkeresi a `fizika` azonosítójú HTML elemet.
    const idoszakHtmlElement = document.getElementById('ido') // Megkeresi az `ido` azonosítójú HTML elemet.
    const elsotudosHtmlElement = document.getElementById('tudos1') // Megkeresi a `tudos1` azonosítójú HTML elemet.
    const masodiktudosHtmlElement = document.getElementById('tudos2') // Megkeresi a `tudos2` azonosítójú HTML elemet.


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
        renderTable(array,table); // Frissíti a táblázatot
        e.currentTarget.reset(); // Formot alapallálapotba állítja vissza
    }
})

