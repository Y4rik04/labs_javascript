function invokeAfterDelay(func, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = func();
        resolve(result);
      }, delay);
    });
  }
  

  function RandomNumber() {
    return Math.floor(Math.random() * 11);
}
  
  invokeAfterDelay(RandomNumber, 2000) 
    .then((result) => {
      console.log("Результат виклику функції з затримкою:", result);
    })
    .catch((error) => {
      console.error("Сталася помилка:", error);
    });
  