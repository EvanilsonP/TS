// const names: Array<string> = []; // string[];
// names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 2000);
// });

// promise.then(data => {
//     // data.split(' ');
// });

// GENERIC FUNCTION  / Constraints
function merge<T extends Object, U extends Object>(objA: T, objB: U) {
    return {...objA, ...objB }
}

const mergedObj = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Evanilson', hobbies: ['Sports']}, {age: 23});
console.log(mergedObj.age);

// CREATING ANOTHER GENERIC FUNCTION
interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if(element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if(element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements'
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi, there!'));

// The KEYOF CONSTRAINT
function extractAndConvert<T extends object, U extends keyof T> (
    
    obj: T,
    key: U
){
   return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'Evan'}, 'name'));

// GENERIC CLASSES
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item, 1));
    }

    getItems() {
        return [...this.data];
    }
};

const textStorage = new DataStorage<string>();
textStorage.addItem('Evanilson');
textStorage.addItem('P');
textStorage.removeItem('P');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();


// const objStorage = new DataStorage<object>();
// const EvanObjt = {name: 'Evanilson P.'};
// objStorage.addItem(EvanObjt);
// objStorage.removeItem({name: 'Laila P'});
// // ...
// objStorage.removeItem(EvanObjt);
// console.log(objStorage.getItems());

// GENERIC UTILITY TYPES
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date): CourseGoal {
    // return { title: title, description: description, completeUntil: date }
    let coursegoal: Partial<CourseGoal> = {}; // Partial here is making the use of the properties that comes from the interface not mandatory /Optional
    coursegoal.title = title;
    coursegoal.description = description;
    coursegoal.completeUntil = date;

    return coursegoal as CourseGoal;
};

const names: Readonly<string[]> = ['Anna', 'Manu']; // Readonly is limiting the array / not allowing any modifications
// names.push('Max');
// names.pop();