let cars = [
    { ownerName: "Marc Anderson", modelName: "Mercedes-AMG C63", engineVolume: 3.982},
    { ownerName: "Andrew Wiggin", modelName: "BMW M4", engineVolume: 3 },
    { ownerName: "Mark Ruffalo", modelName: "Lamborgini Urus", engineVolume: 4.0 }
];

let minCarEngineVolume = cars.reduce(function(prev, current) {
    return (prev.engineVolume < current.engineVolume) ? prev : current;
});

console.log("Машина з мінімальним об'ємом двигуна:",  minCarEngineVolume);