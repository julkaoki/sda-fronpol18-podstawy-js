// 4.2

var a = 1;
var b = 5;

// 4.3

if (a < b) {
    alert("wartość " + a + " jest większa od " + b);
}

// 4.4

var c = "Alicja";
var d = "Krystyna";

// 4.5

if ( c.length > d.length ) {
    alert(c + " ma więcej liter");
} else {
    alert(d);
}

// 4.6

var e = 0; // 0 = false
var f = (e) ? "prawda" : "fałsz";
console.log("wartość e jest równa: " + f);

// 4.7

var g = 7;

switch (g) {
    case 0: 
    console.log("zero");
    break;
    case 1: 
    console.log("jeden");
    break;
    case 2: 
    console.log("dwa");
    break;
    case 3: 
    console.log("trzy");
    break;
    case 4: 
    console.log("cztery");
    break;
    case 5: 
    console.log("pięć");
    break;
    case 6: 
    console.log("sześć");
    break;
    case 7: 
    console.log("siedem");
    break;
    case 8: 
    console.log("osiem");
    break;
    case 9: 
    console.log("dziewięć");
    break;
    case 10: 
    console.log("dziesięć");
    break;
    default :
    console.log("wartość poza skalą");
}

// 4.8

if (g == 0) {
    console.log("zero");
} else if (g == 1) {
    console.log("jeden");
} else if (g == 2) {
    console.log("dwa");
} else if (g == 3) {
    console.log("trzy");
} else if (g == 4) {
    console.log("cztery");
} else if (g == 5) {
    console.log("pięć");
} else if (g == 6) {
    console.log("sześć");
} else if (g == 7) {
    console.log("siedem");
} else if (g == 8) {
    console.log("osiem");
} else if (g == 9) {
    console.log("dziewięć");
} else if (g == 10) {
    console.log("dziesięć");
} else {
    console.log("wartość poza skalą");
}