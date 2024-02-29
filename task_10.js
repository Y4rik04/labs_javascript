function callbackFunction(callback, ...args) {
    const functionName = callback.name;
    const currentTime = new Date();
  
    console.log(`Function Name: ${functionName}`);
    console.log(`Arguments: ${args}`);
    console.log(`Call Time: ${currentTime}`);
  
    callback(...args);
  }
  
  //приклад
  function exampleFunction(arg1, arg2) {
    console.log(`Inside the callback! Arguments: ${arg1}, ${arg2}`);
  }
  
  callbackFunction(exampleFunction, 'Hello', ' Yaroslav');