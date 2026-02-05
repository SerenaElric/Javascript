let dragon=250; // global
let color= 'green'; // string
let dragonName='Shinron';
dragon = dragon-25; 

{// block
    let player= 'Bob';
    let health=100;
}

const weapon= {
    type: 'sword',
    attack: 25,

}

console.log(dragon);
console.log(color);
console.log(dragonName);
console.log(weapon);

// function homework

function greeting (username, age){
    console.log(`Hello my name is ${username}.`);
    console.log(`I am ${age} years old.`)
}

greeting ("Amanda", 33);
greeting ("Stacey", 40);

const person1 = {
    firstName: "Amanda",
    lastName: "Graham",
    sayHello: () => console.log ("Hi, I'm Amanda!"),

}

const person2 = {
    firstName: "Stacey",
    lastName: "Barrera",
    sayHello: () => console.log ("Hello, my name is Stacey.")
}

console.log(person1.firstName);
console.log(person1.lastName);
person1.sayHello();

console.log(person2.firstName);
console.log(person2.lastName);
person2.sayHello();
