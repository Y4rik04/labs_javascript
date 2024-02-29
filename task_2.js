function values(f, low, high){
    const result = [];
    for (let i = low; i <= high; i++) {
        result.push(f(i));
    }
    return result;
}

//приклад роботи

function square(num1) {
    return num1*num1;
}
const low = 2;
const high = 5;
const Result = values(square, low, high);
console.log(Result);