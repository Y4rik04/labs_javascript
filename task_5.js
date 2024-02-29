function getGreeting() {
    let lastCalledName = '';
    let cashedGreeting = '';
  
    return function(name) {
      if (name === lastCalledName) {
        console.log('Using cached greeting for', name);
        return cashedGreeting;
      } else {
        const greeting = `Hello ${name}`;
        lastCalledName = name;
        cashedGreeting = greeting;
        return greeting;
      }
    };
  }
  
  // приклад використання:
  const example = getGreeting();
  
  console.log(example('John'));  
  console.log(example('Yaroslav'));   
  console.log(example('John'));