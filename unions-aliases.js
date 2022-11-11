"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}
;
const combinedAges = combine(30, 50, 'as-number');
const combinedSTRINGSAges = combine('30', '50', 'as-number');
const combinedNames = combine('Max', 'Ajax', 'as-text');
console.log(combinedAges);
console.log(combinedSTRINGSAges);
console.log(combinedNames);
