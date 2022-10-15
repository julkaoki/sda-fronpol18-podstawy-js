// 2
class Czlowiek {
    // 3
    constructor(imie, nazwisko, wiek) {
        // 4
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }

    // 5
    imieINazwisko() {
        return `${this.imie} ${this.nazwisko}`;
    }

    czyPelnoletni() {
        return this.wiek >= 18;
    }
}

// 7
const czlowiek1 = new Czlowiek('Karol', 'Kowalski', 15);
const czlowiek2 = new Czlowiek('Karolina', 'Kowalska', 22);

console.log(czlowiek1.imieINazwisko());
console.log(czlowiek1.czyPelnoletni());

console.log(czlowiek2.imieINazwisko());
console.log(czlowiek2.czyPelnoletni());