1. Uzywając funkcji `fetch` przygotuj 2 funkcje:
   1. fetchDataWithAwait:
      1. Funkcja pobiera z adresu URL zasób i oczekuje az zostanie zwrócony.
      2. Następnie funkcja zamienia odpowiedź na JSON i równiez oczekuje az ta operacja sie wykona.
      3. Jako wynik funkcji zwroc odpowiedz w postaci obiektu zamieniajac JSONA na obiekt.
   2. fetchDataWithoutAwait:
      1. Funkcja pobiera z adresu URL zasób.
      2. Nastepnie, kiedy ten zasob zostanie pobrany przeksztalc go do postaci JSON.
      3. Na samym koncu zamien odpowiedz na obiekt i zwroc go.
2. URL do pobrania zasobu: https://jsonplaceholder.typicode.com/todos/1
3. Uzyj konstrukcji `async/await` w zadaniach.
4. Wywolaj funkcje (1.1) oraz (1.2) w ciele funkcji `init`.
5. Odpowiedz na pytanie:
   1. Do czego sluzy mechanizm `await`?
6. Przygotuj obsluge wyniku zwroconego przez funkcje (1.1) oraz (1.2). (wskazowka w (1.1) bedzie to po prostu przypisanie a w (1.2) trzeba skorzystac z `.then()`).

Informacje dotyczace funkcji fetch
https://developer.mozilla.org/en-US/docs/Web/API/fetch

Inspiracja z E-podrecznika:
https://frontend-bootcamp.pl.sdacademy.pro/e-podrecznik/javascript_podstawy/asynchronicznosc/#async-await

MDN odnosnie async/await:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

Ad. (1)
1. Wykonaj zapytanie do zasobu za pomoca funkcji fetch. 
2. Poczekaj az Promesa sie wykona
3. Wywolaj metode .json() na zwroconym obiekcie.
4. Poczekaj az Promesa sie wykona
5. Zwroc otrzymany wynik z ostatniej promesy.

Ad. (2)
Opakowac w funkcje i w poprawny sposob zwrocic.
Przykladowy fetch (pobieranie zasobu):
fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then((response) => response.json())
   .then((json) => console.log(json));