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

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor (tr) létrehozása
table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)
tableHeader.appendChild(headerRow); // A fejlécsor (tr) hozzáadása a fejlécbe (thead)

const tableBody = document.createElement('tbody'); // Táblázat törzs elem (tbody) létrehozása
table.appendChild(tableBody); // A törzs (tbody) hozzáadása a táblázathoz (table)


for (let i = 0; i < array.length; i++) { // Végigiterál az `array` elemein az első elem (fejléc) kihagyásával.
    const currentElement = array[i]; // Az aktuális sor objektumát elmenti a `currentElement` változóba.

    if(i === 0){ // Ellenőrzi, hogy az aktuális iteráció az első-e (a fejléc generálásához).
        const headerCell1 = document.createElement('th'); // Létrehoz egy új fejléc cellát (<th>) az első oszlop számára.
        headerCell1.innerHTML = currentElement.field1; // Beállítja a cella tartalmát az aktuális objektum "field1" mezőjére.
        headerRow.appendChild(headerCell1); // Hozzáadja a cellát a fejlécsorhoz.

        const headerCell2 = document.createElement('th'); // Létrehoz egy új fejléc cellát (<th>) a második oszlop számára.
        headerCell2.innerHTML = currentElement.field2; // Beállítja a cella tartalmát az aktuális objektum "field2" mezőjére.
        headerRow.appendChild(headerCell2); // Hozzáadja a cellát a fejlécsorhoz.

        const headerCell3 = document.createElement('th'); // Létrehoz egy új fejléc cellát (<th>) a "Képviselők" oszlop számára.
        headerCell3.innerHTML = currentElement.field3; // Beállítja a cella tartalmát az aktuális objektum "field3" mezőjére.
        headerCell3.colSpan = 2; // Beállítja, hogy a cella két oszlopot foglaljon el.
        headerRow.appendChild(headerCell3); // Hozzáadja a cellát a fejlécsorhoz.

        continue; // Fejléc létrehozása után ugrunk a következő iterációra
    }

    const row = document.createElement('tr'); // Létrehoz egy új táblázatsort (<tr> elemet).
    tableBody.appendChild(row); // Hozzáadja az új sort a táblázat törzséhez (tbody).

    const rowterulet = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field1" adatának tárolására.
    rowterulet.innerHTML = currentElement.field1; // Beállítja a cella tartalmát az aktuális objektum "field1" mezőjére.
    row.appendChild(rowterulet); // Hozzáadja a cellát az aktuális táblázatsorhoz.

    const rowidoszak = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field2" adatának tárolására.
    rowidoszak.innerHTML = currentElement.field2; // Beállítja a cella tartalmát az aktuális objektum "field2" mezőjére.
    row.appendChild(rowidoszak); // Hozzáadja a cellát az aktuális táblázatsorhoz.

    const rowkepviselok1 = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field3" adatának tárolására.
    rowkepviselok1.innerHTML = currentElement.field3; // Beállítja a cella tartalmát az aktuális objektum "field3" mezőjére.

    if (!currentElement.field4) { // Ellenőrzi, hogy az aktuális objektumban van-e "field4".
        rowkepviselok1.colSpan = 2; // Ha nincs "field4", az első "Képviselők" cella két oszlopot foglal el.
        row.appendChild(rowkepviselok1); // Hozzáadja a cellát az aktuális táblázatsorhoz.
    } else {  // Ha van "field4", külön cellát készítünk hozzá.
        row.appendChild(rowkepviselok1); // Hozzáadja az első "Képviselők" cellát az aktuális táblázatsorhoz.

        const rowkepviselok2 = document.createElement('td'); // Létrehoz egy új cellát (<td>) az aktuális sor "field4" adatának tárolására.
        rowkepviselok2.innerHTML = currentElement.field4; // Beállítja a cella tartalmát az aktuális objektum "field4" mezőjére.
        row.appendChild(rowkepviselok2); // Hozzáadja a cellát az aktuális táblázatsorhoz.
    }
}