// (2)
var a = 1;
var b = 5;
// (3)
if (a > b) {
    alert('A jest większe od B');
}
// (4)
var c, d;
c = "Alicja";
d = "Krystyna";
// (5)
if (c.length > d.length) {
    alert(c);
} else {
    alert(d);
}
// (6)
var e = 0;
var f = (e) ? 'prawda' : 'falsz';
// powyzsze to skrot tego:
// var f = e == true ? true : false
console.log('Czy E jest prawdziwe?', f);
/*
    np. mozna napisac var e = 0;
    To spowoduje, ze bedzie taki kod:
    var f = (0) ? 'prawda' : 'falsz';
    w tym przypadku jezyk zdecyduje, ze 0 jest falszywe.
    Liczby rozne od 0 sa zmieniane na wartosc true
*/

// (7)
var g = 2;
var wynik;
switch (g) {
    case 0:
        console.log('Zero');
        break;
    case 1:
        console.log('Jeden');
        break;
    case 2:
        console.log('Dwa');
        break;
    case 3:
        console.log('Trzy');
        break;
    case 4:
        console.log('Cztery');
        break;
    case 5:
        console.log('Piec');
        break;
    case 6:
        console.log('Szesc');
        break;
    case 7:
        console.log('Siedem');
        break;
    case 8:
        console.log('Osiem');
        break;
    case 9:
        console.log('Dziewiec');
        break;
    case 10:
        console.log('Dziesiec');
        break;
    default:
        console.log('Nie znana liczba');
        break;
}

// (8)
if (g === 0) {
    console.log('Zero');
} else if (g === 1) {
    console.log('Jeden');
} else if (g === 2) {
    console.log('Dwa');
} else if (g === 3) {
    console.log('Trzy');
} else if (g === 4) {
    console.log('Cztery');
} else if (g === 5) {
    console.log('Piec');
} else if (g === 6) {
    console.log('Szesc');
} else if (g === 7) {
    console.log('Siedem');
} else if (g === 8) {
    console.log('Osiem');
} else if (g === 9) {
    console.log('Dziewiec');
} else if (g === 10) {
    console.log('Dziesiec');
} else {
    console.log('Liczba nieznana');
}