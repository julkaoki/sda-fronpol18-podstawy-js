var zmienna = {
    pole1: 'test',
    pole2: 'test2'
};

// (2)
function rocket(
    yearOfProduction,
    manufacturer,
    tankCap,
    maxNumberOfPassengers,
    passengers
) {
    // this w tym kontekscie oznacza obiekt, ktory ma zostac stworzony
    // (2.1)
    this.yearOfProduction = yearOfProduction;
    // (2.2)
    this.manufacturer = manufacturer;
    // (2.3)
    this.tankCap = tankCap;
    // (2.4)
    this.maxNumberOfPassengers = maxNumberOfPassengers;
    // (2.5)
    if (maxNumberOfPassengers < passengers.length) {
        throw 'Ilosc pasazerow nie zmiesci sie do rakiety!';
    }
    this.passengers = passengers;
    // (2.6)
    this.launch = function (callback) {
        // var result = "Rakieta firmy" + " " + this.manufacturer + ""....
        var result = `Rakieta firmy ${this.manufacturer} zostala wystrzelona z pasazerami ${this.passengers.join(',')}!`;

        if (callback) {
            return callback(result);
        }

        return result;
   }
}

var printToConsole = function(text) {
    console.log(text);
}

// (3)
// Przyklad bez wyjatku
var rocket1 = new rocket(
    2000,
    'NASA',
    20000,
    5,
    ['Bartek', 'Karolina', 'Krzysiek']
);

console.log(rocket1);
console.log(rocket1.manufacturer);
// ==============================
// (4)
rocket1.launch(printToConsole);

// Przyklad z wyjatkiem i obsluga go
try {
    var rocket2 = new rocket(
        2022,
        'SPACEX',
        20000,
        1,
        ['Elon Musk', 'Krzysztof Krawczyk']
    );
    // To sie nie wyświetli poniewaz będzie wyjątek i interpreter nie wykona tego kodu z powodu wystapienia bledu.
    console.log(rocket2);
    console.log('Nie wypisze mi sie ten tekst');
} catch (e) {
    console.log('Ups, mam jakiś błąd', e);
    console.log('Ale obsłuzyłem go i program dalej działa');
} finally {
    console.log('Wykonam sie w momencie wystapienia wyjatku jak i powodzenia');
}

console.log('To juz mi sie wyświetli');

// (5)
var stringRocket1 = JSON.stringify(rocket1);
console.log(stringRocket1);

// (6)
var restoredRocket1 = JSON.parse(stringRocket1);

console.log('Odnowiona rakieta', restoredRocket1);
// Niestety, JSON.stringify pomija pola, które są funkcjami :(
// console.log(restoredRocket1.launch()); -> rzuci wyjątek

// (7)
// Instrukcja delete pozwala na usuniecie pola z obiektu
delete restoredRocket1.manufacturer;

console.log('Po usunieciu', restoredRocket1);

delete restoredRocket1;

// Ale juz nie pozwala na usuniecie calego obiektu
console.log('Rakieta usunieta?', restoredRocket1);

