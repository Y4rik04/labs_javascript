// імпорт з бібліотеки 
import CryptoJS from 'crypto-js';

// шифрування
function encryptMessage(message, key) {
  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
  return encryptedMessage;
}

// дешифрування
function decryptMessage(encryptedMessage, key) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
  const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decryptedMessage;
}

const encryptionKey = 'Melnyk2024';

const originalMessage = 'Якесь секретне повідомлення';

const encryptedMessage = encryptMessage(originalMessage, encryptionKey);
console.log('Зашифроване повідомлення:', encryptedMessage);

const decryptedMessage = decryptMessage(encryptedMessage, encryptionKey);
console.log('Дешифроване повідомлення:', decryptedMessage);
