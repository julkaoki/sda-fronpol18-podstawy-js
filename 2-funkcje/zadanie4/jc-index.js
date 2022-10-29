// 4.2
let numberArray = [2, 4, 5, 68, 46, 8, 6, 90, 44, 100];

// 4.3
let stringArray = ["adamaszek", "bawełna", "cekiny", "denim", "elastan", "fausz", "gabardyna", "hit", "inlet", "juta"];

// 4.4
let moreThan50 = function(value) {
    return value > 50;
}
console.log(numberArray.some(moreThan50));
console.log(numberArray.filter(moreThan50));

// 4.5
let hasLetterK = function(str) {
    return str.toLowerCase().includes("k")
};

console.log(stringArray.filter(hasLetterK));

// bonus - wykorzystanie callback 

function printToConsole (print) {
    console.log(print);
};

function moreThanFifty (value) {
    return value > 50;
}

function findWordsWithLetterK (arr) {
    return arr.toLowerCase().includes("k")
}

function filterArray (arr, callback) {
    let result = arr.filter(callback);
    printToConsole(result);
}

filterArray(stringArray, findWordsWithLetterK);
filterArray(numberArray, moreThan50);