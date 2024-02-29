function createCachingFunction(originalFunction, cacheTimeInSeconds) {
    let lastResult;
    let lastCallTime;
  
    return function (...args) {
      const currentTime = new Date().getTime();
      // перевірка часу збереження кешу
      if (lastCallTime && currentTime - lastCallTime < cacheTimeInSeconds * 1000) {
        console.log('Returning cached result');
        return lastResult;
      }
  
    //виклик  функції
      lastResult = originalFunction(...args);
      lastCallTime = currentTime;
  
      console.log('Updating cache with new result');
  
      return lastResult;
    };
  }
  //приклад
  function exampleFunction(parm) {
    console.log('Executing original function');
    return parm + 1;
  }
  //кешування 10 секунд
  const cachedFunction = createCachingFunction(exampleFunction, 10);
  
  // виклик оригінальної функції
  console.log(cachedFunction(5));
  
  //другий виклик протягом 10 секунд
  console.log(cachedFunction(5));
  
  // затримка на 11 секунд для зміни часу кешування
  setTimeout(() => {
    // третій виклик після затримки
    console.log(cachedFunction(5));
  }, 15000);