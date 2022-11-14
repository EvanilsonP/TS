class Department {
    name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }
    describe(this: Department) {
        console.log('department: ' + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

const accounting = new Department('Accouting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.name = 'DUMMY';

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
