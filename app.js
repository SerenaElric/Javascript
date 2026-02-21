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

// concatenated string homework

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let userName;
let age;

mySubmit.onclick = function(){

    userName = document.getElementById("myUser").value;
    age = myText.value;
    age = Number(age);

    if(age <= 15){
        resultElement.textContent = `${userName} is a Hatchling Dragon at ${age} years old.`;
    }
    else if(age <= 25){
        resultElement.textContent = `${userName} is a Juvenile Dragon at ${age} years old.`;
    }
     else if(age <= 50){
        resultElement.textContent = `${userName} is a Adult Dragon at ${age} years old.`;
    }
     else if(age <= 75){
        resultElement.textContent = `${userName} is a Elder Dragon at ${age} years old.`;
    }
     else if(age <= 100){
        resultElement.textContent = `${userName} is a Grand Dragon at ${age} years old.`;
    }
     else if(age > 100){
        resultElement.textContent = `${userName} is a Legend Dragon at ${age} years old.`;
    }
}

const nameFirst = "Amanda";
let dragonAge = 100;
let dragonColor;

switch(true){
    case dragonAge <= 15:
        dragonColor = "Yellow";
        break;
    case dragonAge <= 25:
        dragonColor = "Orange";
        break;
    case dragonAge <= 50:
        dragonColor = "Red";
        break;
    case dragonAge <= 75:
        dragonColor = "Silver";
        break;
    case dragonAge <= 100:
        dragonColor = "Gold";
        break;
    default:
        dragonColor = "Platium"
    
}

console.log (dragonColor);
console.log (nameFirst.charAt(1));

// DOM and LOOPS

const text = document.querySelector(".types");
const li1 = document.querySelector(".list1");
const colors = ["Yellow", "Orange", "Red", "Silver", "Gold", "Platium"]
let favColor;

text.style.color = "maroon"; 
text.style.fontFamily = "Copperplate Gothic Light";
li1.classList.add("ageColor");

