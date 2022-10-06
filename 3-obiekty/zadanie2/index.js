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
rocket1.launch(printToConsole);