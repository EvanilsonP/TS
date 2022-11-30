// import _ from 'lodash';

// console.log(_.shuffle([1, 2, 3]));

import { Produto } from "./product.model";
import "reflect-metadata";
import { validate } from "class-validator";

const products = [
    { title: 'A carpet', price: 12.99 },
    { title: 'A Book', price: 22.99 },
];

const newProd = new Produto('', -5)
validate(newProd).then(error => {
    if(error.length > 0) {
        console.log('VALIDATION ERRORS!');
    } else {
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