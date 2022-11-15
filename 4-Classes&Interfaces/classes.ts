abstract class Department {
    static fiscalYear = 2020;
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return {name: name};
    };

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
};

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class accountingDepartment extends Department {
    private lastReport: string;
    private static instance: accountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    };

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    };

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if(accountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new accountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    PrintReports() {
        console.log(this.reports);
    }
};

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max'] );

it.addEmployee('Max');
it.addEmployee('Manu');

// accounting.name = 'DUMMY';

it.describe();
it.printEmployeeInformation();
console.log(it);
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();

// const accounting = new accountingDepartment('d2', []);
const accounting = accountingDepartment.getInstance(); // Working with singleton

accounting.mostRecentReport = 'I have complaints!';

accounting.addReport('Something went wrong');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Max');

// accounting.printEmployeeInformation();
// accounting.PrintReports();
accounting.describe();

