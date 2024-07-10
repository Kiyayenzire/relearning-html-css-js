// Classes in JS
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType
        this.size = pizzaSize
        this.crust = "orignal"
        this.toppings = []
    }
    get pizzaCrust() {  // you can create a method called getCrust instead of get keyword like in next example, it eases reading code
        return this.crust
    }
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    getToppings() {
        return this.toppings
    }
    setToppings(topping) {
        this.toppings.push(topping)
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`)
    }
}

const myPizza = new Pizza("pepperoni", "thin")
// myPizza.type = "supreme" // not desirable, we dont want to access these elements like that, use getters and setters
myPizza.pizzaCrust = "sausage"
myPizza.bake()
console.log(myPizza.type)
myPizza.setToppings("tomatoes")
myPizza.setToppings("olives")
console.log(myPizza.getToppings())

class SpecialityPizza extends Pizza {
    constructor(pizzaSize){
        super(pizzaSize)
        this.method = "rosted"
    }
    slice() {
        console.log(`our ${this.method} ${this.size} pizza has 8 slices`)
    }
}
const mySpeciality = new SpecialityPizza("medium")
mySpeciality.slice()


console.log("                                               ")
class Car {
    constructor (brandName) {
        this.brandName = brandName
    }
    present() {
        return 'i have a ' + this.name
    }
}

class Model extends Car {
    constructor(brandName, modelNumber) {
        super(brandName)
        this.model = modelNumber 
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
let myCar = new Model ("Audi", "i8")
console.log(myCar.show())