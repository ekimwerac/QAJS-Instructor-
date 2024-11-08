for(let i = 1; i < 10; i++) {
    console.log(i);
}

let x = 2;
let loopCounter = 0;

while(x < 10000) {
    x *= x;
    loopCounter++;
    console.log(`x is ${x}`);
    console.log(`loopCounter is ${loopCounter}`);
}

let y = 1;
while (y < 10) {
  y += 1;
  console.log(`The value of y is ${y}`);
  y++;
}

// Extras: for ... in  iterates the key in k/v pairs
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log(key, object[key]); // Output: a 1, b 2, c 3
}

// Extras: for ... of  ... iterates the value in k/v pair
let array = ['A', 'B', 'C'];
for (let value of array) {
    console.log(value); // Output: A, B, C
}