const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Mark', age: 33, city: 'Denwer' },
    { name: 'Andrew', age: 18, city: 'New York' },
    { name: 'Tom', age: 54, city: 'New York' },
    { name: 'Max', age: 29, city: 'Ohio' }
];
//перший елемент масиву
const person = { name: 'John', age: 23, city: 'Boston' };

const {name: personName, city: personCity} = person;

console.log(personName);
console.log(personCity);

const {name: arrName, age: arrAge, city: arrCity} = persons[0];

console.log(arrName);
console.log(arrAge);
console.log(arrCity);