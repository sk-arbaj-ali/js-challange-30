// check positive, negative or zero
let num = 12;
if (num > 0){
    console.log("Number is positive.");
}
else if(num < 0){
    console.log("Number is negative.");
}
else{
    console.log("Number is zero.");
}

// check voting eligibility criteria
let age = 18;
if (age >= 18){
    console.log("You can vote.");
}
else{
    console.log("You can not vote.");
}

// printing the day of the week
let day = 2;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("You have given a wrong number.");
}