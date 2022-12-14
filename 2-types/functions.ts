function _add(n1: number, n2: number) {
    return n1 + n2;
};

function _printResult(num: number): void {
    console.log('Result is: ' + num);
};

// Function Types and callbacks
function addAndHabdle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1+n2;
    cb(result);
};

addAndHabdle(10, 20, (result) => {
    console.log(result);
});

_printResult(_add(30, 50));
// Function as types;
let combineValues: (a: number, b: number) => number;
combineValues = _add;
console.log(combineValues(10,15));