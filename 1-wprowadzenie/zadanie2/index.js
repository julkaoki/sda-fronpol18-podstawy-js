// (2.1)
var first = true;
// (2.2)
var second = 65.123;
// (2.3)
var third = 'Zmienna 3';
// (2.4)
var fourth = null;
// (2.5)
var fifth = undefined;
// (2.6)
var sixth = NaN;
// (2.7)
var seventh = ['Pierwszy', 'Drugi', 'Trzeci'];
// (2.8)
var eigth = {
    name: 'Bartek',
    age: 18
};

// Bonus: przy uzyciu operatora typeof sprawdzenie typu czy sie zgadza
console.log(typeof first === 'boolean');
console.log(typeof second === 'number');
console.log(typeof third === 'string');
console.log(typeof fourth === 'object'); // Mozna powiedziec ze to blad wynikajacy z pierwszych specyfikacji JS -> https://developer.mozilla.org/en-US/docs/Glossary/Null
console.log(typeof fifth === 'undefined');
console.log(typeof sixth === 'number'); // NaN jest de fakto typem Number
console.log(Array.isArray(seventh)); // Array to object dlatego zaleca sie w tym przypadku skorzystanie z metody Array.isArray() aby sprawdzic czy jest to tablica
console.log(typeof eigth === 'object');