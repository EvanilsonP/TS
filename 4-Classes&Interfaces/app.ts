class Departament {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const accounting = new Departament('Accouting');
console.log(accounting);