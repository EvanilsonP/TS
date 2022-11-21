// A first class decorator
// function Logger(constructor: Function): void {
//     console.log('Logging...');
//     console.log(constructor);
// };
// @Logger

// Working with decorators factories
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}
// Building more userful decorators
function withTemplate(template: string, hookId: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: any) {
        console.log('Rendering template');
        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
};
@Logger('LOGGING')
// @Logger('LOGGING - PERSON')
@withTemplate('<h1>My person object</h1>', 'app')
class _Person {
    name = 'Evan';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new _Person();
console.log(pers);

// Diving into property decorators
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

class Product {
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price');
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
};