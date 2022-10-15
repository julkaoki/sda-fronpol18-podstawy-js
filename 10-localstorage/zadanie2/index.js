// 1
const isLocalStorageEnabled = () => {
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

// 3
if (isLocalStorageEnabled()) {
    const username = localStorage.getItem('username');
    if (username) {
        console.log('Znaleziono username', username);
    } else {
    // 1.1
    localStorage.setItem('username', 'Karol');
    // 1.2
    console.log(localStorage.getItem('username'));
    // 1.3
    localStorage.setItem('deleteMe', 20);
    // 1.4
    console.log(typeof localStorage.getItem('deleteMe'));
    // 1.5
    localStorage.removeItem('deleteMe');
    }
}