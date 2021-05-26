
var - funciton scope
var uses hoisting
adds var i, x, y at the top of the program
Problematic as variables should have the least stuff that's needed
let - block scope

function var_setup() {
    console.log(x); //undefined
    var x = 100;
    console.log(x); //100
}
function let_setup() {
    console.log(x); //reference error
    let x = 100;
    console.log(x); //100
}

function let_setup2() {
    let x;
    console.log(x); //undefined
    x = 100;
    console.log(x); //100
}

const can't be reassigned & are efficient

function go(){}
const go = function(){} more efficient

//3. Arrow funcitons
shorthand notation ()=>
this keyword in JS
console.log(this); // in function setup this returns window

class Counter {
    constructor(start, wait) {
        console.log(this); //this returns counter object
        testfunc(increment); //Use arrow here
    }
    function increment() {
    console.log(); //this forgets the context in function returns Window
}   

//for each loop
for (bubble of bubbles) {

}

//higher order function - any func that takes a func or returns func
//also used to create a function t create funcs

function multiplier(factor) {
    // returns  afunction
    return function (x) {
        return x * factor;
    }
}


function multiplier(factor) {
    return x => x * factor
}

//map() enacts the function on the whole array rets new array
let vals =[2,4,6,8];
function doubler(){}
vals = vals.map(doubler);

//fill() fills arrays   

// reduce() executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

//sort(comparator) 1>'A'>'a'

//Callbacks https://javascript.info/callbacks
// TO execute the code when the call back is complete and API has returned the value

// https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

//Promise
