1. Przygotuj plik o rozszerzeniu .js w którym zaimplementujesz zadanie.
2. Przygotuj funkcję o nazwie rakieta, która akceptuje następujące parametry:
   1. rok produkcji -> Number
   2. marka -> String
   3. pojemnosc baku -> Number
   4. ile moze pasazerow moze zabrac na poklad -> Number
   5. tablice pasazerow -> String[]. Tutaj trzeba sprawdzic czy ilosc miejsc zgadza sie z iloscia pasazerow podana.
   6. launch -> Function. Tutaj dodatkowo pole `launch` powinno wypisac w konsoli informacje dotyczace jaka rakieta zostala wystrzelona - "Rakieta firmy MARKA zostala wystrzelona z pasazerami LISTA_PASAZEROW" oraz dodatkowo wywoła na końcu przekazany callback (przez parametr).
3. Wygeneruj kilka obiektów typu rakieta.
4. Uruchom w kazdej z nich funkcję launch z dowolnym callbackiem
5. Zamień jedną z rakiet do JSONA oraz wypisz ją w konsoli.
6. Zamień spowrotem rakiete w postaci JSON do obiektu.