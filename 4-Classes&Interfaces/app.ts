interface AddFn {
    (a: number, b: number): number;
}

let add_: AddFn;

add_ = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    name: string;
};

interface Greetable extends Named {
    readonly name: string;
    // age: number;
    greet(phrase: string): void;
};

class Person implements Greetable {
    name: string;
    age = 30;
    
    constructor(name: string) {
        this.name = name;
    }
    greet(phrase: string) {
        console.log(phrase + '' + this.name);
    }
};

let user1: Greetable;

user1 = new Person('Evanilson P');
// user1.name = 'Evanilson' //  NOPE!
console.log(user1);

user1.greet('Hi there! I am ');