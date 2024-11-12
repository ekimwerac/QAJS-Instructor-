//Creating Arrays
// by default accessed by numeric index
let a = Array(); //No elements no data
let b = Array(10); //10 elements of undefined
let c = Array("Tom", "Dick", "Harry");//3 strings elements
let d = [1,2,3];//3 integers(numbers)

// console.log() the a array
// for (let i=0; console.log("i: "+ i + ", a.length: "+ a.length), i< a.length; i++) {
//     console.log(a[i]); // not executed for a, a is zero length
// }

// consol.log() the b array
// for (let i=0; i< b.length; i++) {
//     console.log(b[i]);
// }

// Sparse Array -> intermediate elements 'undefined' 
// a[0] = "Mary";
// a[2] = "Mungo";
// a[5] = "Midge";
// for (let i=0; i< a.length; i++) {
//     console.log(a[i]);
// }

//Sparse Array of predefined size
b[0] = "Mick";
b[2] = "Mac";
b[4] = "Paddy";
b[6] = "Wack";

// // Classic for loop
// console.log("Classic/Standard 'for' loop")
// for (let i=0; i< b.length; i++) {
//     console.log(b[i]);
// }

// // 'Enhanced for "of" loop' iterating element values
// console.log("Enhanced for 'of' loop")
// for (let personName of b) {
//     console.log("The Person's name is: " + personName);
// }

// 'Enhanced for "in" loop' iterating element indices
// console.log("Enhanced for 'in' loop")
// for (let personIndex in b) {
//     console.log("The Person's Position is: " + personIndex);
// }

// //Slide 6
// //Array methods
//let fruit = ['Apples', 'Pears', 'Bananas', 'Oranges'];
// console.log(fruit);

// // <string>.join() returns a string
// let fruitString = fruit.join("---");
// //fruit is unchanged
//console.log(fruit);

// // Apples---Pears---Bananas---Oranges
// console.log(fruitString);

// // //Array object reverse() method
// console.log("Before: "+fruit);
// let revfruit=fruit.reverse();
// console.log("After: "+revfruit);

// // Array object sort() method: default Alpha sort
// let sortedFruit = fruit.sort();
// console.log(sortedFruit);

// // Array object sort() method: compare function provided
// // compare(a, b) and should:
// //       1) return a value less than 0 if a < b,
// //       2) return 0 if a == b,
// //       3) return a value greater than 0 if a > b
// // This example uses an arrow function (a lambda)
// let lengthSortedFruit = fruit.sort((a, b) => a.length - b.length)
// console.log(lengthSortedFruit);


// // Slide 7: pop() and push() methods
// // The push() method
// //  - Adds a new element to the end of the array
// //  - Array’s length property is increased by one
// //  - This method returns the new length of the array
// fruit=undefined;
// fruit = ['Apples', 'Pears', 'Bananas', 'Oranges'];
// console.log("Fruit Length is: " + fruit.length); //4
// // push()
// console.log(fruit.push('Lemons')); //5

// // // ['Apples', 'Pears', 'Bananas', 'Oranges', 'Lemons']
// console.log(fruit);
// console.log("Fruit Length is: " + fruit.length + " after fruit.push('Lemons')")
// // pop()
// console.log("pop() removes the last element added: " + fruit.pop());
// console.log("fruit is now: " + fruit);
// console.log("Fruit Length is: " + fruit.length + " after fruit.pop()")

// Slide 9:
// unshift():
// - Adds a new element to the beginning of the array
// - Array’s length property is increased by one
// - This method returns the new length of the array
// fruit=undefined;
// fruit = ['Apples', 'Pears', 'Bananas', 'Oranges'];
// console.log(fruit);
// console.log(fruit.unshift('Kiwis')); //5
// console.log(fruit);//['Kiwis','Apples', 'Pears', 'Bananas', 'Oranges']

//Slide10:
// shift()
// - removes the first element from the beginning of the array
// - Array’s length property is decreased by one
// - This method returns the array element that was removed
// fruit = ['Apples', 'Pears', 'Bananas', 'Oranges'];
// console.log(fruit); //['Apples', 'Pears', 'Bananas', 'Oranges']
// console.log("Shift(): "+ fruit.shift()); //Apples
// console.log(fruit); //['Pears', 'Bananas', 'Oranges']

// Slide 11: ES2015 New methods
// Array.from() creates a real Array out of array-like objects
//let formElements = document.querySelectorAll("input, select, textarea");

// // Converting NodeList to Array for manipulation
// formElements = Array.from(formElements);

// // Adding a new element (example) to demonstrate push functionality
// const anotherElement = document.createElement("input");
// anotherElement.type = "text";
// anotherElement.name = "extraField";
// anotherElement.placeholder = "Extra Field";

// // Push the new element into the array
// formElements.push(anotherElement);

// // Display elements in console for verification
// console.log("Form Elements:", formElements);

// Array.prototype.find()
// returns the first element for which the callback returns true
// A callback is a function passed to another function
//  – the one shown below is an example
// the callback is defined as an anonymous function
// console.log([`Chris`,`Bruford`,22].find(function(n) { return n === `Bruford`})); // Bruford

// let myArray = [`Chris`,`Bruford`,22];
// console.log(myArray.find(function(n) { return n === `Bruford`}));

// // Slide12:
// // Similarly findIndex() returns the index of the first matching element
// console.log("Index is: " + myArray.findIndex( n => n === `Bruford`)); // 1

// // // fill() overrides the specified elements
// myArray=[`Chris`,`Bruford`,22,true];
// console.log(myArray.fill(null)); 	// [null,null,null,null]
// myArray=[`Chris`,`Bruford`,22,true];
// console.log(myArray.fill(null,1,2));	// [`Chris`,null,null,true]


// Slide 13:
// .entries(), .keys() & .values() each return a sequence of values via an iterator:
// let arrayEntries = [`Chris`,`Bruford`,22,true].entries();
// console.log(arrayEntries.next().value);	// [0,`Chris`]
// console.log(arrayEntries.next().value);	// [1,`Bruford`]
// console.log(arrayEntries.next().value);	// [2,22]
// console.log(arrayEntries.next().value);	// [3, true]

// // .keys()
// let arrayKeys = [`Chris`,`Bruford`,22,true].keys();
// console.log(arrayKeys.next().value);		// 0
// console.log(arrayKeys.next().value); 		// 1
// console.log(arrayKeys.next().value); 		// 2

// // .values()
// let arrayValues = [`Chris`,`Bruford`,22,true].values();
// console.log(arrayValues.next().value); 	// `Chris`
// console.log(arrayValues.next().value); 	// `Bruford`
// console.log(arrayValues.next().value); 	// 22

// Slide 14:
// for ... of loop
// The for-of loop is used for iterating over iterable objects
// - (more on that later!)
// For an array it means we can loop through the array
// - returning each element in turn
//will print 1 then 2 then 3

// let myArray = [1,2,3,4];
// for (el of myArray) {
//     if (el === 3) break;
//     console.log(el);
// }

// We could also loop through any of the iterables
// - returned by the methods
//   - .entries()
//   - .values()
//   - .keys()
// function myFunction(item, index) {
//   text += index + ": " + item + "<br>";
// }

// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// document.getElementById("output").innerHTML = text;
  


