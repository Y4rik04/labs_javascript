function logCall(callback) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Виклик функції о ${currentTime}`);
        callback();
        resolve();
      }, 1000);
    });
  }
  
  logCall(() => console.log("Функція 1"))
    .then(() => logCall(() => console.log("Функція 2")))
    .then(() => logCall(() => console.log("Функція 3")))
    .then(() => logCall(() => console.log("Функція 4")))
    .catch(error => console.error("Сталася помилка:", error));
  