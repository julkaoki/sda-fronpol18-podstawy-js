setTimeout(() => {
    document.getElementById('test').addEventListener('click', () => {
        while(true) {
            console.log('test');
        }
    });
}, 2000);