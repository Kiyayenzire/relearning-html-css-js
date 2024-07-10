console.log('Hello there!');

let age;
age = 22;
console.log(age)

let firstName='Julia'
let lastName='Echeverria'
console.log(firstName, lastName)

let interestRate = 0.3;
console.log(interestRate);

const myBirthDate = '29/10/1991';
console.log(myBirthDate);


let name = 'Julia';
let myAge = 30;
let isApproved = true;




console.log('*******************************************************************************************')
console.log("Reference Type Data Types")
//        **************** Reference Type Data Types **********************

console.log("-----------------------------------------------------------------------------")
console.log("1. Object Reference Data Type") 

// ------------- 1. Object Reference Data Type ---------------------------------
let person = {
    name: 'Juliana',
    familyName: 'Anderson'
};

// dot notation, {{{{more concice and easier}}}}
person.name = 'Matha';
console.log(person.name);

// bracket notation, {{{dont know the name of the target propert until run time}}}
person['name'] = 'Smith';
console.log(person.name);
let selection = 'name';
person[selection] = 'Charles';
console.log(person.name);



// ------------- 2. Array Reference Data Type ---------------------------------
// an array is an object used to represent a list of items
// array elements can be of diffrent data types

console.log("-----------------------------------------------------------------------------")
console.log("2. Array Reference Data Type") 

let selectedColours = ['white', 'red', 'orange', 25];
selectedColours[5] = 'blue'
console.log(selectedColours.length);



// ------------- 3. Function Reference Data Type---------------------------------
// set of statements that perform a task or calculate a value
// -------parameter is used at the time of declaration
// -------argument is actual value supplied of the parameter


console.log("-----------------------------------------------------------------------------")
console.log("3. Function Reference Data Type") 

// Perform a task
function greet(name) {
    console.log('hello world' + name);
}
greet('Phiona');

// calculate a value
function square(number) {
    return number * number;    
}
console.log(square(13));
 



console.log('*******************************************************************************************')
//string concantination ~ templar string / letral
let middleName = 'Mary'
let height = 1.7
console.log(`my middle name is ${middleName} and i am ${height}m tall`)

//or

console.log('my name is ' + middleName + ' and i am ' + height + 'm tall.')





console.log('*******************************************************************************************')
console.log("String Methods")
////--------------------string methods-------------------
const s = 'Kaffee und Milch, bite';
console.log(s.toUpperCase());
console.log(s.toUpperCase().substring(2, 7));
console.log(s.substring(2, 12));
console.log(s.substring(1, 9).toLowerCase())
console.log(s.split(''));

const p = 'Wo, kommes, du';
console.log(p.split(', '));



// ------------30/04/2022;
console.log('*******************************************************************************************')
// Arrays


console.log("Constructor Array")
//////  -----Constructor Array

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);


const fruits = ['strawberries', 'oranges', 'pears', 10 , true, 'apples'];
console.log(fruits)
console.log(fruits[2])

fruits[7] = 'grapes'
console.log(fruits)

fruits.push ('mangoes')
console.log(fruits)

fruits.unshift('paw paws')
console.log(fruits)

fruits.pop()
console.log(fruits)

console.log(Array.isArray(fruits))
console.log(Array.isArray('hello'))

console.log(fruits.indexOf('pears'))



console.log("                                                        ")
console.log('*******************************************************************************************')
console.log("Object Literals")
//  ------------- Object Literals----------------------------------------------

const human = {
    firstname: 'John',
    lastName: 'Doe',
    age: 29,
    sex: 'M',
    langauge: 'English',
    hobbies: ['music', 'movies', 'sports'],
    adress: {
        street: 'plot 88 luthuli avenue',
        city: 'Bugolobi',
        state: 'Kampala'
    }
}

console.log(human)
console.log(human.lastName)
console.log(human.firstname, human.age)
console.log(human.hobbies[2])
console.log(human.adress.city)

const {langauge, sex, adress: { city}} = human
console.log(langauge);

human.email = "john@gmail.com"
console.log(human)

const todos = [
{
    id: 1,
    text: 'take out trash',
    isComplet: true
},

{
    id: 2,
    text: 'call my parents',
    isComplet: true
},

{
    id: 3,
    text: 'buy milk',
    isComplet: false
},

{
    id: 4,
    text: 'go back home',
    isComplet: false
},

{
    id: 5,
    text: 'walk the twins',
    isComplet: true
}
]
console.log(todos)
console.log(todos[2].text)



// --------------JSON File
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)



console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('for Loop')
// ----------- for loop--------------
for(let i = 0; i < 10; i++) {
    //console.log(i)
    //console.log('For Loop Number: ${i}'); // wrong template string. Not displaying as require.
    console.log('Numbers in loop ' + i)
}



console.log("                                                        ")
console.log('-------------------------------------------------')
console.log('for Loop for an Array')
// ------------looping an array----------------
console.log("                                                        ")
for(let j = 0; j < todos.length; j++) {
   console.log(todos[j].text)
}

console.log("                                                        ")
console.log("                                                        ")
console.log('for OVER Loop')
for(let todo of todos) {
    console.log(todo)
}



console.log("                                                        ")
console.log("                                                        ")
console.log("                                                        ")
console.log('-------------------------------------------------')
console.log("forEach, map, filter")
// forEach, map, filter

console.log("                                                        ")
console.log("####################### FOREACH ############################")
// ------------ forEach
todos.forEach(function(todo){
    console.log(todo.text)
})


console.log("                                                        ")
console.log("***************** MAP *****************************")
// ------------map, returns an array of one of the variables in this case, text
const todoText = todos.map(function(todo){
    return todo.text
})
console.log(todoText)


console.log("                                                        ")
console.log("---------------- FILTER ----------------")
// ------------filter, sorting data in an array eg returning todos completed
const todoComplete = todos.filter(function(todo){
    return todo.isComplet == false
})
console.log(todoComplete)


console.log("                                                        ")
const todoCompleted = todos.filter(function(todo){
    return todo.isComplet //(same as return todo.isComplet == true, as the condition is by default true.)
})
console.log(todoCompleted)


console.log("                                                        ")
const todosComplete = todos.filter(function(todo){
    return todo.isComplet == false;
}).map(function(todo) {
    return todo.text
}) 
console.log(todosComplete)



console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('conditionals')

const w = 10
if(w == 10){
    console.log(w)
}

const y = '10'
if(y == 10){
    console.log(y)
}

const z = '10' // === matches the data types for input and output
if(z === 10){
    console.log(z)
}else {
    console.log('x is not 10')
}



console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('ternary operator')
const d = 10;
const coloursOfChoice = d > 10 ? 'black' : 'white';


console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('switch statement')
const day = 'wed'
switch (day) {
    case 'mon':
        console.log('Monday')
        break
    case 'tue':
        console.log('Tuesday')
        break
    case 'wed':
        console.log('Wednesday')
        break
    case 'thu':
        console.log('Thursday')
        break
    case 'fri':
        console.log('Friday')
        break
    default:
        console.log('Non working day selected')
        break
}


console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('functions')

function addNums(num1, num2) {
    console.log(num1 + num2)
}

addNums(4, 7)


function subNums(num1 = 2, num2 = 4) {
    return num1 - num2
}

console.log (subNums(11, 7))


console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           => operator                      ')
// =>, has alot functions eg

const divNums = (num3 = 6, num4 = 3) => num3 / num4
console.log(divNums(10, 5))
todos.forEach((todo) => console.log(todo))

console.log("                                                        ")
console.log("                                                        ")
console.log('*******************************************************************************************')
console.log('           *this* keyword                      ')
    