// 2
const multiply = (a, b) => a * b;
// 3
const isLower = (wiek, minimalnyWiek = 18) => {
    return wiek < minimalnyWiek;
}
// 4
const array = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17'
];

const findInArray = (element) => {
    return element === '15';
}

console.log(array.find(findInArray));

// 5
const potrawa = 'Lasagne';
const kcal = 1200;
const waga = 100;

// 6
const napis = potrawa + ' o wadze ' + waga + ' srednio posiada ' + kcal;

// 7
const napis2 = `${potrawa} o wadze ${waga} srednio posiada ${kcal}`;