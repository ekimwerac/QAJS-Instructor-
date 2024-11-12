//Slide 1
// JavaScript Fundamentals
//   - Functions
// - What are functions?
//   - Creating functions
//   - Calling functions
// - Scope
//   - What is scope?
//   - Functions and scope

//Slide 2
// Functions are one of the most important concepts in JavaScript
//   - Functions allow us to block out code for execution when we want
//   - Instead of it running as soon as the browser processes it
// - Also allows us to reuse the same operations repeatedly
//   - Like console.log();
// - Functions are first-class objects and are actually a type of built-in type
//   - The keyword function actually creates a new object of type Function

//Slide 3
// Functions – about
// - The function keyword is used to create JavaScript functions
// - Parameters may be passed into a function
//   - It may optionally return a value

/*
function sayHello() {
    alert("Hi there!");
}

function sayHelloToSomeone(name) {
    alert(`Hi there ${name}!`);
}

function returnAGreetingToSomeone(name) {
    return `Hi there ${name}!`;
}
*/

//Slide 4
// Functions once created can be called
//   - Use the function name
//   - Pass in any parameters, ensuring the order
// - If the function returns, pass back result
//   - Parameters are passed in as value based
// - The parameter copies the value of the variable
//   - For a primitive, this is the value itself
//   - For an object, this is a memory address

// sayHello();
// sayHelloToSomeone("Dave");
// let r = returnAGreetingToSomeone("Adrian");
// console.log(r);
// console.log(returnAGreetingToSomeone("Adrian"));

//Slide 5
// Can be declared as const (or let) setting a variable name to be a function
// Syntax: function name(args) => return value;

//Slide 6
// Arrow Functions
// - scope name = () => implicit return;            // no arguments
// - scope name = arg => implicit return;           // single argument
// - scope name = (arg1, arg2) => implicit return;  // multiple arguments
// - scope name = (...args) => (implicit return);   // rest arguments and bracketed return
// - scope name = () => {                          // code block with optional defined return

//Slide 7
// Arrow functions - examples
//
// const noArgFnImpRet = () => `Hello World from no arg fn`;  // returns `Hello World` when called
// const noArgFnCodeBlk = () => {
//   let a = 99;
//   return a;
// };
// const sglArgFn = arg => { console.log(arg); }  // outputs value of arg
// const multiArgFn = (num1, num2) => (num1 * num2);  // outputs value when called


// console.log(noArgFnImpRet());
// sglArgFn("Hello From Single Arg Function");

// console.log(noArgFnCodeBlk());
// console.log("12 x 12 is: " + multiArgFn(12, 12));

//Slide 8
// Default values were a long-standing problem with a fiddly solution
// - Can provide a value for the argument and if none is passed to the function, it will use the default
// - If the last named argument of a function is prefixed with ... then it’s value and all further values passed to the function will be captured as an array

// When using forEach on an array in JavaScript,
// - the callback function receives 1, 2 or 3 arguments:
// Current Element (curElement):
// - The value of the element currently
// - Index of Current Element (index)
// - Whole Array (array)

//3 arg example
/*
let arr = [10, 20, 30];
arr.forEach((element, index, array) => {
    console.log("Current Element:", element);
    console.log("Index:", index);
    console.log("Whole Array:", array);
});

function doSomething(arg1, arg2, arg3=5) {
    return (arg1 + arg2 + arg3);
}
console.log(doSomething(5,5)); //15

function multiply(arg1, ...args) {
    args.forEach((arg, i, array) => array[i] = arg * arg1);
    return args;
}
console.log(multiply(5,2,5,10));  //[10,25,50], 5 = arg1, [2, 5, 10] = ...args

*/

//Slide 9
// Scope defines where variables can be seen
// - Use the let keyword to specify scope to the current block
// - If you don't use let, then variable has 'global' scope

/*
function test() {
    flag = true;
    alert(flag);
    test1();
    alert(flag);
}

function test1() {
    flag = false;
    return;
}
*/

//Slide 10
// In the code sample to the left the flag variable is explicitly defined at global level
// - In the code sample to the right it is declared in the scope of test
// - Can test1 see it?

//Slide 11
// Scope Chains define how an identifier is looked up
// - Start from inside and work out
// - What happens if there is not a local or global variable?
//   - One is added to global scope!

//Slide 12
// The global object
// - Global object for client-side JavaScript is called window
// - Global variables created using the var keyword are added as properties on the global object (window)
//   - Global functions are methods of the current window
// - Global variables created using the let keyword are NOT added as properties on the window

/*
var a = 7; alert(b);
window.a = 7; window.alert(b);
*/

//Slide 13
// REVIEW
// Functions allow us to create re-usable blocks of code
// Scope is a critical concept to understand and utilise in your JavaScript programming career
// Functions are first-class objects, meaning we can pass them round as we would other objects and primitives
