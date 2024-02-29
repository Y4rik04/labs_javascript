function AddingFunction(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const add5 = AddingFunction(10);
  const add10 = AddingFunction(100);
  
  console.log(add5(25)); 
  console.log(add10(225)); 