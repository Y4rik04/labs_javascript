function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = {
    name: 'Yaroslav',
  };
  
  greet.call(person, 'Hello', '!'); 
  
  const args = ['Hi', '!!'];
  greet.apply(person, args);
  
  const greetYaroslav = greet.bind(person, 'Hey');
  greetYaroslav('!!!');