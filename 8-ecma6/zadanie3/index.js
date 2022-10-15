// 1
const arr = [1, 2, 3, 4, 5, 6];

// 2
const obj = { ...arr };

// 3
const func = (a, b, c) => a + b + c;

// 4
const params = [5, 10, 15];
console.log(func(...params));

// 5
const oneDimension = [1, 2, 3, 4, 5, 6];
const twoDimension = [
    [1, 2, 3],
    [4, 5, 6]
];

// 6
const oneDimensionCopy = [...oneDimension];
const twoDimensionCopy = [...twoDimension];

// 7
oneDimensionCopy[0] = 10;

// 8
twoDimensionCopy[0][0] = 10;

// 9
console.log('One dimension');
console.log(oneDimension);
console.log(oneDimensionCopy);
console.log('Two dimension');
console.log(twoDimension);
console.log(twoDimensionCopy);

// 10
const newArray = [...oneDimension, ...twoDimension];

// 11
const object1 = {
    id: 123,
    text: 'text'
};
const object2 = {
    id: 124,
    description: 'description',
    details: {
        extraText: 'details'
    }
};

// 12
const object1Copy = { ...object1 };
const object2Copy = { ...object2 };

// 13
const mergedObject = {
    ...object1,
    ...object2
};

// 14
object2Copy.details.extraText = 'new extra text';

console.log(object2Copy.details.extraText === object2Copy.details.extraText);

