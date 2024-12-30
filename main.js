const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez (body)

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor (tr) létrehozása
table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)
tableHeader.appendChild(headerRow); // A fejlécsor (tr) hozzáadása a fejlécbe (thead)

const headerCell1 = document.createElement('th'); // Fejléc cella (th) létrehozása
headerCell1.innerHTML = 'Fizika területe'; // A cella tartalmának beállítása: "Fizika területe"
headerRow.appendChild(headerCell1); // A cella (th) hozzáadása a fejlécsorhoz (tr)

const headerCell2 = document.createElement('th'); // Új fejléc cella (th) létrehozása
headerCell2.innerHTML = 'Időszak'; // A cella tartalmának beállítása: "Időszak"
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella (th) létrehozása
headerCell3.innerHTML = 'Képviselők'; // A cella tartalmának beállítása: "Képviselők"
headerCell3.colSpan = 2; // A cella két oszlopot foglal el (colSpan beállítása)
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem (tbody) létrehozása
table.appendChild(tableBody); // A törzs (tbody) hozzáadása a táblázathoz (table)

const row1 = document.createElement('tr'); // Táblázat első sorának (tr) létrehozása
tableBody.appendChild(row1); // Az első sor (tr) hozzáadása a törzshöz (tbody)

const row1Cell1 = document.createElement('td'); // Első cella (td) létrehozása az első sorhoz
row1Cell1.innerHTML = 'Optika'; // A cella tartalmának beállítása: "Optika"
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella (td) létrehozása az első sorhoz
row1Cell2.innerHTML = 'XI. század'; // A cella tartalmának beállítása: "XI. század"
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella (td) létrehozása az első sorhoz
row1Cell3.colSpan = 2; // A cella két oszlopot foglal el
row1Cell3.innerHTML = 'Alhazen'; // A cella tartalmának beállítása: "Alhazen"
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz


const row2 = document.createElement('tr'); // Második sor (tr) létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = 'Asztronómia'; // A cella tartalmának beállítása: "Asztronómia"
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = 'reneszánsz'; // A cella tartalmának beállítása: "reneszánsz"
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = 'Kepler'; // A cella tartalmának beállítása: "Kepler"
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row2Cell4 = document.createElement('td'); // Negyedik cella létrehozása a második sorhoz
row2Cell4.innerHTML = 'Galilei'; // A cella tartalmának beállítása: "Galilei"
row2.appendChild(row2Cell4); // A cella hozzáadása a második sorhoz


const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = 'Kvantumfizika'; // A cella tartalmának beállítása: "Kvantumfizika"
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = 'XIX-XX. század'; // A cella tartalmának beállítása: "XIX-XX. század"
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = 'Max Planck'; // A cella tartalmának beállítása: "Max Planck"
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = 'Albert Einstein'; // A cella tartalmának beállítása: "Albert Einstein"
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz


const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = 'Modern fizika'; // A cella tartalmának beállítása: "Modern fizika"
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = 'XX-XXI. század'; // A cella tartalmának beállítása: "XX-XXI. század"
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = 'Richard Feynman'; // A cella tartalmának beállítása: "Richard Feynman"
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = 'Stephen Hawking'; // A cella tartalmának beállítása: "Stephen Hawking"
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz