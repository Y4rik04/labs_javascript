class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }
    calculateArea() {
        throw new Error("Method 'calculateArea' must be implemented");
    }
    calculatePerimeter() {
        throw new Error("Method 'calculatePerimeter' must be implemented");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const shapesArray = [
    new Circle(5),
    new Rectangle(4, 6),

];

shapesArray.forEach((shape, index) => {
    console.log(`Figure ${index + 1}:`);
    console.log("   Area:", shape.calculateArea());
    console.log("   Perimeter:", shape.calculatePerimeter());
    console.log("---------------------");
});