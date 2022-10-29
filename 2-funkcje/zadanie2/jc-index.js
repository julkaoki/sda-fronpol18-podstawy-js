// 2.2

let upperCase = function(text) {console.log(text.toUpperCase())};

upperCase("małe literki");
upperCase("trochę tekstu");
upperCase("test test");

// 2.3

let backwards = function(text) {
    let splitString = text.split("");
    // console.log(splitString);
    let reverseArray = splitString.reverse();
    // console.log(reverseArray);
    let joinArray = reverseArray.join("");
    console.log(joinArray);
};

backwards("gremlin");
backwards("henrietta");
backwards("igraszka");

// 2.4

let splitString = function(text) {
        let splitString = text.split("");
        console.log(splitString);
};

splitString("koperek");
splitString("gąsienica");
splitString("krawężnik");

// testowy callback
/*
function testCallback() {
    alert("Hello from callback!");
}

function callMe(callback) {
    if (typeof callback !== 'function') {
        callback = false;
    }
    if (callback) {
        callback();
    }
};

callMe(testCallback);
*/

// 2.5

function toUpperWithCallback (str, callback) {
    let result = str.toUpperCase();
    if (callback) {
        callback(result);
    } else {
        console.log(result);
    }
}

function reverseStringWithCallback (str, callback) {
    let result = str.split("").reverse().join("");
    if (callback) {
        callback(result);
    } else {
        console.log(result);
    }
}

function callbackPrint (input) {
    console.log(input);
}

toUpperWithCallback("recydywista", callbackPrint);
toUpperWithCallback("słowiańskość");
reverseStringWithCallback("recydywista", callbackPrint);
reverseStringWithCallback("franczyzobiorca", toUpperWithCallback);
