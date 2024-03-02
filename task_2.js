class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
Car1 = Object.create(Car);
Car1.brand = 'Mercedes';
Car1.model = "C63";
Car1.year = 2020;
console.log(Car1);

Car2 = Object.create(Car);
Car2.brand = "BMW";
Car2.model = "M4";
Car2.year = 2023;
console.log(Car2);