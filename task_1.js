const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Mark', age: 33, city: 'Denwer' },
    { name: 'Andrew', age: 18, city: 'New York' },
    { name: 'Tom', age: 54, city: 'New York' },
    { name: 'Max', age: 29, city: 'Ohio' }
];
//властивості
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

console.log("Елементи масиву: ");
for (const person in persons) {
    console.log(person);
}

console.log("Властивості масиву:");
for(const i in persons) {
console.log(i + ": " + persons[i]);
}