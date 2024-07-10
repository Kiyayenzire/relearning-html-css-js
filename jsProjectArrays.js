//-----------Array's problem-------------
var roster = []
// add a studen to a roster
function addNew(){
    var newName = prompt("what name would you like to add to the roster?")
    roster.push(newName)
}
// removing the student, removing an element from the array
 function remove() {
    var removeName = prompt(" what name would you like to remove?")
    var index = roster.indexOf(removeName);
    roster.splice(index, 1)
 }
 function display() {
    console.log(roster)
 }


//  -------------web app for information

 var start = prompt(" woukld youlike to start the roster web app? y/n")
 var request = "empty"

 if (start === 'y') {
    while (request !== "quit") {
        request = prompt("please select an action: add, remove, display or quit")
        if (request === "add") {
            addNew()
        }
        else if (request === "remove") {
            remove()
        }else if (request === "display") {
            display()
        }else {
            alert("action not recognised")
            break
        }
    }
 } else {
    alert ("thank you ")  /// happens when someone types N or anything else
 }

