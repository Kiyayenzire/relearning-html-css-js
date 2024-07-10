// var, let, const
// global scope and local scope variables


//global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`)
console.log(`global: ${y}`)
console.log(`global: ${z}`)

function myfunc() {
    console.log(`function: ${x}`)
    console.log(`function: ${y}`)
    console.log(`function: ${z}`)

    {
        console.log(`block: ${x}`)
        console.log(`block: ${y}`)
        console.log(`block: ${z}`)
    }
}

myfunc()
console.log("--------------------------- new line ------------")
console.log("--------------------------- new line ------------")


// local scope
var u = 5
let v = 7
const w = 11

console.log(`global: ${u}`)
console.log(`global: ${v}`)
console.log(`global: ${w}`)

function myfunct() {
    var u = 23
    let v = 29
    console.log(`function: ${u}`)
    console.log(`function: ${v}`)
    console.log(`function: ${w}`)

    {
        console.log(`block: ${u}`)
        console.log(`block: ${v}`)
        console.log(`block: ${w}`)
    }
}
myfunct()
console.log("--------------------------- new line ------------")
console.log("--------------------------- new line ------------")


// local scope block
var l = 31
let m = 37
const n = 41

console.log(`global: ${l}`)
console.log(`global: ${v}`)
console.log(`global: ${w}`)

function myfuncti() {
    var l = 53
    let m = 57
    const n = 59
    console.log(`function: ${l}`)
    console.log(`function: ${m}`)
    console.log(`function: ${n}`)

    {
        var l = 65
        let m = 61
        const n = 67
        console.log(`block: ${l}`)
        console.log(`block: ${m}`)
        console.log(`block: ${n}`)
    }
}
myfuncti()

console.log("--------------------------- new line ------------")
console.log("--------------------------- new line ------------")


// var, let and cosnt scopes
var a = 71
let b = 73
const c = 79

console.log(`global: ${a}`)
console.log(`global: ${b}`)
console.log(`global: ${c}`)

function myfun() {
    var a = 83
    let b = 87
    const c = 89
    {
        var a = 91 // fucntion scoped, value available outside of the block but within the function
        let b = 93 // block scoped
        const c = 97 // block scoped
        console.log(`block: ${a}`)
        console.log(`block: ${b}`)
        console.log(`block: ${c}`)
    }
    console.log(`function: ${a}`)
    console.log(`function: ${b}`)
    console.log(`function: ${c}`)
}

myfun()