"use strict";
function _add(n1, n2) {
    return n1 + n2;
}
;
function _printResult(num) {
    console.log('Result is: ' + num);
}
;
// Function Types and callbacks
function addAndHabdle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
;
addAndHabdle(10, 20, (result) => {
    console.log(result);
});
_printResult(_add(30, 50));
// Function as types;
let combineValues;
combineValues = add;
console.log(combineValues(10, 15));
//# sourceMappingURL=functions.js.map