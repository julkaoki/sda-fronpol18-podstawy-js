// (2)
var imie = "Bartoszaaaaa";
var nazwisko = "Lasota";

var odp = imie + ' ' + nazwisko;

console.log(odp);

// (3)
var pozycja = imie.indexOf('a');

console.log(pozycja);

// (Bonusowo) Wyszukanie wszystkich wystapien
var licznik = 0;

for(var literka of imie) {
    if (literka === 'a') {
        licznik++;
    }
}

console.log('Ilosc wystapien', licznik);

// (4)
console.log('Dlugosc nazwiska wynosi', nazwisko.length);

// (5)
console.log('Pierwsze 3 litery imienia to:', imie.slice(0, 3));
// Tez poprawne rozwiązanie
console.log(imie.substring(0, 3));