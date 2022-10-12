class Cookie {
    // (1)
    constructor() {
        // navigator.cookieEnabled === false
        if (!navigator.cookieEnabled) {
            throw new Error('Cookies are not enabled');
        }
    }
    // (2)
    get(key) {
        // pobranie wszystkich ciasteczek
        const allCookies = document.cookie.split('; ');
        // znalezenie ciasteczka, ktore zawiera klucz podany z parametru
        const foundCookie = allCookies.find((rawCookie) => rawCookie.includes(`${key}=`));

        // jezeli jest ciasteczko to zwroc wartosc ciasteczka
        if (foundCookie) {
            return foundCookie.split('=')[1]
        } else {
            return null;
        }
    }

    //(3)
    set(key, value) {
        // Przygotowanie ciasteczka zgodnie z wytycznymi z dokumentacji oraz zadania
        // zapis 60 * 60 * 24 = 24 godziny (60 s * 60 min * 24h)
        const newCookie = `${key}=${JSON.stringify(value)}; Secure; max-age=${60 * 60 * 24}`;
        // zapisanie nowego ciasteczka
        document.cookie = newCookie;
        //zwrocenie ciasteczka jako wynik tej metody
        return newCookie;
    }

    //4
    getAll() {
        // pobranie wszystkich ciasteczek i rozbicie ich na tablice pojedynczych ciasteczek
        const allCookies = document.cookie.split('; ');
        // metoda reduce powoduje zamiane tablicy na obiekt

        const obj = {};
        for(const element of allCookies) {
            const [ key, value ] = element.split('=');
            // obj['test'] = 'wartosc'
            // obj.test = 'wartosc'
            obj[key] = value;
        }
        return obj;
        

        // return allCookies.reduce((prev, currentCookie) => {
        //     // destukturyzacia ciasteczka -> klucz=wartosc => klucz i wartosc
        //     const [ key, value ] = currentCookie.split('=');
        //     // przypisanie do obiektu pod klucz key wartosc ciasteczka
        //     prev[key] = value;
        //     // zwrocenie obiektu aby iterowac po nim dalej
        //     return prev;
        // }, {});
    }
}

try {
    const cookie = new Cookie();
    console.log(cookie.get('test'));
    console.log(cookie.get('asdf'));
    console.log(cookie.set('dzialam', { obiekt: 'czesc' }));
    console.log(cookie.get('dzialam'));
    console.log(cookie.getAll());
} catch (error) {
    console.log(error);
}