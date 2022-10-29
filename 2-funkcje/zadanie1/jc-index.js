// 2.2

let add = function(val1, val2) {return val1 + val2};
let substract = function(val1, val2) {return val1 - val2};
let multiply = function(val1, val2) {return val1 * val2};

console.log(add(3, 5));
console.log(add(45, -5));
console.log(add(6, 8));

console.log(substract(60, 8));
console.log(substract(-4, -5));
console.log(substract(4.678, 4.34).toFixed(2));

console.log(multiply(3, 6));
console.log(multiply(2, 2));
console.log(multiply(5, 0));

// 2.3 

let a = "odejmij";

switch (a) {
    case "dodaj":
        console.log(add(1, 2));
        break;
    case "odejmij":
        console.log(substract(3, 4));
        break;
    case "pomnóż":
        console.log(multiply(5, 6));
        break;
    default:
        console.log("działanie innego typu");
}