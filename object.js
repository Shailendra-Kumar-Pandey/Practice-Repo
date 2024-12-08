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