
let num1 = 20;
let num2 = 10;
console.log("Addition result : ", (num1 + num2)); // add two numbers
console.log("Subtraction result : ", (num1 - num2)); // subtract two numbers
console.log("Multiplication result : ", (num1 * num2)); // multiply two numbers
console.log("Division result : ", (num1 / num2)); // divide two numbers
console.log("Division result : ", (num1 % num2)); // remainder of two numbers

// Assignment operator
let counter = 0;
counter += 1;
console.log("Counter : ", counter);

counter -= 1;
console.log("Counter : ", counter);

// Comparison operator
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 == num2);
console.log(num1 === num2);

// Logical operator
let name = "John";
let age = 25;

if( name === "John" && age === 25){
    console.log("You can go.");
}
else if(name !== "John" && age > 20){
    console.log("You can go. But be careful.");
}
else {
    console.log("You can not go.");
}

let num = 11;

console.log( num >=0 ? "Positive" : "Negative");