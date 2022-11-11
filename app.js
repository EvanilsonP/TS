function add(n1, n2) {
    return n1 + n2;
}
;
function printResult(num) {
    console.log('Result is: ' + num);
}
;
printResult(add(30, 50));
var combineValues;
combineValues = add;
console.log(combineValues(10, 15));
