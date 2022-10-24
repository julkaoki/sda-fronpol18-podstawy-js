// 3.2
var name = "Julia";
var surname = "Czapiewska";

console.log(name + " " + surname);
//lub
console.log(name, surname);

// 3.3

var checkLetter = name.indexOf("a");
console.log("Literka 'a' w imieniu znajduje się na miejscu: " + checkLetter);

var checkLetter1 = surname.indexOf("a");
console.log("Literka 'a' w nazwisku znajduje się na miejscu: " + checkLetter1);

var allLettersA = [];

for (let i = 0; i < surname.length; i++) {
    if (surname[i] === 'a') {
        allLettersA.push(i);
    }
}

console.log("Literka 'a' w nazwisku znajduje się na miejsach: " + allLettersA[0] + " oraz " + allLettersA[1]);

// 3.4

var surnameLenght = surname.length;
console.log("Długość nazwiska to: " + surnameLenght);

// 3.5

var firstLetters = name.slice(0, 3);
console.log("Pierwsze litery imienia to: " + firstLetters);