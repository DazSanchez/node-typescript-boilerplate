interface Person {
    name: string;

    sayHello(): void;
}

class Developer implements Person {
    constructor(public name: string) {}

    sayHello(): void {
        console.log(`Hi, i'm ${this.name}!`);
    }
}

const person: Person = new Developer('John');

person.sayHello();