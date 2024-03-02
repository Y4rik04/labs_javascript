//конструктор класу
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

const myCar = new Car('KIA', 'Sorento', 2020);
console.log(myCar);

//функція
function CarFunction(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year; 
}
const myCAr = new CarFunction('Tesla', 'Model S', 2022);
console.log(myCAr);