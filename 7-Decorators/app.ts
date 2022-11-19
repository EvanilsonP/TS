// A first class decorator
function Logger(constructor: Function): void {
    console.log('Logging...');
    console.log(constructor);
};
@Logger

class _Person {
    name = 'Evan';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new _Person();
console.log(pers);