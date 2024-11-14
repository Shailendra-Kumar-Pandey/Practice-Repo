const baseUrl = "https://jsonplaceholder.typicode.com/users";
let contDiv = document.querySelector(".userData");

const data = async () => {
  let response = await fetch(baseUrl);
  let userDatas = await response.json();
  console.log(userDatas);
  getData(userDatas);
};

data();

function getData(userArr) {
  userArr.forEach((user) => {
    // Create a new div for each user
    let nestDiv = document.createElement("div");
    
    // Set the innerText with user information
    nestDiv.innerText = `Name: ${user.name}\n Email:${user.email}`;
    
    // Append the user div to the container
    contDiv.appendChild(nestDiv);
  });
}

// let para = document.querySelector("p");


//     for (let i = 1; i < 20; i++) {
//        let num = i;
//                console.log(num);
//     para.innerText = num;

//      for (let j = 0; j < num.length; j++) {
//           //  let primeNum = i %2 == 1;
//           //  console.log(j);     
                
//          }  
//     }

//     let paraGetPrimeNumber = document.querySelector("p");

// let output = ""; // Initialize an empty string to accumulate the numbers

// for (let i = 1; i < 20; i++) {
//     let num = i;
//     console.log(num);
//     output += num + " "; // Append the current number to the output string
// }

// // Set the accumulated numbers as the inner text of the paragraph
// paraGetPrimeNumber.innerText = output.trim(); // Trim to remove any trailing spaces

let paraGetPrimeNumber = document.querySelector("p");

let output = ""; // Initialize an empty string to accumulate prime numbers

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible by any number, it's not prime
    }
    return true; // Number is prime
}

for (let i = 1; i < 10; i++) {
    if (isPrime(i)) {
        // console.log(i); // Log the prime number
        output += i + " "; // Append the prime number to the output string(//output = output + i)
    }
}

// Set the accumulated prime numbers as the inner text of the paragraph
paraGetPrimeNumber.innerText = output.trim(); // Trim to remove any trailing spaces




/* only using for loop then print of for loop in console window */

for (let i = 2; i < 20; i++) {
  let isPrimeData = true; // Assume the number is prime

  for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
          isPrimeData = false; // If divisible, it's not prime
          break; // Exit the inner loop
      }
  }

  if (isPrimeData) {
      console.log(i); // Print the prime number
  }
}


let arr = [0, 1, 2, 3, 4];

let res = arr.filter((e)=>{
  return e<3
}).map((d)=>{
  return d *2
}).reduce((c)=>{
  return c +1
})
    console.log(res);














for(let i=0 ; i<20; i++){
  let prime = true;
  for(let j=2; j<=Math.sqrt(i); j++ ){
    if (i % j == 0){
      prime = false;
      break;
    }
  }
  if(prime){
    console.log("prime Number: " + i);
  }
}
