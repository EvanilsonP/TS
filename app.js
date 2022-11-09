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
//person.role = [0, 'admin', 'user'];
// console.log(person.role);
// let favoriteActivities: string[];
// favoriteActivities = ['Learn languages', 'Read'];
// for(const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map()) -> ERROR!!!
// }
// console.log(person.name);
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
    name: 'Evanilson',
    age: 23,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
if (person.role === ADMIN) {
    console.log('is admin');
}
