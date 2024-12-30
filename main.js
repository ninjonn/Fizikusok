const headerField1 = 'Fizika területe'; // Az első oszlop fejlécének szövegét beletesszük egy változóba
const headerField2 = 'Időszak'; // A második oszlop fejlécének szövegét beletesszük egy változóba
const headerField3 = 'Képviselők'; // A harmadik oszlop fejlécének szövegét beletesszük egy változóba (két oszlopot foglal majd el)

const firstRowField1 = 'Optika'; // Az első sor első cellájának szövegét beletesszük egy változóba
const firstRowField2 = 'XI. század'; // Az első sor második cellájának szövegét beletesszük egy változóba
const firstRowField3 = 'Alhazen'; // Az első sor harmadik cellájának szövegét beletesszük egy változóba (két oszlopot foglal majd el)

const secondRowField1 = 'Asztronómia'; // A második sor első cellájának szövegét beletesszük egy változóba
const secondRowField2 = 'reneszánsz'; // A második sor második cellájának szövegét beletesszük egy változóba
const secondRowField3 = 'Kepler'; // A második sor harmadik cellájának szövegét beletesszük egy változóba
const secondRowField4 = 'Galilei'; // A második sor negyedik cellájának szövegét beletesszük egy változóba

const thirdRowField1 = 'Kvantumfizika'; // A harmadik sor első cellájának szövegét beletesszük egy változóba
const thirdRowField2 = 'XIX-XX. század'; // A harmadik sor második cellájának szövegét beletesszük egy változóba
const thirdRowField3 = 'Max Planck'; // A harmadik sor harmadik cellájának szövegét beletesszük egy változóba
const thirdRowField4 = 'Albert Einstein'; // A harmadik sor negyedik cellájának szövegét beletesszük egy változóba

const fourthRowField1 = 'Modern fizika'; // A negyedik sor első cellájának szövegét beletesszük egy változóba
const fourthRowField2 = 'XX-XXI. század'; // A negyedik sor második cellájának szövegét beletesszük egy változóba
const fourthRowField3 = 'Richard Feynman'; // A negyedik sor harmadik cellájának szövegét beletesszük egy változóba
const fourthRowField4 = 'Stephen Hawking'; // A negyedik sor negyedik cellájának szövegét beletesszük egy változóba



const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez (body)

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor (tr) létrehozása
table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)
tableHeader.appendChild(headerRow); // A fejlécsor (tr) hozzáadása a fejlécbe (thead)

const headerCell1 = document.createElement('th'); // Fejléc cella (th) létrehozása
headerCell1.innerHTML = headerField1;  // A cella tartalmát beállítjuk az első oszlop fejlécének szövegére a hozzá tartozó változó értékének segítségével
headerRow.appendChild(headerCell1); // A cella (th) hozzáadása a fejlécsorhoz (tr)

const headerCell2 = document.createElement('th'); // Új fejléc cella (th) létrehozása
headerCell2.innerHTML = headerField2; // A cella tartalmát beállítjuk a második oszlop fejlécének szövegére
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella (th) létrehozása
headerCell3.innerHTML = headerField3; // A cella tartalmát beállítjuk a harmadik oszlop fejlécének szövegére
headerCell3.colSpan = 2; // A cella két oszlopot foglal el (colSpan beállítása)
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem (tbody) létrehozása
table.appendChild(tableBody); // A törzs (tbody) hozzáadása a táblázathoz (table)

const row1 = document.createElement('tr'); // Táblázat első sorának (tr) létrehozása
tableBody.appendChild(row1); // Az első sor (tr) hozzáadása a törzshöz (tbody)

const row1Cell1 = document.createElement('td'); // Első cella (td) létrehozása az első sorhoz
row1Cell1.innerHTML = firstRowField1; // A cella tartalmát beállítjuk az első sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella (td) létrehozása az első sorhoz
row1Cell2.innerHTML = firstRowField2; // A cella tartalmát beállítjuk az első sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella (td) létrehozása az első sorhoz
row1Cell3.colSpan = 2; // A cella két oszlopot foglal el
row1Cell3.innerHTML = firstRowField3; // A cella tartalmát beállítjuk az első sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz


const row2 = document.createElement('tr'); // Második sor (tr) létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = secondRowField1; // A cella tartalmát beállítjuk a második sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = secondRowField2; // A cella tartalmát beállítjuk a második sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = secondRowField3; // A cella tartalmát beállítjuk a második sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row2Cell4 = document.createElement('td'); // Negyedik cella létrehozása a második sorhoz
row2Cell4.innerHTML = secondRowField4; // A cella tartalmát beállítjuk a második sor negyedik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row2.appendChild(row2Cell4); // A cella hozzáadása a második sorhoz


const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = thirdRowField1; // A cella tartalmát beállítjuk a harmadik sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = thirdRowField2; // A cella tartalmát beállítjuk a harmadik sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = thirdRowField3; // A cella tartalmát beállítjuk a harmadik sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = thirdRowField4; // A cella tartalmát beállítjuk a harmadik sor negyedik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz


const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = fourthRowField1; // A cella tartalmát beállítjuk a negyedik sor első oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = fourthRowField2; // A cella tartalmát beállítjuk a negyedik sor második oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = fourthRowField3; // A cella tartalmát beállítjuk a negyedik sor harmadik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = fourthRowField4; // A cella tartalmát beállítjuk a negyedik sor negyedik oszlopának szövegére a hozzá tartozó változó értékének segítségével
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz