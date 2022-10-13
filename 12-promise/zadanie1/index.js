// (2)
let myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Jakis napis');
    }, 1000 * 10);
});

myPromise.then((napis) => console.log(napis));

// (3)
const generator = (napis) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (napis.length > 5) {
                resolve(napis);
            } else {
                reject('Napis jest za krotki');
            }
        }, 1000 * 5);
    });
};

// (4)
/*
Krocej zapisane:
generator('asdf').then(
    (napis) => console.log(napis),
    (napis) => console.log(napis)
);
*/
generator('asd').then(console.log, console.log);

generator('qwertyuiop').then(console.log, console.log);