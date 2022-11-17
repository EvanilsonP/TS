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
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
    return {...objA, ...objB }
}

const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Evanilson', hobbies: ['Sports']}, {age: 23});
console.log(mergedObj.age);