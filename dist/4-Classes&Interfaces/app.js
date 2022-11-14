"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private id: string;
        // private name: string;
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
;
const accounting = new Department('d1', 'Accouting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.name = 'DUMMY';
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map