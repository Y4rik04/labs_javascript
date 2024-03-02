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

function Employee(name, surname, birthYear, position) {
    let employee = Person(name, surname, birthYear);
    employee.position = position;
    employee.getFullName = function() {
        return this.name + " " + this.surname + ", " + this.position + ", " + this.birthYear;
    };

    return employee;
}
function compareObjects(obj1, obj2) {
    if (obj1.constructor === obj2.constructor) {
        console.log(`Об'єкти належать до одного класу: ${obj1.constructor.name}`);
    } else {
        console.log('Об\'єкти не належать до одного класу.');
    }
}

var personObject = Person("Mark", "Twen", 1835);
var employeeObject = Employee("Petro", "Poroshenko", 1965, "Сщтаусешщтук");

compareObjects(personObject, employeeObject);
