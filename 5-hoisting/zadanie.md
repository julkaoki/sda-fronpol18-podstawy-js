## Przestudiuj następujące przyklady i odpowiedz na pytania. Nie uruchamiaj kodu w interpeterze/przegladarce.

1. Co się stanie po uruchomieniu funkcji `example()`?
```
function example() {
  console.log(notDefined);
}
```
2. Co zostanie wypisane w konsoli? Dlaczego?
```
function example() {
  console.log(declaredButNotAssigned);
  var declaredButNotAssigned = true;
}
```
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
```
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
```
5. Co zostanie wypisane w konsoli? Dlaczego?
   Co się stanie w momencie wywołania funkcji `named()`? Dlaczego?
```
function example() {
  console.log(named); // => undefined

  named(); // => TypeError named is not a function

  var named = function named() {
    console.log('named');
  }
}
```