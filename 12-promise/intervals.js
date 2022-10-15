const myInterval = setInterval(() => {
    console.log('Czesc');
}, 1000);

setTimeout(() => clearInterval(myInterval), 3000);