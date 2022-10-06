// (2) 
var liczby = [
    1,
    50,
    99,
    321,
    1000,
    9900,
    12,
    14,
    99,
    50
];

// (3)
var slowa = [
    'Ala',
    'Krzysiek',
    'Pamela',
    'Bartosz',
    'Oliwia',
    'Tomasz',
    'Katarzyna',
    'Pamela',
    'Oliwier',
    'Karolina'
];

// (4)
var isOverFifty = function (value) {
    return value > 50;
}

console.log(
    'Czy w tablicy jest jakas wartosc wieksza niz 50?',
     liczby.some(isOverFifty)
);
/* 
W naszym przypadku nastepuje krok po kroku:
    1. Iterujemy po elementach tabilicy liczby
    2. Nastepnie dla kazdego elementu jest uruchamiana funkcja isOverFifty, która jako parametr uzyskuje aktualny element po ktorym jest iterowany
    3. Jezeli wynik tej funkcji to prawda -> zwroc prawde. Jezeli nie to kontynuuj az do kolejnej wartosci prawdziwej lub skonczy sie tablica.

    // Przykladowa implementacja funkcji some
    function some(tablica, callback) {
        var znaleziony = false;

        for(var element of tablica) {
            var wynikCallbacku = callback(element);

            if (wynikCallbacku) {
                znaleziony = true;
                break;
            }
        }
        return znaleziony;
    }
*/

// (5)
var hasKLetter = function(text) {
    // Pierwsza implementacja np.
    // if (text.indexof('k') !== -1) {
    //     return true;
    // } else {
    //     return false;
    // }
    return text.toLowerCase().includes('k');
}

console.log(slowa.filter(hasKLetter));

/*
W naszym przypadku następuje krok po kroku:
    1. Iterujemy po elementach tablicy slowa
    2. Nastepnie dla kazdego elementu jest uruchamiana funkcja hasKLetter, która jako parametr uzyskuje aktualny element po ktorym jest iterowany
    3. Jezeli warunek jest spelniony to wtedy ten element jest dodawany do tablicy, ktora po calej iteracji po wszystkich elementach tablicy slowa zwroci nowa tablice z elementami ktore spelniaja warunek zapisany w naszej funkcji.

    // Przykladowa implementacja metody filter

    function filter(tablica, callback) {
        var nowaTablica = [];

        for(var element of tablica) {
            var czySpelniaWarnuek = callback(element);

            if (czySpelniaWarnuek) {
                nowaTablica.push(element)
            }
        }

        return nowaTablica;
    }
*/