console.log("hello world")

function hello() {
    console.log(" hello world")
}

function helloYou(name) {
    console.log(" hello"+name)
}

//default parameters

function helloSomeone(myName = "Franki"){
    console.log("hello"+myName)
}

function foaml(theName="Same", tittle="Sir"){
    return tittle+ "" + theName
}


function timesFive(numInput){
    //Local Scope to function
    var result = numInput * 5
    return result
}

// Global Scope
var v = "GLOBAL V"
var stuff = "Global stuff"
function fun(stuff) {
    console.log(v)
    stuff = "Reassigning Stuff inside of a fucntion"
    console.log(stuff)
}
fun()
console.log(stuff)

// Arrays

var myArr = ["one", "two", "three"]
myArr.push = ["five"]

console.log(myArr)


var arr = ["a", "b", "j", "m", "t"]

for (var i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}


//-----------returns all the elements of the array---------------
// for (letter of arr) {
//     console.log(letter);
// }
// for (letter of arr) {
//     alert(letter);
// }
// arr.forEach(alert)

function addAwesome(name){
    console.log(name+" is awesome!")
}

addAwesome("django")

var topics = ['python', "data", 'science']
topics.forEach(addAwesome)