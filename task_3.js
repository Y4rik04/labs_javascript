function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }
  
  async function example() {
    console.log("Початок виконання");
    
  // 1 секунда затримки
    await sleep(1000);
    
    console.log("Пройшла 1 секунда");
    
    // затримка на 2 секунди
    await sleep(2000);
    
    console.log("Пройшло ще 2 секунди");
  }
  
  example();
  