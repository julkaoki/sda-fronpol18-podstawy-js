## Przestudiuj następujące przyklady i odpowiedz na pytania. Nie uruchamiaj kodu w interpeterze/przegladarce.

1. Co się stanie po uruchomieniu funkcji `example()`?
```
function example() {
  console.log(notDefined);
}
```
Zostanie rzucony wyjatek, ze notDefined nie jest zdefiniowane.
2. Co zostanie wypisane w konsoli? Dlaczego?
```
function example() {
  console.log(declaredButNotAssigned);
  var declaredButNotAssigned = true;
}
example();
```
Zostanie wypisane undefined, poniewaz zadziala hoisting dla zmiennych zadeklarowanych przy pomocy VAR.
3. Co zostanie wypisane w konsoli? Dlaczego?
   Co się stanie w momencie wywołania funkcji `anonymous()`? Dlaczego?
```
function example() {
  console.log(anonymous);

  anonymous();

  var anonymous = function() {
    console.log('anonymous function expression');
  };
}
example();
```
Wypisane zostanie undefined poniewaz zadzieje sie hoisting zmiennej anonymous.
W linijce 25 zostanie rzucony wyjatek, ze anonymous nie jest funkcja.
4. Co zostanie wypisane w konsoli? Dlaczego?
   Co się stanie w momencie wywołania funkcji `named()`? Dlaczego?
   Co się stanie w momencie wywołania funkcji `superPower()`? Dlaczego?
```
function example() {
  console.log(named);

  named();

  superPower();

  var named = function superPower() {
    console.log('Flying');
  };
}
example();
```
Zostanie wypisane undefined.
W linijce 42 zostanie rzucony wyjatek, ze named nie jest funkcja.
Nie wywola sie funkcja superPower() poniewaz program nie dojdzie do tej instrukcji poniewaz nie jest obsluzony wyjatek.
5. Co zostanie wypisane w konsoli? Dlaczego?
   Co się stanie w momencie wywołania funkcji `named()`? Dlaczego?
```
function example() {
  console.log(named);

  named();

  var named = function named() {
    console.log('named');
  }
}
example();
```
Zostanie wypisane undefined.
W linijce 61 zostanie rzucony wyjatek, ze named nie jest funkcja.