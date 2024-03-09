function getUser(id) {
    const users = [
      { id: 0, name: "Yaroslav", age: 25, city: "Kyiv" },
      { id: 1, name: "Andrew", age: 30, city: "London" },
      { id: 2, name: "Mark", age: 28, city: "Paris" },
      { id: 3, name: "Annie", age: 22, city: "Madrid" },
    ];
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(user => user.id === id);
  
        if (user) {
          resolve(user);
        } else {
          reject(new Error('User not found'));
        }
      }, 1000);
    });
  }
  
  async function loadUsers(ID) {
    for(let i = 0; i < ID.length; i++) {
        getUser(i)
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
}

loadUsers([0, 1, 2, 3, 4]);