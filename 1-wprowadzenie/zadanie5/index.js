// (2)
function uwaga() {
    alert('UWAGA!');
}

// uwaga();

// (3)
function dodaj(liczba1, liczba2) {
    return liczba1 + liczba2;
}

console.log(dodaj(1, 5));
console.log(dodaj(55.123, 33.333));

// (4)
for(var i = 0; i < 10; i++) {
    // var wynik = dodaj(i, i + 1);
    // console.log(wynik);
    console.log(dodaj(i, i + 1));
}

// (5)
var iterator = 0;
while (iterator < 10) {
    if(iterator === 5) {
        break;
    }
    // uwaga();
    iterator++;
}

// (6)
// V1
for (var i = 0; i < 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// V2
for (var i = 0; i < 100; i += 2) {
    console.log(i);
}

// (7)
var tablica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
// Petla zewnetrzna, ktora iteruje po elementach zmiennej tablica
// i = 0 => mamy dostep do [1, 2, 3] (tablica[0])
// i = 1 => mamy dostep do [4, 5, 6] (tablica[1])
// i = 2 => mamy dostep do [7, 8, 9] (tablica[2])
// i = 3 => mamy dostep do [10, 11, 12] (tablica [3])
for (var i = 0; i < tablica.length; i++) {
    // Petla wewnetrzna, ktora iteruje juz po wewnetrznych tablicach w zaleznosci od i
    // dla i = 0 mamy tablice [1, 2, 3]
    // dla j = 0 mamy element w tablicy tablica[i][0] -> 1
    // dla j = 1 mamy element w tablicy tablica[i][1] -> 2
    // dla j = 2 mamy element w tablicy tabllica[i][2] -> 3
    // dla i = 1 mamy tablice [4, 5, 6]
    // dla j = 0 mamy element w tablicy tablica[i][0] -> 4
    // dla j = 1 mamy element w tablicy tablica[i][1] -> 5
    // dla j = 2 mamy element w tablicy tablica[i][2] -> 6
    // dla i = 2 mamy tablice [7, 8, 9]
    // dla j = 0 mamy element w tablicy tablica[i][0] -> 7
    // dla j = 1 mamy element w tablicy tablica[i][1] -> 8
    // dla j = 2 mamy element w tablicy tablica[i][2] -> 9
    // dla i = 3 mamy tablice [10, 11, 12]
    // dla j = 0 mamy element w tablicy tablica[i][0] -> 10
    // dla j = 1 mamy element w tablicy tablica[i][1] -> 11
    // dla j = 2 mamy element w tablicy tablica[i][2] -> 12
    for (var j = 0; j < tablica[i].length; j++) {
        console.log('Liczba na pozycji' + i + ' ' + j + 'to' + tablica[i][j]);
    }
}

var tablica3d = [
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ],
    [
        [13, 14, 15],
        [16, 17, 18],
        [19, 20, 21],
        [22, 23, 24]
    ]
];

// (8)
var pustaTablica = [];
pustaTablica.push(1);
pustaTablica.push(111);
pustaTablica.push(555);
pustaTablica.push(11111);
pustaTablica.push(333333);
// lub pustaTablica.push(1, 2, 3, 4, 5);
pustaTablica.pop();
pustaTablica.pop();

console.log(pustaTablica.length);

console.log(pustaTablica.indexOf(1) !== -1); // dlaczego musi się znaleźć ten zapis?
console.log(pustaTablica.find(function(element) { return element === 1 }));

console.log(pustaTablica.indexOf(1));

console.log(pustaTablica.reverse());

console.log(pustaTablica.sort());

// (9)
var obiekt = {
    imie: 'Bartek',
    nazwisko: 'Lasota',
    wiek: 18,
    dataUrodzenia: '01/12/1990', // lub uzyc obiektu Date
    krzyk: function() {
        alert('KRZYCZE!');
    },
    liczby: [1, 2, 3, 4, 5]
};

console.log(obiekt.imie);
console.log(obiekt['nazwisko']);
console.log(obiekt.krzyk());
console.log(obiekt.liczby);

console.log(obiekt);





