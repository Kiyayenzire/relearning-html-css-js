


console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           OOP in Javascript                      ')

// // Constructor function
// function Person (firstName, lastName, dob) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.dob = new Date(dob)
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear()
// }

// Person.prototype.getFullName= function() {
//     return `${this.firstName} ${this.lastName}`
// }


// // Instantiate object
// const person1 = new Person('John', 'Smithy', '14-05-1999')
// const person2 = new Person('Mary', 'Jane', '11-08-1990')
// console.log(person2.firstName)
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())
// console.log(person1)



console.log('*******************************************************************************************')
console.log('           same as function above using classes                      ')

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}

// Instantiate object
const person1 = new Person('John', 'Smithy', '14-05-1999')
const person2 = new Person('Mary', 'Jane', '11-08-1990')
console.log(person2.firstName)
console.log(person1.getBirthYear())
console.log(person1.getFullName())
console.log(person1)



console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           DOM in Javascript                      ') 
console.log("                                                        ")
console.log("                                                        ")
console.log("                                                        ")
console.log("                                                        ")
console.log("                                                        ")
console.log("                                                        ")



console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           OOP In Javascript by Mosh                      ') 
console.log('*******************************************************************************************')
/* const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw')
    }
};

circle.draw(); */


console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           Factopry function                      ')
function createCircle (radius) {
    return {
        radius,
        draw: function() {
            console.log('colouring')
        }
    }
}

const circle = createCircle(2)



console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           The Constructor Function                      ')
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}
const another = new Circle(3)


console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           Constructor Property                      ')



console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           Accessing Object Properties                      ')



const circle1 = new Circle(11)
console.log('           dot notation                      ')
console.log("                                                        ")
circle1.location = { x: 1}
console.log('           bracket notation                      ')
console.log('-----------------------------------------')
console.log('    1. for dynamic access to object properties      ')
const propertName = 'location'
circle[propertName] = { x: 1};
console.log('-----------------------------------------')
console.log('    2. for accessing properties non-valid identifiers eg special cahracters and spaces      ')
const myName = 'Julian Kiyayenzire'
circle[myName] = { x: 1};
console.log('-----------------------------------------')
console.log('    3. for dynamically deleting properties from an object  eg like credit card details    ')
console.log("                                                        ")


