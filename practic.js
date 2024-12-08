// // let age = 10;

// // if(age<=18){
// //     console.log(age + ' you are adult');
// // }else{
// //     console.log(age + ' you are minner');
// // }

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

// let temperature = 20;  

// if (temperature > 35) {  
//     console.log("It's extremely hot outside.");  
// } else if (temperature > 25 && temperature >15) {  
//     console.log("It's a warm day.");  
// } else if(temperature >= 10){
//     console.log("It's a very cold day")
// }else {  
//     console.log("It's a bit chilly outside.");  
// }

// console.log('temperature :', temperature);

// console.log(JSON.stringify({ x: 5, y: 6 }));
// // Expected output: '{"x":5,"y":6}'

// console.log(
//   JSON.stringify([new Number(3), new String('false'), new Boolean(false)]),
// );
// // Expected output: '[3,"false",false]'

// console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));
// // Expected output: '{"x":[10,null,null,null]}'

// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// // Expected output: '"2006-01-02T15:04:05.000Z"'



// let number = 11;

// if (number > 0 && number % 2 === 0) {
//     console.log("The number is positive and even.");
// } else {
//     console.log("The number is either non-positive or odd.");
// }


// let age = 30;
// let isMember = true;

// if (age >= 18 && isMember) {
//     console.log("Eligible for the offer.");
// } else {
//     console.log("Not eligible for the offer.");
// }

let isAuthenticated = true;
let isAdmin = false;

if (isAuthenticated && isAdmin) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// let age = 15;
// let hasLicense = true;
// let hasCar = true;

// if (age >= 18 && hasLicense && hasCar) {
//     console.log("You can drive.");
// } else {
//     console.log("You cannot drive.");
// }

// let age = 10;
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


let value = "10";  // string
let number = 10;   // number

if (value == number) {
    console.log("The value and number are strictly equal.");
} else {
    console.log("The value and number are not strictly equal.");
}

let isActive = true;

if (isActive === true) {
    console.log("The status is active.");
} else {
    console.log("The status is not active.");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

let fruits = ["apple", "banana", "cherry", "date"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbers = [10, 20, 30, 40, 50];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Stop the loop when i reaches 5
    }
    if (i === 3) {
        continue; // Skip the iteration when i is 3
    }
    console.log(i);
}

for(let i = 0; i<=10 ; i++){
    if (i%2 === 0) {
        console.log(i ,'this is a even Number')
    } else {
        console.log(i ,'this is a odd Number')
    }
}


for (let i = 1; i <=20; i++) {
    if(i%3 ===0 && i%5 ===0){
        console.log(i ,'this number is multipay by 3 and 5')
    }else if(i%3 ===0){
        console.log(i ,'this is multipy only 3')
    }else if(i%5=== 0){
        console.log(i ,'this is a multiply only 5')
    }else{
        console.log('this is not multiply 3 and 5', i)
    }
    
}
for (let i = 1; i <=100; i++) {
    if((i%3 ===0 && i%5 ===0) && i%9 ===0){
        console.log(i ,'this number is multipay by 3, 5, 9 ')
    }
}


let arr =[-2, -1, 0, 1, 2]

for(let i=0; i<arr.length; i++){
    if(arr[i]>0){
        console.log(arr[i] ,' is Positive');
    }else if(arr[i]<0){
        console.log(arr[i] , 'is Nigative');
    }else{
        console.log(arr[i] , 'Its Zero');
    }
}


for (let i = 0; i <10; i++) {
    if(i===5){
        console.log("Found 5, skipping to the next iteration.");
        continue;
    }else if(i===8){
        console.log("Found 8, stopping the loop.");
        break;
    }
    console.log(i);    
}