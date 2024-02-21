const arr = [2, 45, -45, 28, -44];
console.log("Квадрат третього числа: " + Math.pow(arr[2], 2));
console.log("Сума першого і останнього елемента: " + (arr[0] + arr[4]));
console.log("Сума квадратів від’ємних елементів: " + arr.filter(num => num < 0).map(num => Math.pow(num, 2)).reduce((acc, num) => acc + num));