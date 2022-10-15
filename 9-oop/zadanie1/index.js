// 1
function Shape(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
}

// 2.1
Shape.prototype.position = function () {
    return { x: this.x, y: this.y }
}

// 2.2
Shape.prototype.getId = function () {
    return this.id;
}

// 2.3
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

// 2.4
Shape.prototype.info = function () {
    return `(Shape) ${this.id} ${this.x} ${this.y}`;
}

// 3
function Circle(id, x, y, r) {
    Shape.call(this, id, x, y);
    this.r = r;
}

// Trzeba recznie ustawic prototyp naszej klasy dziedzicacej na parenta 
Circle.prototype = Object.create(Shape.prototype);
// Trzeba recznie ponownie ustawic protyp naszej nowej klasy w przeciwnym wypadku konstruktor bedzie z klasy wyzej
Circle.prototype.constructor= Circle;

// 4
Circle.prototype.getRadius = function () {
    return this.r;
}

// 5
Circle.prototype.info = function () {
    // Tutaj trzeba w specyficzny sposob to wywolac inaczej nie zostanie przekazany kontekst this
    // sprobuj takiego wywolania: Shape.prototype.info();
    return 'Circle > ' + Shape.prototype.info.call(this);
}

// 6
function Trapezium(id, x, y, h) {
    Shape.call(this, id, x, y);
    this.h = h;
}

// Copy Parent class prototype into Child class prototype
Trapezium.prototype = Object.create(Shape.prototype);
//Assign Child to Child.prototype.constructor or else your Child class constructor will still point to Parent class constructor
Trapezium.prototype.constructor= Trapezium;

// 7
Trapezium.prototype.getHeight = function() {
    return this.getHeight;
}

// 8
Trapezium.prototype.info = function () {
    // Tutaj trzeba w specyficzny sposob to wywolac inaczej nie zostanie przekazany kontekst this
    // sprobuj takiego wywolania: Shape.prototype.info();
    return 'Trapezium > ' + Shape.prototype.info.call(this);
}


const shape = new Shape(1, 0, 0);
console.log(shape.position());
console.log(shape.getId());
shape.move(1, 1);
console.log(shape.position());
console.log(shape.info());

//

const circle = new Circle(2, 0, 0, 5);
console.log(circle.position());
console.log(circle.getId());
circle.move(5, 5);
console.log(circle.position());
console.log(circle.info());

//

const trapezium = new Trapezium(2, 0, 0, 5);
console.log(trapezium.position());
console.log(trapezium.getId());
trapezium.move(3, 3);
console.log(trapezium.position());
console.log(trapezium.info());