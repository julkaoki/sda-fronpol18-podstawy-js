// 1
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
    }
    // 2.1
    position() {
        return { x: this.x, y: this.y };
    }
    // 2.2
    getId() {
        return this.id;
    }
    // 2.3
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    // 2.4
    info() {
        return `(Shape) ${this.id} ${this.x} ${this.y}`;
    }
}

// 3
class Circle extends Shape {
    constructor(id, x, y, r) {
        super(id, x, y);
        this.r = r;
    }
    // 4
    getRadius() {
        return this.r;
    }
    // 5
    info() {
        return 'Circle > ' + super.info();
    }
}

// 6
class Trapezium extends Shape {
    constructor(id, x, y, h) {
        super(id, x, y);
        this.h = h;
    }
    // 7
    getHeight() {
        return this.getHeight;
    }
    // 8
    info() {
        return 'Trapezium > ' + super.info();
    }
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