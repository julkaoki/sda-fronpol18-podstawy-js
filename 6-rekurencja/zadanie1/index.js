//2
// iteracja
const iteration = (n) => {
    for (let i = n; i >= 0; i--) {
        console.log(i);
    }
}
// rekurencja
const recursive = (n) => {
    if (n >= 0) {
        console.log(n);
        recursive(n - 1);
    }
}

console.log('Iteration');
iteration(20);
console.log('Recursive');
recursive(20);

// 3

// iteracja
const iterationTwo = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
// rekursja
const recursiveTwo = (n) => {
    if (n !== 0) {
        return n + recursiveTwo(n - 1);
    } else {
        return 0;
    }
}

console.log('Iteration sum');
console.log(iterationTwo(5));
console.log('Recursive sum');
console.log(recursiveTwo(5));