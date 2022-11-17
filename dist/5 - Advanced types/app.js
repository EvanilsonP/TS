"use strict";
const e1 = {
    name: 'Evanilson P.',
    privileges: ['create-server'],
    startDate: new Date()
};
// type guards
function _add_(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
;
function printEmployeeInfo(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}
;
printEmployeeInfo(e1);
printEmployeeInfo({ name: 'Max', startDate: new Date() });
class Car {
    drive() {
        console.log('Driving');
    }
}
;
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo... ' + amount);
    }
}
;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // Or 'loadCargo' in vehicle
        vehicle.loadCargo(10000);
    }
}
;
useVehicle(v1);
useVehicle(v2);
;
;
function moveAnimanl(animal) {
    // if('flyingSpeed' in animal) {                               // Cant' use instanceof with interfaces
    //     console.log('Moving with speed: ' + animal.flyingSpeed);
    // }
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed ' + speed);
}
;
moveAnimanl({ type: 'bird', flyingSpeed: 15 });
// TYPE CASTING
// const userInput = <HTMLInputElement>document.getElementById('user-output')!; // Adding HTMLInputElement so value won't complain
const userInput = document.getElementById('user-output'); //as HTMLInputElement;
if (userInput) {
    userInput.value = 'Hi there!';
}
;
//# sourceMappingURL=app.js.map