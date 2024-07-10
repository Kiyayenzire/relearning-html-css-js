var car = { type:"Faiat", model:500, color:"white"}
console.log(car)
console.log(car["color"]) // different from python, accessing the key needs quotes and declaring them doesnt need quotes

var myNewObject = {a:"hello", b:[1, 2.3, 4, 5.6], c:{inside:['a', 'b', 'd', 'hello', 'g']}}
console.log(myNewObject)

// accessing objects of this array

// myNewObject['c']['inside'][2]
// 'd'         <---------------answer
// myNewObject['b'][2]
// 4          <---------------answer


// changing valuess coresponding to the value
// car['color'] = "grey"
// 'grey'         <---------------answer

// {type: 'Faiat', model: 500, color: 'white'}
// jsProjectObjects.js:3 white
// jsProjectObjects.js:6 {a: 'hello', b: Array(4), c: {…}}
// car
// {type: 'Faiat', model: 500, color: 'white'}
// car['model'] =+ 1
// 1
// car
// {type: 'Faiat', model: 1, color: 'white'}
// car['model'] += 1
// 2
// car
// {type: 'Faiat', model: 2, color: 'white'}



// // seeing the entire object
// console.dir(car)
// Objectcolor: "white"model: 2type: "Faiat"[[Prototype]]: Object         <---------------answer
// undefined


// iterating through an objects
// for (key in car){
//     console.log(key)
// }
// type      <---------------answer
// model         <---------------answer
// color     <---------------answer
// undefined



// for (k in car){
//     console.log(k)
//     console.log(car[k])
// }
// type       <---------------answer
// Faiat       <---------------answer
// model        <---------------answer
// 2               <---------------answer
// color       <---------------answer
// white      <---------------answer




// *******************object methods
var myObject = {
    property:37,
    reportProp:function(){
        return this.prop
    }
}
console.log(myObject.reportProp())
