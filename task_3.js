function callWithContext(obj, callback) {
    callback.call(obj);
}

const person = {
    name: 'Yaroslav',
    age: '19'
};

function birthdayOutput() {
    const currentDate = new Date().toLocaleDateString();
    console.log(`Today is ${currentDate}! Happy birthday ${this.name}.`);
}

callWithContext(person, birthdayOutput);