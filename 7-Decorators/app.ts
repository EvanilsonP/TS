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
// Building more userful decorators /  Returning and changing a class in a class decorator
function withTemplate(template: string, hookId: string) {
    console.log('LOGGER FACTORY');
    return function<T extends { new (...args: any[]): {name: string} }>(originalconstructor: T) {
        return class extends originalconstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const p = new originalconstructor();
                const hookEl = document.getElementById(hookId);
                if(hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    };
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

// Accessor and parameters decorators
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
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
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
};

const p1 = new Product('Book', 19);
const p2 = new Product('Book', 29);

function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    }
    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
};

const p = new Printer();

const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage);

// Validation with decorators
interface validatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['Required', 'Positive'];
    }
}

const registeredValidators: validatorConfig = {};
 
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
 
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }

    return true;
};

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);
    console.log(createdCourse);

    if(!validate(createdCourse)) {
        alert('Invalid input, please try again!');
    }
});