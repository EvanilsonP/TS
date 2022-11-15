"use strict";
;
class Person {
    constructor(name) {
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + '' + this.name);
    }
}
;
let user1;
user1 = new Person('Evanilson P');
console.log(user1);
user1.greet('Hi there! I am ');
//# sourceMappingURL=app.js.map