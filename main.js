const headerObj = { // A header objektum, amely a táblázat oszlopait reprezentálja
    field1:'Fizika területe', // headerobj field1 tulajdonságának megadjuk a 'Fizika területe' értéket
    field2:'Időszak', // headerobj field3 tulajdonságának megadjuk a 'Időszak' értéket
    field3:'Képviselők' // headerobj field2 tulajdonságának megadjuk a 'Képviselők' értéket
};

const row1Obj = { // Az első sor objektuma, amely az első tudományos területet és a hozzá tartozó adatokat tartalmazza
    field1:'Optika', // row1Obj field1 tulajdonságának megadjuk a 'Optika' értéket
    field2:'XI. század', // row1Obj field2 tulajdonságának megadjuk a 'XI. század' értéket
    field3:'Alhazen' // row1Obj field3 tulajdonságának megadjuk a 'Alhazen' értéket
};

const row2Obj = { // A második sor objektuma, amely az asztronómiát és a hozzá tartozó adatokat tartalmazza
    field1:'Asztronómia', // row2Obj field1 tulajdonságának megadjuk a 'Asztronómia' értéket
    field2:'reneszánsz', // row2Obj field2 tulajdonságának megadjuk a 'reneszánsz' értéket
    field3:'Kepler', // row2Obj field3 tulajdonságának megadjuk a 'Kepler' értéket
    field4:'Galilei' // row2Obj field4 tulajdonságának megadjuk a 'Galilei' értéket
};

const row3Obj = { // A harmadik sor objektuma, amely a kvantumfizikát és a hozzá tartozó adatokat tartalmazza
    field1:'Kvantumfizika', // row3Obj field1 tulajdonságának megadjuk a 'Kvantumfizika' értéket
    field2:'XIX-XX. század', // row3Obj field2 tulajdonságának megadjuk a 'XIX-XX. század' értéket
    field3:'Max Planck', // row3Obj field3 tulajdonságának megadjuk a 'Max Planck' értéket
    field4:'Albert Einstein' // row3Obj field4 tulajdonságának megadjuk a 'Albert Einstein' értéket
};

const row4Obj = { // A negyedik sor objektuma, amely a modern fizikát és a hozzá tartozó adatokat tartalmazza
    field1:'Modern fizika', // row4Obj field1 tulajdonságának megadjuk a 'Modern fizika' értéket
    field2:'XX-XXI. század', // row4Obj field2 tulajdonságának megadjuk a 'XX-XXI. század' értéket
    field3:'Richard Feynman', // row4Obj field3 tulajdonságának megadjuk a 'Richard Feynman' értéket
    field4:'Stephen Hawking' // row4Obj field4 tulajdonságának megadjuk a 'Stephen Hawking' értéket
};



const table = document.createElement('table'); // Táblázat HTML elem létrehozása
document.body.appendChild(table); // Hozzáadjuk a táblázatot a dokumentum törzséhez (body)

const tableHeader = document.createElement('thead'); // Táblázat fejléc elem létrehozása
const headerRow = document.createElement('tr'); // Táblázat fejlécsor (tr) létrehozása
table.appendChild(tableHeader); // A fejléc (thead) hozzáadása a táblázathoz (table)
tableHeader.appendChild(headerRow); // A fejlécsor (tr) hozzáadása a fejlécbe (thead)

const headerCell1 = document.createElement('th'); // Fejléc cella (th) létrehozása
headerCell1.innerHTML = headerObj.field1;  // A cella tartalmát beállítjuk a headerObj.field1 értékével
headerRow.appendChild(headerCell1); // A cella (th) hozzáadása a fejlécsorhoz (tr)

const headerCell2 = document.createElement('th'); // Új fejléc cella (th) létrehozása
headerCell2.innerHTML = headerObj.field2; // A cella tartalmát beállítjuk a headerObj.field2 értékével
headerRow.appendChild(headerCell2); // A cella hozzáadása a fejlécsorhoz

const headerCell3 = document.createElement('th'); // Új fejléc cella (th) létrehozása
headerCell3.innerHTML = headerObj.field3; // A cella tartalmát beállítjuk a headerObj.field3 értékével
headerCell3.colSpan = 2; // A cella két oszlopot foglal el (colSpan beállítása)
headerRow.appendChild(headerCell3); // A cella hozzáadása a fejlécsorhoz

const tableBody = document.createElement('tbody'); // Táblázat törzs elem (tbody) létrehozása
table.appendChild(tableBody); // A törzs (tbody) hozzáadása a táblázathoz (table)

const row1 = document.createElement('tr'); // Táblázat első sorának (tr) létrehozása
tableBody.appendChild(row1); // Az első sor (tr) hozzáadása a törzshöz (tbody)

const row1Cell1 = document.createElement('td'); // Első cella (td) létrehozása az első sorhoz
row1Cell1.innerHTML = row1Obj.field1; // A cella tartalmát beállítjuk a row1Obj.field1 értékével
row1.appendChild(row1Cell1); // A cella hozzáadása az első sorhoz

const row1Cell2 = document.createElement('td'); // Második cella (td) létrehozása az első sorhoz
row1Cell2.innerHTML = row1Obj.field2; // A cella tartalmát beállítjuk a row1Obj.field2 értékével
row1.appendChild(row1Cell2); // A cella hozzáadása az első sorhoz

const row1Cell3 = document.createElement('td'); // Harmadik cella (td) létrehozása az első sorhoz
row1Cell3.colSpan = 2; // A cella két oszlopot foglal el
row1Cell3.innerHTML = row1Obj.field3; // A cella tartalmát beállítjuk a row1Obj.field3 értékével
row1.appendChild(row1Cell3); // A cella hozzáadása az első sorhoz


const row2 = document.createElement('tr'); // Második sor (tr) létrehozása
tableBody.appendChild(row2); // A második sor hozzáadása a törzshöz

const row2Cell1 = document.createElement('td'); // Első cella létrehozása a második sorhoz
row2Cell1.innerHTML = row2Obj.field1; // A cella tartalmát beállítjuk a row2Obj.field1 értékével
row2.appendChild(row2Cell1); // A cella hozzáadása a második sorhoz

const row2Cell2 = document.createElement('td'); // Második cella létrehozása a második sorhoz
row2Cell2.innerHTML = row2Obj.field2; // A cella tartalmát beállítjuk a row2Obj.field2 értékével
row2.appendChild(row2Cell2); // A cella hozzáadása a második sorhoz

const row2Cell3 = document.createElement('td'); // Harmadik cella létrehozása a második sorhoz
row2Cell3.innerHTML = row2Obj.field3; // A cella tartalmát beállítjuk a row2Obj.field3 értékével
row2.appendChild(row2Cell3); // A cella hozzáadása a második sorhoz

const row2Cell4 = document.createElement('td'); // Negyedik cella létrehozása a második sorhoz
row2Cell4.innerHTML = row2Obj.field4; // A cella tartalmát beállítjuk a row2Obj.field4 értékével
row2.appendChild(row2Cell4); // A cella hozzáadása a második sorhoz


const row3 = document.createElement('tr'); // Harmadik sor létrehozása
tableBody.appendChild(row3); // A harmadik sor hozzáadása a törzshöz

const row3Cell1 = document.createElement('td'); // Első cella létrehozása a harmadik sorhoz
row3Cell1.innerHTML = row3Obj.field1; // A cella tartalmát beállítjuk a row3Obj.field1 értékével
row3.appendChild(row3Cell1); // A cella hozzáadása a harmadik sorhoz

const row3Cell2 = document.createElement('td'); // Második cella létrehozása a harmadik sorhoz
row3Cell2.innerHTML = row3Obj.field2; // A cella tartalmát beállítjuk a row3Obj.field2 értékével
row3.appendChild(row3Cell2); // A cella hozzáadása a harmadik sorhoz

const row3Cell3 = document.createElement('td'); // Harmadik cella létrehozása a harmadik sorhoz
row3Cell3.innerHTML = row3Obj.field3; // A cella tartalmát beállítjuk a row3Obj.field3 értékével
row3.appendChild(row3Cell3); // A cella hozzáadása a harmadik sorhoz

const row3Cell4 = document.createElement('td'); // Negyedik cella létrehozása a harmadik sorhoz
row3Cell4.innerHTML = row3Obj.field4; // A cella tartalmát beállítjuk a row3Obj.field4 értékével
row3.appendChild(row3Cell4); // A cella hozzáadása a harmadik sorhoz


const row4 = document.createElement('tr'); // Negyedik sor létrehozása
tableBody.appendChild(row4); // A negyedik sor hozzáadása a törzshöz

const row4Cell1 = document.createElement('td'); // Első cella létrehozása a negyedik sorhoz
row4Cell1.innerHTML = row4Obj.field1; // A cella tartalmát beállítjuk a row4Obj.field1 értékével
row4.appendChild(row4Cell1); // A cella hozzáadása a negyedik sorhoz

const row4Cell2 = document.createElement('td'); // Második cella létrehozása a negyedik sorhoz
row4Cell2.innerHTML = row4Obj.field2; // A cella tartalmát beállítjuk a row4Obj.field2 értékével
row4.appendChild(row4Cell2); // A cella hozzáadása a negyedik sorhoz

const row4Cell3 = document.createElement('td'); // Harmadik cella létrehozása a negyedik sorhoz
row4Cell3.innerHTML = row4Obj.field3; // A cella tartalmát beállítjuk a row4Obj.field3 értékével
row4.appendChild(row4Cell3); // A cella hozzáadása a negyedik sorhoz

const row4Cell4 = document.createElement('td'); // Negyedik cella létrehozása a negyedik sorhoz
row4Cell4.innerHTML = row4Obj.field4; // A cella tartalmát beállítjuk a row4Obj.field4 értékével
row4.appendChild(row4Cell4); // A cella hozzáadása a negyedik sorhoz