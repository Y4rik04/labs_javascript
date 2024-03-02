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

let currentYear = 2024;
let employeeObject = Employee("Yaroslav", "Melnyk", 2004, "Coder");

console.log("Повне ім'я, посада та рік народження: " + employeeObject.getFullName());
