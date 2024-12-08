// for in loop using example

const person ={
    name: 'Jeetu',
    age:25,
    city:'New York'
};

for(const key in person){
    console.log(key, person[key]);
}

const fruits = ['apple', 'banana', 'orenge'];

for (const index in fruits){
    console.log(index, fruits[index]);
}

const arr = [1, 2, 3];
arr.foo = 'bar';

for(const index in arr){
    console.log(index, arr[index]);
}

const car = {
    make: "Toyota",
    model: 'Corolla',
    year: 2020
};

for(const key in car){
    console.log(`${key}: ${car[key]}`)
};


// for in loop with if condition using example

const person1 ={
    name: 'Jeetu',
    age:25,
    city:'New York',
    height: 165
};

for(const key in person1){
    if(typeof person1[key] === 'number'){
        console.log(`${key}: ${person1[key]}`);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(const index in numbers){
    if(numbers[index] % 2 !== 0){
        console.log(numbers[index]);
    }
}


const product = {
    name: 'Laptop',
    price: 1000,
    category: 'Electronics',
    discount: 0.1
};

for(const key in product){
    if(key !== 'discount'){
        console.log(`${key}: ${product[key]}`);
    }
}


// for...of loop usnig example


const datas = ['data1','data2','data3','data4'];

for(const data of datas){
    console.log(datas);
}


const word = 'Hello';

for(const char of word){
    console.log(word);
}


const map = new Map([
    ['name','Alice'],
    ['age', 25],
    ['city','india']
]);

for (const [key, value] of map){
    console.log(`${key}: ${value}`);
}



// for...of loop with if statement condition using example


const lloyd = "javascript";

for (const char of lloyd){
    if('aeiou'.includes(char)){
        console.log(char);
    }
}


const items = new Map([
    ['Laptop', 1200],
    ['Phone', 800],
    ['Tablet', 200],
    ['Charger', 30]
  ]);
  
  for (const [item, price] of items) {
    if (price > 100) {  // Check if the price is greater than 100
      console.log(`${item}: $${price}`);
    }
  }
  

  const numbersSet = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

for (const number of numbersSet) {
  if (number > 5) {  // Check if the number is greater than 5
    console.log(number);  // Print numbers greater than 5
  }
}

const addNumbers = [10, 15, 30, 45, 50];

for (const number of addNumbers) {
  if (number % 10 === 0) {  // Check if the number is divisible by 10
    console.log(number);     // Print numbers divisible by 10
  }
}

