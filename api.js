function fetchUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            const users = [];
            for (let i = 0; i < 20; i++) {
                users.push({
                    firstname: `Name${i + 1}`,
                    lastname: `Surname${i + 1}`,
                    score: Math.floor(Math.random() * 100)
                });
            }
            resolve(users.slice(0, 10));
        }, 1000);
    });
}

function getNewUsers() {
    const users = fetchUsers().then(users => {
        return users.slice(0, 5);
    });
    return users;
}
