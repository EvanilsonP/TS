"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class accountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    PrintReports() {
        console.log(this.reports);
    }
}
;
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
// accounting.name = 'DUMMY';
it.describe();
it.printEmployeeInformation();
console.log(it);
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
const accounting = new accountingDepartment('d2', []);
accounting.addReport('Something went wrong');
accounting.addEmployee('Max');
accounting.printEmployeeInformation();
accounting.PrintReports();
//# sourceMappingURL=app.js.map