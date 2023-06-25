//Inference
let a = 1;
// a = 'pippo';
// Type '"pippo"' is not assignable to type 'number'.


// Primitive Types
let b;

b = 'Enzo'; // string
b = 123; // number
b = true; // boolean
b = undefined; // undefined
b = null; // null
b = Symbol('pippo'); // symbol
b = { name: 'Enzo' }; // object
b = [1, 2, 3]; // array
b = [1, 'Enzo', true]; // tuple
b = function () { }; // function
b = new Error(); // Error
b = new Date(); // Date
b = /[a-z]/; // RegExp
b = BigInt(123); // BigInt


// Interfaces

interface Person {
    id: number;
    name: string;
    age?: number;
    isAdult?: boolean;
    coords?: Coords;
}

interface Coords {
    lat: number;
    lng: number;
}

let coords: Coords = {
    lat: 123,
    lng: 456
}

let person: Person = {
    id: 1,
    name: 'Enzo',
    age: 31,
    isAdult: true,
    coords,
}

// Arrays type

const e: Person = {id: 1, name: 'Enzo'};
const f: Person = {id: 2, name: 'Fabio'};
const m: Person = {id: 3, name: 'Mario'};

const persons: Person[] = [e, f, m];

console.log(persons);

// Classes
class User {
    constructor(
        public id: number,
        public name: string,
    ) { }
}

// Getter and Setter
class Truck {
    constructor(
        private id: number,
        private brand: string,
        private name: string,
        private capacity?: number,
    ) { }

    get truckId() {
        return this.id;
    }

    get truckBrand() {
        return this.brand;
    }

    set truckName(newName: string) {
        this.name = newName;
    }

    get truckName() {
        return this.name;
    }

    get truckCapacity() {
        return this.capacity;
    }
}

const truck = new Truck(1, 'Ford', 'Fiesta');
// console.log(truck.id);
// Property 'id' is private and only accessible within class 'Truck'

console.log(truck.truckId);
console.log(truck.truckBrand);
console.log(truck.truckName);
console.log(truck.truckCapacity);

truck.truckName = 'Focus';

console.log(truck);

// Functions type

function multyply(a: number, b: number): number {
    return a * b;
}

function hello(name: string): void {
    console.log(`Hello ${name}`);
}

console.log(multyply(2, 3));
console.log(hello('Enzo'));



