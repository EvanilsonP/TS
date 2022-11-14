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
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    ;
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class accountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    ;
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }
    ;
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    PrintReports() {
        console.log(this.reports);
    }
}
;
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
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
accounting.mostRecentReport = 'I have complaints!';
accounting.addReport('Something went wrong');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
// accounting.printEmployeeInformation();
// accounting.PrintReports();
accounting.describe();
//# sourceMappingURL=app.js.map