1. Przygotuj plik o rozszerzeniu .js w którym zaimplementujesz zadanie.
2. Przygotuj funkcję o nazwie rakieta, która akceptuje następujące parametry:
   1. rok produkcji -> Number
   2. marka -> String
   3. pojemnosc baku -> Number
   4. ile moze pasazerow zabrac na poklad -> Number
   5. tablice pasazerow -> String[]. Tutaj trzeba sprawdzic czy ilosc miejsc zgadza sie z iloscia pasazerow podana w (4). // Obsługa błędów w przypadku gdy jest za duzo pasazerow niz jest miejsca rzucic wyjatek z informacja, ze jest za duzo pasazerow.
   6. launch -> Function. Tutaj dodatkowo pole `launch` powinna zwrocic informacje dotyczace jaka rakieta zostala wystrzelona - "Rakieta firmy MARKA zostala wystrzelona z pasazerami LISTA_PASAZEROW" oraz dodatkowo wywoła na końcu przekazany callback (przez parametr o ile zostal przekazany).
3. Wygeneruj kilka obiektów typu rakieta.
4. Uruchom w kazdej z nich funkcję launch z dowolnym callbackiem
5. Zamień jedną z rakiet do JSONA oraz wypisz ją w konsoli.
6. Zamień spowrotem rakiete w postaci JSON do obiektu.
7. Usun z jednej z rakiet pole `launch`; // delete rakieta.manufacturer => spowoduje usuniecie wartosci w polu manufacturer.