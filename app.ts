// // const person: {
// //     name: string,
// //     age: string
// // } = { 
    const person = {
        name: 'Evanilson',
        age: 23,
        hobbies: ['Sports', 'Cooking']
}
let favoriteActivities: string[];
favoriteActivities = ['Learn languages', 'Read'];

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) -> ERROR!!!
}

console.log(person.name);