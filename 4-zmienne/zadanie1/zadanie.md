## Przestudiuj następujące przyklady i odpowiedz na pytania. Nie uruchamiaj kodu w interpeterze/przegladarce. Jezeli kod spowoduje blad, zaproponuj zmiane ktora spowoduje, ze kod zadziala.

1. Co sie stanie po wykonaniu ponizszego kodu?
```
item = "test";
console.log(item);
var item;
```
2. Co sie stanie po wykonaniu ponizszgo kodu?
```
console.log(item);
item = "test";
var item;
```
3. Co sie stanie po wykonaniu ponizszego kodu?
```
item = "test";
console.log(item);
let item;
```
4. Co sie stanie po wykonaniu ponizszego kodu?
```
console.log(item);
let item = "test";
```
5. Co sie stanie po wykonaniu ponizszego kodu?
```
const item = "test";
item = "zmiana";
```
6. Co sie stanie po wykonaniu ponizszego kodu?
```
let item = "test";
item = 5;
```
7. Co sie stanie po wykonaniu ponizszego kodu?
```
myFunc(2, 3);
function myFunc(a, b){
    console.log(a + b);
}
```
8. Co sie stanie po wykonaniu ponizszego kodu?
```
myFunc(2, 3);
var myFunc = function(a, b){
    console.log(a + b);
}
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
```
10.  (Bonus) Co sie stanie po wykonaniu ponizszego kodu?
```
console.log("b" + "a" + +"a" + "a")
```