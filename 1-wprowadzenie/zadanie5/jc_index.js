// 5.2
/*
function uwaga () {
    alert("UWAGA!");
}

uwaga();

// 5.3

function dodaj (a, b) {
    var addition = a + b;
    return console.log(addition);
    // lub console.log(a + b);
}

dodaj(3, 5);
dodaj(23.567, 45.76);
dodaj(-7, 0);
dodaj(10000, 5467854);

// 5.4

for (let i = 0; i < 10; i++) {
    dodaj(i, i + 1);
}

// 5.5

let i = 0
while (i < 10) {
    uwaga();
    i++;
    if (i == 5) {
        break;
    }
} 

// 5.6

for (let i = 0; i <= 100; i++) {
    if( i % 2 == 0) {
        console.log(i);
    }
}


*/
// 5.7

var twoDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

for (var x = 0; x < twoDimArray.lenght; x++) {
    for (var y = 0; y < twoDimArray[x].lenght; y++) {
        console.log("wartość tablicy dwuwymiarowej to x: " + x + " y: " + y);
    }
}

// ta część kodu nie chce zadziałać 


// 5.8

var testArray = [];

testArray.push(1, 2, 3, 4, 55, 746, 84, 111, 47);
console.log(testArray);

testArray.pop();
testArray.pop();
console.log(testArray);

console.log(testArray.length);

console.log(testArray.indexOf(84));

//console.log(testArray.indexOf(1) !== -1); // dlaczego musi się znaleźć ten zapis?
//console.log(testArray.find(function(element) { return element === 84 }));

console.log(testArray.reverse());
console.log(testArray.sort());

// 5.9

var osoba = {
    name: "Julia",
    surname: "Czapiewska",
    age: 28,
    birthDate: "15/07/1994",
    scream: function() {
        alert("KRZYCZE!");
    },
    numbers: [3, 4, 16, 32]
};

console.log(osoba.name);
console.log(osoba["surname"]);
console.log(osoba.scream());
console.log(osoba.numbers);
osoba.numbers.push(48, 35);
console.log(osoba.numbers);
osoba.numbers.sort();
console.log(osoba.numbers);