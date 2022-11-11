function add(n1: number, n2: number) {
    return n1 + n2;
};

function printResult(num: number): void {
    console.log('Result is: ' + num);
};

printResult(add(30, 50));
// Function as types;
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(10,15));