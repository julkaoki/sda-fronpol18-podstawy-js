## Przestudiuj następujące przyklady i odpowiedz na pytania. Nie uruchamiaj kodu w interpeterze/przegladarce. Jezeli kod spowoduje blad, zaproponuj zmiane ktora spowoduje, ze kod zadziala.

1. Co sie stanie po wykonaniu ponizszego kodu?
```
item = "test";
console.log(item);
var item;
```
Zozstanie wypisany ciag znakow "test";
2. Co sie stanie po wykonaniu ponizszgo kodu?
```
console.log(item);
item = "test";
var item;
```
Zostanie wypisane undefined. Poniewaz hositing wyniosl deklaracje zmiennej a nie przypisanie.
3. Co sie stanie po wykonaniu ponizszego kodu?
```
item = "test";
console.log(item);
let item;
```
Zostanie rzucony wyjatek, poniewaz zmienna item nie jest widoczna. Zmienne let nie podlegaja hoistingowi.
4. Co sie stanie po wykonaniu ponizszego kodu?
```
console.log(item);
let item = "test";
```
Zostanie rzucony wyjatek, poniewaz zmienna item nie jest widoczna. Zmienne let nie podlegaja hoistingowi.
5. Co sie stanie po wykonaniu ponizszego kodu?
```
const item = "test";
item = "zmiana";
```
Zostanie rzucony wyjatek, poniewaz probujemy przypisac nowa wartosc do zmiennej const.
6. Co sie stanie po wykonaniu ponizszego kodu?
```
let item = "test";
item = 5;
```
Zostanie przypisana wartosc 5 do zmiennej item.
7. Co sie stanie po wykonaniu ponizszego kodu?
```
myFunc(2, 3);
function myFunc(a, b){
    console.log(a + b);
}
```
Zostanie wypisane 5.
8. Co sie stanie po wykonaniu ponizszego kodu?
```
myFunc(2, 3);
var myFunc = function(a, b){
    console.log(a + b);
}
W tym przypadku zostanie rzucony wyjatek, poniewaz anonimowe funkcje nie podelagaja hoistingowi (ale zmienna juz tak - myFunc jest undefined).
```
9. Co zostanie wyświetlone po wykonaniu ponizszego kodu?
```
let array = [1, 2, 3, 4];
let variable = "var";
function change(array, variable) {
    array[0] = 9;
    variable = "const";
    console.log(array);
    console.log(variable);
}
change(array, variable);
console.log(array);
console.log(variable);
Najpierw wypisanie tablicy -> [9, 2, 3, 4];
Wypisanie "const";
Wypisanie tablicy -> [9, 2, 3, 4];
Wypisanie "var";
```
10.  (Bonus) Co sie stanie po wykonaniu ponizszego kodu?
```
console.log("b" + "a" + +"a" + "a");
```
BaNaNa