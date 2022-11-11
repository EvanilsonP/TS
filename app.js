function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log('Result is: ' + num);
}
;
function addAndHabdle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
;
addAndHabdle(10, 20, function (result) {
    console.log(result);
});
printResult(add(30, 50));
// Function as types;
var combineValues;
combineValues = add;
console.log(combineValues(10, 15));
