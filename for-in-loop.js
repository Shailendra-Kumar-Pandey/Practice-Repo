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


// for each loop using practic

const numberArray = [1, 2, 3, 4, 5];

numberArray.forEach(function (number) {
    console.log(number);    
});



const fDatas = ['apple','banana','orenge'];

fDatas.forEach(function(fData, index){
    console.log(index, fData);
});


const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});


const firstNum =[1, 2, 3, 4, 5];

firstNum.forEach(function(first, index, arr){
    arr[index] = first * 2;
})

// console.log(firstNum);

const data2 = firstNum;
console.log(data2);


// object function using example

// const object = {
//     key: value,  // regular property
//     method: function() {  // function (method) as property
//       // code to be executed
//     }
//   };
  

const class10 = {
    firstName: 'Jeetu',
    lastName: 'Pandey',
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);        
    }
};

class10.greet();


const person88 = {
    firstName: "Jane",
    lastName: "Smith",
    greet: () => {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
  };
  
  person88.greet(); // Calling the method
  

  const class11 = {
    firstName: 'Jeetu',
    lastName: 'Pandey',
    greet: function (greeting) {
        console.log(`${greeting}, my name is ${this.firstName} ${this.lastName}`);        
    }
};

class11.greet('Hi good mornig');


const pandeyJi ={
    name: 'Shailendra',
    last: 'Pandey',
    age: '28',
    birthday: function(){
        this.age++;
        console.log(`Happy Birthday,${this.name} ${this.last}! You are now ${this.age} years old`);
    }
}

pandeyJi.birthday();
pandeyJi.birthday();



const company ={
    make: 'Toyota',
    model: 'Camry',
    year: 2010,
    getCarInfo: function(){
        return `${this.year} ${this.make} ${this.model}`;
    }
};

console.log(company.getCarInfo());

company.getCarInfo();


function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    };    
}

const person3 = new Person ('Shailendra', 'Singh');
const person4 = new Person('Gayatri', 'Sharma');

person3.greet();
person4.greet();
console.log(person3);