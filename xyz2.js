// Arrays

const myArray = []

myArray[0] = "Julian"
myArray[1] = 53
myArray[2] = false
console.log(myArray)
console.log("-                                -")

myArray.push("school")
console.log(myArray)
console.log("-                                -")

// return last item in the array and pop it out.
const lastItem = myArray.pop()
console.log(lastItem)
console.log(myArray)
console.log("                                ")

myArray.splice(1, 1, 43)
console.log(myArray)
console.log("                                ")

const theArray = ["asd", 57, false, 'wqwqe', 'A', 'C', 'T', 'L', 89]
const newArray = theArray.slice(2, 7)
console.log(newArray)

console.log("                                ")
console.log("                                ")
// Dimentional arrays

const sportsA = ['football', 'baseball', 'basketball', 'tennis']
const sportsB = ['volleyball', 'netball', 'badminton', 'swimming']

const clothingA = ['sweatpants', 't-shirts', 'shorts', 'shirts']
const clothingB = ['sneakers', 'head gear', 'track suit', 'swimming wear']

const sports = [sportsA, sportsB]
const clothing = [clothingA, clothingB]
console.log(sports)
console.log(clothing)
console.log(sports[1][3])
console.log("                                ")

const exercise = [sports, clothing]
console.log(exercise[0][0][2])