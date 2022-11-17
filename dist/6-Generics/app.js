"use strict";
// const names: Array<string> = []; // string[];
// names[0].split(' ');
// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });
// promise.then(data => {
//     // data.split(' ');
// });
// GENERIC FUNCTION  / Constraints
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: 'Evanilson', hobbies: ['Sports'] }, { age: 23 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi, there!'));
//# sourceMappingURL=app.js.map