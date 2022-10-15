// 1
const array = [1, 2];

// 2
const [first, second] = array;

// 3
const longerArray = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
];

// 4
const [anotherFirst, ...rest] = longerArray;

// 5
const myObject = {
    imie: 'Karol',
    wiek: 18,
    adres: {
        ulica: 'Kowalska',
        miasto: 'Warszawa'
    }
};

// 6
const { imie, wiek, adres } = myObject;
// 7
const { adres: { miasto } } = myObject;