const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Mark', age: 33, city: 'Denwer' },
    { name: 'Andrew', age: 18, city: 'New York' },
    { name: 'Tom', age: 54, city: 'New York' },
    { name: 'Max', age: 29, city: 'Ohio' }
];

// по ідеї потрібно додати геттер
persons.forEach(person => {
    Object.defineProperty(person, 'birthYear', {
        get: function() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.age;
        },
        enumerable: true, 
        configurable: true 
    });
});

//властивості
persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

persons.forEach(person => {
    console.log(`${person.name}'s birth year: ${person.birthYear}`);
});