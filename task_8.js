const persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Mark', age: 33, city: 'Denver' },
    { name: 'Andrew', age: 18, city: 'New York' },
    { name: 'Tom', age: 54, city: 'New York' },
    { name: 'Max', age: 29, city: 'Ohio' }
];

function getUserData(userName) {
    const user = persons.find(person => person.name === userName);

    if (user) {
        return user;
    } else {
        return new Error('Unable to find user');
    }
}

function showUserInfo(userName) {
    console.log("Loading...");
    console.log(getUserData(userName));
    console.log("Loading finished");
}

showUserInfo('John');
showUserInfo('Yaroslav'); //для виводу помилки