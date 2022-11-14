"use strict";
class Department {
    constructor(name) {
        this.name = name;
    }
    describe() {
        console.log('department: ' + this.name);
    }
}
const accounting = new Department('Accouting');
accounting.describe();
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();
//# sourceMappingURL=app.js.map