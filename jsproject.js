var lbs = prompt ("weight inlbs");
var kg = lbs*0.45;
alert("that is: " + kg + "kilograms");
console.log("conversion complete!");

function sum_Of_Cubes(n) {
    var sum = 0;
    for (var i = 1; i<=n; i++) {
        sum += Math.pow(i, 3);
    }
    return sum
}

console.log(sum_Of_Cubes(5))

var firstName = prompt("enter your first Name")
var lastName = prompt("enter you last name")
var age = prompt("enter your age")
var height = prompt("enter your height")
var petName = prompt("enter the name of your pet")

var nameCond = null
var ageCond = null
var heightCond = null
var petCond = null

if (firstName[0] === lastName[0]) {
    nameCond = true
}else {
    nameCond = false
}


if (age > 20 && age < 30){
    ageCond = true
}else {
    ageCond = false
}

if (height >= 170) {
    heightCond = true
}else {
    heightCond = false
}

if (petName[petName.length - 1] === y ) {
    petCond = true
}else {
    petCond = false
}


if (nameCond && ageCond && heightCond && petCond) {
    console.log("wlcome SPY")
}else {
    console.log("there is nothing here")
}


