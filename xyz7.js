const todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList)

    inputElement.value='';
}


//////////////////////////////////////////////////
// console.log('********************************************')
// const nums = [1,2,2]
// let total = 0
// for(let j=0; j<nums.length; j++) {
//     const num = nums[j];
//     total += num;
// }
// console.log(total);

// const numsDoubled=[];
// for (i=0; i<nums.length; i++) {
//     const num = nums[i];
//     numsDoubled.push(num*2 );
// }
// console.log(numsDoubled);


//////////////////////////////////////////////////

const array1 = [1, 2, 3]
const array2 = array1
array2.push(5)

console.log(array1)
console.log(array2)
// arrays are references hence both updated to [1,2,3,5] with pushing 5 to array2

// to avoid this, make a copy of the values in array1 using slice as below
const array3 = array1.slice()
array3.push(7)
console.log(array1)
console.log(array3)


// console.log('********************************************')
//destcructuring an array
const [fisrtsValue, secondValue] = [1, 2, 3]


console.log('********************************************')
//break - stops the loop from continuing, stops loop early
for (let i=1; i<=10; i++){
    console.log(i)
    if (i == 8) {
        break
    }
}

console.log('********************************************')
//continue - lets skip 1 iteration of the loop, e.g. lets skip 3
for (let j=11; j<=20; j++){
    if (j == 13) {
        continue
    }
    console.log(j)
    if (j == 17) {
        break 
    }
}


console.log('********************************************')
// skip if number is divisible by 3
for (let k=20; k<=35; k++){
    if (k % 3 == 0) {
        continue
    }
    console.log(k)
    if (k == 31) {
        break 
    }
}


console.log('********************************************')
// while loop, increment step comes before the continue as it will lead to an endless loop

// let l = 1
// while (l <= 10) {
//     if (l % 3 == 0) {
//         l++
//         continue
//     }
//     console.log(l)
// }




console.log('********************************************')
///////////////////////////////////////////////////////////

function doubleArray (nums) {
    const numsDoubled=[];

    for (i=0; i<nums.length; i++) {
        const num = nums[i];
        if (num == 0) {
            //break;
            return numsDoubled; // another way of breaking out of a loop when its inside a function
        }
        numsDoubled.push(num*2 );
    }
    //console.log(numsDoubled);
    return numsDoubled
}
//doubleArray([2, 8, 8, 9])
console.log(doubleArray([5, 9, 0, 2, 4]))

 

console.log('********************************************')
///////////////////////////////////////////////////////////
console.log('Arrow Functions')

const regularFunction = function(param1, param2) {
    console.log('hello')
}
regularFunction()

const arrowFunction = (param1, param2) => {
    console.log('hello1')
}
arrowFunction();