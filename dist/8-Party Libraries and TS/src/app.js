"use strict";
// import _ from 'lodash';
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(_.shuffle([1, 2, 3]));
const product_model_1 = require("./product.model");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const products = [
    { title: 'A carpet', price: 12.99 },
    { title: 'A Book', price: 22.99 },
];
const newProd = new product_model_1.Produto('', -5);
(0, class_validator_1.validate)(newProd).then(error => {
    if (error.length > 0) {
        console.log('VALIDATION ERRORS!');
    }
    else {
        console.log(newProd.getInformation());
    }
});
// const loadedProducts = products.map(prod => {
//     return new Produto(prod.title, prod.price);
// });
// for(const prod of loadedProducts) {
//     console.log(prod.getInformation());
// }
// const p1 = new Produto('A book', 1.99);
// console.log(p1.getInformation());
//# sourceMappingURL=app.js.map