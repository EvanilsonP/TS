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
// type guards
function _add_(a: Combinable_, b: Combinable_) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log(emp.name);
    if('privileges' in emp) {
        console.log(emp.privileges);
    }
    if('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
};

printEmployeeInfo(e1);
printEmployeeInfo({name: 'Max', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving');
    }
};

class Truck {
    drive() {
        console.log('Driving a truck');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo... ' + amount);
    }
};

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
     if(vehicle instanceof Truck) {    // Or 'loadCargo' in vehicle
        vehicle.loadCargo(10000);
    }
};

useVehicle(v1);
useVehicle(v2);