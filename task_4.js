let arr1 = [2, 3, 56, -45, -56];
let arr2 = [-10, 44, 0, 34, -21];

// first
let mergedArrays = arr1.concat(arr2);

// second
 mergedArrays = [...arr1, ...arr2];

console.log(mergedArrays);
