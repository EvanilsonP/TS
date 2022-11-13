"use strict";
// const userName = 'Evanilson';
// let age = 30;
// age = 29;
// function add(a: number, b: number) {
//     let result;
//     result = a+b;
//     return result;
// }
// if(age > 20) {
//     // var isOld = true;
//     let isOld = true;
//     console.log(isOld); // Available within the scope
// }
// // console.log(isOld); // Not working with VAR
// Default function parameters
// const add = (a: number, b: number = 10) => a + b;
// console.log(add(10));
const hobbies = ['Cooking', 'Learning'];
const activeHobbies = ['Hiking', ...hobbies];
activeHobbies.push(...hobbies);
const [hobby1, hobby2] = hobbies;
console.log(hobbies, hobby1, hobby2);
const person1 = {
    name: 'Evan P',
    age: 23
};
const copiedPerson = Object.assign({}, person1);
//# sourceMappingURL=app.js.map