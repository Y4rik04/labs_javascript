const logLevels = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3,
};

let currentLogLevel = logLevels.INFO; 

function setLogLevel(level) {
  currentLogLevel = level;
}

function log(message, level) {
  if (level >= currentLogLevel) {
    switch (level) {
      case logLevels.DEBUG:
        console.debug(message);
        break;
      case logLevels.INFO:
        console.info(message);
        break;
      case logLevels.WARNING:
        console.warn(message);
        break;
      case logLevels.ERROR:
        console.error(message);
        break;
      default:
        console.log(message);
    }
  }
}

//шифрування цезарь
const CaesarCipher = {
  encrypt(message, shift) {
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) { 
        encryptedMessage += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
      } else {
        encryptedMessage += message.charAt(i);
      }
    }
    return encryptedMessage;
  },

  decrypt(encryptedMessage, shift) {
    log('Звернення до decrypt: Розшифровуємо повідомлення...', logLevels.INFO);
    return this.encrypt(encryptedMessage, (26 - shift) % 26);
  }
};

module.exports = {
  CaesarCipher,
  logLevels,
  setLogLevel,
  log
};

  