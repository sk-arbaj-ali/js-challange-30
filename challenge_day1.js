
var challenge = "JavaScript Challenge";
console.log(challenge)
let day_count = "Day 1"
console.log(day_count)

const isCompleted = false;
console.log("is the challenge completed ? -> ", isCompleted);

// different data types
let data1 = 10;
let data2 = "String";
let data3 = true;
let data4 = {
    "name":"sk arbaj ali",
    "age":24
};
let data5 = ["red","green","blue"];
console.log("Type of data1 is : ", typeof data1);
console.log("Type of data2 is : ", typeof data2);
console.log("Type of data3 is : ", typeof data3);
console.log("Type of data4 is : ", typeof data4);
console.log("Type of data5 is : ", typeof data5);
/* 
    Arrays in JavaScript are special type of objects
    That's why typeof operator returns "object" for an array.
    So, how can we check if it is an array ?
    => we can use Array.isArray() method to check for an array.
    => it will return true if it is an array otherwise false.
*/
console.log("Is the type of data5 confirms to be an array ? -> ", Array.isArray(data5));

// reassigning variables
let laptop = "Dell";
laptop = "Lenovo";
console.log("laptop: ", laptop);

const searchWith = "Google";
// searchWith = "Bing"; // This line will produce error.
// reassigning to an constant is prohibited.

// Feature request 1
let info1 = 10;
let info2 = "String";
let info3 = true;
let info4 = {
    "name":"sk arbaj ali",
    "age":24
};
let info5 = ["red","green","blue"];
console.log(`value : ${info1} and type : ${typeof info1}`);
console.log(`value : ${info2} and type : ${typeof info2}`);
console.log(`value : ${info3} and type : ${typeof info3}`);
console.log(`value : ${info4} and type : ${typeof info4}`);
console.log(`value : ${info5} and type : ${typeof info5}`);
/*
    A function can be used here but as this is the first challenge
    I have not used it.
    I have used template literal syntax here to interpolate the values
    in the final output string.
*/