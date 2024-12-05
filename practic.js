let age = 10;

if(age<=18){
    console.log(age + ' you are adult');
}else{
    console.log(age + ' you are minner');
}

let a = 5;
let b = 10;

console.log("Before calculation: a =", a, "b =", b);  // Logs values of a and b before calculation

let sum = a + b;

console.log("After calculation: sum =", sum);  // Logs the result of the calculation

if (sum > 10) {
    console.log("Sum is greater than 10");
} else {
    console.log("Sum is 10 or less");
}

let temperature = 20;  

if (temperature > 35) {  
    console.log("It's extremely hot outside.");  
} else if (temperature > 25 && temperature >15) {  
    console.log("It's a warm day.");  
} else if(temperature >= 10){
    console.log("It's a very cold day")
}else {  
    console.log("It's a bit chilly outside.");  
}

console.log('temperature :', temperature);

console.log(JSON.stringify({ x: 5, y: 6 }));
// Expected output: '{"x":5,"y":6}'

console.log(
  JSON.stringify([new Number(3), new String('false'), new Boolean(false)]),
);
// Expected output: '[3,"false",false]'

console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));
// Expected output: '{"x":[10,null,null,null]}'

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// Expected output: '"2006-01-02T15:04:05.000Z"'



let number = 11;

if (number > 0 && number % 2 === 0) {
    console.log("The number is positive and even.");
} else {
    console.log("The number is either non-positive or odd.");
}


let age = 30;
let isMember = true;

if (age >= 18 && isMember) {
    console.log("Eligible for the offer.");
} else {
    console.log("Not eligible for the offer.");
}

let isAuthenticated = true;
let isAdmin = false;

if (isAuthenticated && isAdmin) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

let age = 15;
let hasLicense = true;
let hasCar = true;

if (age >= 18 && hasLicense && hasCar) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}

let age = 10;
let isMember = false;

if (age < 18 || !isMember) {
    console.log("You are not eligible for the offer.");
} else {
    console.log("You are eligible for the offer.");
}

let age = 25;
let hasPermission = false;

if (age < 18 || !hasPermission) {
    console.log("Access denied.");
} else {
    console.log("Access granted.");
}

let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("Time to relax!");
} else {
    console.log("Time to work.");
}
