"use strict";
class Department {
    constructor(name) {
        this.employees = [];
        this.name = name;
    }
    describe() {
        console.log('department: ' + this.name);
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
const accounting = new Department('Accouting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.name = 'DUMMY';
accounting.describe();
accounting.printEmployeeInformation();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
//# sourceMappingURL=app.js.map