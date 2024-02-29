function average(...args) {
    return args.reduce((acc, val) => acc + val) / args.length;
}

console.log(average(5, 44, 356, 121, 97));