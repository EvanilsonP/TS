"use strict";
// // const person: {
// //     name: string,
// //     age: string
// // } = { 
//     const person: {
//         name: string,
//         age: number,
//         hobbies: string[],
//         role: [number, string]
//     } = {
//         name: 'Evanilson',
//         age: 23,
//         hobbies: ['Sports', 'Cooking'],
//         role: [2, 'author']
// };
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
// console.log(person.role);
let favoriteActivities;
favoriteActivities = ['Learn languages', 'Read'];
// for(const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map()) -> ERROR!!!
// }
// console.log(person.name);
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Evanilson',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
//# sourceMappingURL=objects-arrays-enums.js.map