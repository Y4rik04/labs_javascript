function Person(firstName, surname, birthDate) {
    this.firstName = firstName;
    this.surname = surname;
    this.birthDate = birthDate;

    this.getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.surname}\nBirth date: ${this.birthDate}`);
    }
}

function ObservedPerson(person) {
    this.person = person;
    this.calls = 0;

    this.getFullInfo = function() {
        this.calls++;
        this.person.getFullInfo();
    }
}

const myPerson = new Person('yaroslav', 'melnyk', new Date(2004,4,2).toLocaleDateString())
const myObservedPerson = new ObservedPerson(myPerson);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);