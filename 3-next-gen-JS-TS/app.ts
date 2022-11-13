const userName = 'Evanilson';
let age = 30;
age = 29;

function add(a: number, b: number) {
    let result;
    result = a+b;
    return result;
}

if(age > 20) {
    // var isOld = true;
    let isOld = true;
    console.log(isOld); // Available within the scope
}

// console.log(isOld); // Not working with VAR
