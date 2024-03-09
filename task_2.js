function invokeAfterDelay(func, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = func();
        resolve(result);
      }, delay);
    });
  }

function produceRandomAfterDelay(delay) {
    return invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
  }
  
  Promise.all([
    produceRandomAfterDelay(2000), //затримка 2с
    produceRandomAfterDelay(5000), //затримка 5с
  ])
    .then((results) => {
      const sum = results.reduce((acc, result) => acc + result, 0);
      console.log("Сума результатів:", sum);
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });
  