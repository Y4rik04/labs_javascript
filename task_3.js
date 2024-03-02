function Person(name, surname, birthYear) {
    let person = {
        name: name,
        surname: surname,
        birthYear: birthYear,

        getFullName: function() {
            return this.name + " " + this.surname;
        },

        getAge: function(currentYear) {
            return currentYear - this.birthYear;
        }   
    };

    return person;
}

let currentYear = 2024;
var personObject = Person("Yaroslav", "Melnyk", 2004);

console.log("Повне ім'я: " + personObject.getFullName());
console.log("Вік: " + personObject.getAge(currentYear));
