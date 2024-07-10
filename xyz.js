console.log("Hello world")
console.log(typeof "Julian")
console.log(typeof 44)
console.log(typeof true)


// String Methods
const myVariable = "Mathematics"
console.log(myVariable.length)
console.log(myVariable.charAt(5))
console.log(myVariable.split())
console.log(myVariable.split(""))
console.log("John, Joe, Dave".split(","))

// Numbes
const myNumber = 42
const myFloat = 43.7
const myFloats = 43.0
const myString = "42"
console.log(Number(myString) + 3)   // converting a string to a number

//Write code that will return a random letter from your name
console.log(Math.floor(Math.random() * 6 + 1))
console.log(Math.floor(Math.random() * 6 + 1))
console.log(Math.floor(Math.random() * 6 + 1))
console.log(Math.floor(Math.random() * 6 + 1))
console.log(Math.floor(Math.random() * 6 + 1))
console.log("--------------------------------------------")
console.log("Julian".charAt(Math.floor(Math.random() * 5)))
console.log("Julian".charAt(Math.floor(Math.random() * 5)))
console.log("Julian".charAt(Math.floor(Math.random() * 5)))
console.log("Julian".charAt(Math.floor(Math.random() * 5)))
console.log("Julian".charAt(Math.floor(Math.random() * 5)))
console.log("Julian".charAt(Math.floor(Math.random() * 5)))
console.log("--------------------------------------------")
// Let this program work for any Name
// Cater also for the number of characters in that name
const myName = "Fabulous"
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log(myName.charAt(Math.floor(Math.random() * myName.length)))
console.log("--------------------------------------------")
// Let this program work for any Name, user enters their name
// let ourName = prompt("please enter your name")
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log(ourName.charAt(Math.floor(Math.random() * ourName.length)))
// console.log("--------------------------------------------")

// user Input
// let fname = prompt ("please enter your name")
// console.log(fname ?? "you dint enter your name")


console.log("---------------------- Functions ----------------------")
// Functions
function sum(num1, num2) {
    if (num2 == undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log(sum(15))



function getName(email) {
    return email.slice(0, email.indexOf("@"))
}
console.log(getName("kjdcd@gmail.com"))





const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail("johan@davegray.co.uk"));




// Arrow functions
const getUserFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserFromEmail("johan@davegray.co.uk"));