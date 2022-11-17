type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Evanilson P.',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable_ = string | number;
type Numeric = number | boolean;

type Universal = Combinable_ & Numeric;
// Function overload
function _add_(a: number, b: number): number;
function _add_(a: string, b: string): string;
// type guards
function _add_(a: Combinable_, b: Combinable_) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
};

const result_ = _add_('Evan', ' p');
result_.split(' ');

// OPTIONAL CHAINING
const fetchedUserData = {
    id: 'u1',
    name: 'Me',
    job: { title: 'CEO', description: 'My own Company'}
}
console.log(fetchedUserData?.job?.title); // Working like a IF ELSE statement; Acessing properties if there is any

//  NULLISH COALESCING
const userinput_ = undefined;
const storedData = userinput_ ?? 'DEFAULT';
console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//     console.log(emp.name);
//     if('privileges' in emp) {
//         console.log(emp.privileges);
//     }
//     if('startDate' in emp) {
//         console.log('Start Date: ' + emp.startDate);
//     }
// };

// printEmployeeInfo(e1);
// printEmployeeInfo({name: 'Max', startDate: new Date()});

// class Car {
//     drive() {
//         console.log('Driving');
//     }
// };

// class Truck {
//     drive() {
//         console.log('Driving a truck');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo... ' + amount);
//     }
// };

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//      if(vehicle instanceof Truck) {    // Or 'loadCargo' in vehicle
//         vehicle.loadCargo(10000);
//     }
// };

// useVehicle(v1);
// useVehicle(v2);

// // DISCRIMINATED UNIONS
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// };
// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// };

// type Animal = Bird | Horse;

// function moveAnimanl(animal: Animal) {          
//     // if('flyingSpeed' in animal) {                               // Cant' use instanceof with interfaces
//     //     console.log('Moving with speed: ' + animal.flyingSpeed);
//     // }
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;

//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving at speed ' + speed);
// };

// moveAnimanl({type: 'bird', flyingSpeed: 15});

// // TYPE CASTING
// // const userInput = <HTMLInputElement>document.getElementById('user-output')!; // Adding HTMLInputElement so value won't complain
// const userInput = <HTMLInputElement>document.getElementById('user-output')  //as HTMLInputElement;
// if(userInput) {
//     (userInput as HTMLInputElement).value = 'Hi there!';
// };

// // INDEX PROPERTIES
// interface ErroContainer {
//     [prop: string]: string; // Not knowing how many properties we might need
// }

// const errorBag: ErroContainer = {
//     email: 'Not a valid email.',
//     username: 'User name must start with a capital letter.'
// }