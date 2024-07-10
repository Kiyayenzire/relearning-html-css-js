console.log("welcome to the world")

// Restart Game button
var restarting = document.querySelector("#f")

// grabs all the squares
var theSquares = document.querySelectorAll("td")

// clears all the sqaures
function clearTheBoard() {
    for (var k = 0; k<theSquares.length; k++){
        theSquares[k].textContent = ""
    }   
}
restarting.addEventListener("click", clearTheBoard)


// check the square marker, raw way
var cellOne = document.querySelector("#one")
cellOne.addEventListener("click", function() {
    if (cellOne.textContent === "") {
        cellOne.textContent = "X"
    }else if (cellOne.textContent === "X"){
        cellOne.textContent = "O"
    }else {
        cellOne.textContent = ""
    }
})

var cellTwo = document.querySelector("#two")
cellTwo.addEventListener("click", function() {
    if (cellTwo.textContent === "") {
        cellTwo.textContent = "X"
    }else if (cellTwo.textContent === "X"){
        cellTwo.textContent = "O"
    }else {
        cellTwo.textContent = ""
    }
})

var cellThree = document.querySelector("#three")
cellThree.addEventListener("click", function() {
    if (cellThree.textContent === "") {
        cellThree.textContent = "X"
    }else if (cellThree.textContent === "X"){
        cellThree.textContent = "O"
    }else {
        cellThree.textContent = ""
    }
})

var cellFour = document.querySelector("#four")
cellFour.addEventListener("click", function() {
    if (cellFour.textContent === "") {
        cellFour.textContent = "X"
    }else if (cellFour.textContent === "X"){
        cellFour.textContent = "O"
    }else {
        cellFour.textContent = ""
    }
})


// // check the square marker
// function changeTheMarker() {
//     if (this.textContent === "") {
//         this.textContent = "X"
//     }else if (this.textContent === "X") {
//         this.textContent = "O"
//     }else {
//         this.textContent =""
//     }
// }

// // for loop to add event listeners to all the squares
// for (var k = o; k<theSquares.length; k++) {
//     theSquares[k].addEventListener("click", changeTheMarker)
// }
