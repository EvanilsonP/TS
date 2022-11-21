// A first class decorator
// function Logger(constructor: Function): void {
//     console.log('Logging...');
//     console.log(constructor);
// };
// @Logger

// Working with decorators factories
function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}
// Building more userful decorators
function withTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const p = new constructor();
        const hookEl = document.querySelector('app');
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
};

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