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



 



