class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    describe(this: Department) {
        console.log('department: ' + this.name);
    }
}

const accounting = new Department('Accouting');
accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();
