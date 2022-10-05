// (2.1)
var dodaj = function (a, b) {
    return a + b;
}

// (2.2)
var odejmij = function (a, b) {
    return a - b;
}

// (2.3)
var pomnoz = function (a, b) {
    return a * b;
}

// (3)
var warunek = "asdasd";

switch (warunek) {
    case "dodaj":
        console.log(dodaj(5, 5));
        break;
    case "odejmij":
        console.log(odejmij(100, 50));
        break;
    case "pomnoz":
        console.log(pomnoz(5, 5));
        break;
    default:
        console.log("Nie znana operacja");
}
