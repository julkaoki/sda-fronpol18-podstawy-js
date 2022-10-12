



































const myPromise = (number) => {
    return new Promise((resolve, reject) => {
        if (number === 1) {
            throw number;
        }
        setTimeout(() => {
            if (number % 2 === 0) {
                resolve(number);
            } else if (number === 13) {
                throw number;        
            } else {
                reject(number);
            }
        }, 1000 * 5);
    });
}

myPromise(10)
.then(
    (result) => console.log('Then result', result),
    (rejected) => console.log('Rejected result', rejected)
    )
.catch((error) => console.log('Error catched', error))


myPromise(1)
.then(
    (result) => console.log('Then result', result),
    (rejected) => console.log('Rejected result', rejected)
    )
.catch((error) => console.log('Error catched', error))

myPromise(1)
.then(
    (result) => console.log('Then result', result)
    )
.catch((error) => console.log('Error catched', error))

myPromise(5)
.then(
    (result) => console.log('Then result', result),
    (rejected) => console.log('Rejected result', rejected)
    )
.catch((error) => console.log('Error catched', error))

myPromise(3)
.then(
    (result) => console.log('Then result', result),
    (rejected) => console.log('Rejected result', rejected)
    )
.catch((error) => console.log('Error catched', error))

myPromise(13)
.then(
    (result) => console.log('Then result', result),
    (rejected) => console.log('Rejected result', rejected)
    )
.catch((error) => console.log('Error catched', error))