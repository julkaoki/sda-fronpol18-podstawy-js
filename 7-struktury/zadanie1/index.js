// 1
const komputer = {
    procesor: 'AMD',
    ram: 16,
    discCapacity: 1024,
    users: ['root', 'Katarzyna', 'Karolina'],
    yearOfProduction: 2020
};

// 2
const stringArray = [
    '1',
    '2',
    '3',
    '4',
    '5'
];

// 3
const myMap = new Map();
myMap.set({ id: 1, text: '1' }, 1);
myMap.set({ id: 2, text: '2' }, 2);
myMap.set({ id: 3, text: '3' }, 3);
myMap.set({ id: 4, text: '4' }, 4);
myMap.set({ id: 5, text: '5' }, 5);

// 4
const mySet = new Set();
mySet.add('text');
mySet.add(20);
mySet.add({ id: 1, text: '1' });
mySet.add([1, 2, 3, 4, 5]);

// 5
// 1
console.log(komputer.discCapacity);
// 2
komputer.requiredWatts = 500;
// 3
console.log(Object.keys(komputer));
// 4
console.log(Object.values(komputer));

// 6
// 1
console.log(stringArray);
// 2
console.log(stringArray.length);
// 3
stringArray.push('New text');
// 4
stringArray.splice(2, 1);

// 7
// 1
myMap.set({ id: 6, text: '6' }, 6);
myMap.set({ id: 7, text: '7' }, 7);
// 2
console.log(myMap.get({ id: 1, text: '1'}));
// 3
const myObject = { id: 10, text: 10};
myMap.set(myObject, 10);
myMap.set(myObject, 20);
console.log(myMap.get(myObject));
// 4
console.log(myMap.length);
// 5
console.log(myMap.entries());

//8
// 1
mySet.add('text');
// 2
console.log(mySet.length);
// 3
console.log(mySet.has('text'));
console.log(mySet.has('nie ma'));
