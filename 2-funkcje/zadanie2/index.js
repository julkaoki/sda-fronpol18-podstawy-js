// (2)
var toUpper = function (text) {
    return text.toUpperCase();
}

console.log(toUpper('text'));

// (3)
var reverseText = function (text) {
    return Array.from(text).reverse().join('');
}

console.log(reverseText('Ala ma kota'));

// (4)
var writeToConsole = function (text) {
    console.log(text);
}

writeToConsole('Jakis test');

// (5)
var toUpperWithCallback = function (text, callback) {
    var result = text.toUpperCase();

    if (callback) {
        return callback(result);
    }

    return result;
}

var reverseTextWithCallback = function (text, callback) {
    var result = Array.from(text).reverse().join('');

    if (callback) {
        return callback(result);
    }

    return result;
}

// (6)
// to jest bledne
// toUpperWithCallback('Ala ma kota', writeToConsole());
// dlaczego?
// poniewaz nie przekazuje funkcji tylko jej WYNIK!!
toUpperWithCallback('Ala ma kota', writeToConsole);


// ===============Krok po kroku co tutaj sie wykonuje i dzieje===============

/*

var toUpperWithCallback = function (text, callback) {
    var result = text.toUpperCase();

    if (callback) {
        // w naszym przypadku zapis ponizej odpowiada writeToConsole(result);
        return callback(result);
    }

    return result;
}

var writeToConsole = function (text) {
    console.log(text);
}

1. Wywolanie funkcji toUpperWithCallback z arugmentami:
    'Ala ma kota' jako tekst,
    writeToConsole jako funkcja (wskaznik na funkcje).
    toUpperWithCallback('Ala ma kota', writeToConsole);
2. W ciele funkcji toUpperWithCallback najpierw "przygotowywujemy" rozwiązanie tzn. zamiana tekstu na ciąg znaków zapisany duzymi literami.
3. W linicje 58 następuje sprawdzenie, czy callback (funkcja) została przekazana jako argument.
    3a. Jezeli ta funkcja zostala przekazana, zwróc wywołanie tej funkcji z wynikiem obliczeń jaki został przygotowany w zmiennej result.
        a) W tym momencie przechodzimy do funkcji writeToConsole i otrzymuje ona parametr czyli napis jaki zostal przygotowany w funkcji toUpperWithCallback.
        b) W linice 66 następuje wypisanie przekazanego tekstu do konsoli.
    3b. Jezeli ta funckja nie zostala przekazana, zwróc wynik obliczeń przygotowany w zmiennej result.
*/

//===============

// to jest bledne
// reverseTextWithCallback('Ala ma kota', writeToConsole());
// => po obliczeniu wyniku funkcji writeToConsole()
// reverseTextWithCallback('Ala ma kota', undefined);
// dlaczego?
// poniewaz nie przekazuje funkcji tylko jej WYNIK!!
reverseTextWithCallback('Ala ma kota', writeToConsole);
/*
    reverseTextWithCallback('Ala ma kota', function(text) { console.log(text)} );
*/


// Bonus
reverseTextWithCallback('Ala ma kota', function (text) {
    return toUpperWithCallback(text, writeToConsole);
});

