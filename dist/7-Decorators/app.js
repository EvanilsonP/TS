"use strict";
// A first class decorator
// function Logger(constructor: Function): void {
//     console.log('Logging...');
//     console.log(constructor);
// };
// @Logger
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Working with decorators factories
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// Building more userful decorators
function withTemplate(template, hookId) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log('Rendering template');
        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
;
let _Person = class _Person {
    constructor() {
        this.name = 'Evan';
        console.log('Creating person object...');
    }
};
_Person = __decorate([
    Logger('LOGGING')
    // @Logger('LOGGING - PERSON')
    ,
    withTemplate('<h1>My person object</h1>', 'app')
], _Person);
const pers = new _Person();
console.log(pers);
// Diving into property decorators
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
// Accessor and parameters decorators
function Log2(target, name, descriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
;
//# sourceMappingURL=app.js.map