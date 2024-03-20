function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomIntegersArray(length, min, max) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(getRandomInteger(min, max));
    }
    return array;
  }

  function getRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return text;т
  }
  
  export { getRandomInteger, getRandomIntegersArray, getRandomText };
  