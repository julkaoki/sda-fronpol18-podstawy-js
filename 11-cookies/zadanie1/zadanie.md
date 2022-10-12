1. Przygotuj klase Cookie, ktora bedzie miala nastepujace wymagania:
   1. W construktorze sprawdz czy cookiesy sa dostepne. Jezeli nie sa to rzuc wyjatek z odpowiednim opisem.
   2. Zaimplementuj metode get, ktora pobierze i zwroci wartosc z dowolnego klucza podanego w parametrze. Jezeli nie bedzie wartosci zwroc null.
   3. Zaimplementuj metode set, ktora zapisze pod danym kluczem dana wartosc zamieniana do postaci string. Dodatkowo funkcja powinna ustawic wartosc Secure. Ustaw czas zycia kazdego cookie na 24 godziny.
   4. Zaimplementuj metode, ktora przekonwertuje wszystkie ciasteczka w obiekt i go zwroci.

// Sprawdzenie czy cookie sa dostepne:
navigator.cookieEnabled;

cookieEnabled = true => cookiesy sa dostepne
cookieEnabled = false => cookiesy nie sa dostepne