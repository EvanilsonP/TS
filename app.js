// // const person: {
// //     name: string,
// //     age: string
// // } = { 
var person = {
    name: 'Evanilson',
    age: 23,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['Learn languages', 'Read'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) -> ERROR!!!
}
console.log(person.name);
