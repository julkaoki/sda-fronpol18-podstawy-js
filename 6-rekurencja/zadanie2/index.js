// 2
const factorial = (n) => {
        if (n == 0) {
            return 1;
        }
        else {
            return n * factorial(n - 1);
        }
}

console.log(factorial(5));
// 3
const gcd = (x, y) => {
    if (y === 0) {
        return x;
    } else {
        return gcd(y, x % y);
    }
}
console.log(gcd(27, 12));
// 4
const arraySum = (array) => {
    if (array.length === 1) {
        return array[0];
    } else {
        return array.pop() + arraySum(array);
    }
}
console.log(arraySum([1, 2, 3, 4, 5]));