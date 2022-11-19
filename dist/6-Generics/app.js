"use strict";
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
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: 'Evanilson', hobbies: ['Sports'] }, { age: 23 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi, there!'));
// The KEYOF CONSTRAINT
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Evan' }, 'name'));
// GENERIC CLASSES
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item, 1));
    }
    getItems() {
        return [...this.data];
    }
}
;
const textStorage = new DataStorage();
textStorage.addItem('Evanilson');
textStorage.addItem('P');
textStorage.removeItem('P');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
// const objStorage = new DataStorage<object>();
// const EvanObjt = {name: 'Evanilson P.'};
// objStorage.addItem(EvanObjt);
// objStorage.removeItem({name: 'Laila P'});
// // ...
// objStorage.removeItem(EvanObjt);
// console.log(objStorage.getItems());
//# sourceMappingURL=app.js.map