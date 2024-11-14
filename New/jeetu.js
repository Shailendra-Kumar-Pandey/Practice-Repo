// let age = 25;
// age>18 ? console.log("adault") : console.log("not adult");


// let num = prompt("write the any Number");
// if (num % 5 == 0){
//     alert(num + " it is the multiple of 5");
// }else{
//     alert(num + " it is not the multiple of 5");
// }


/* Write a code which can give grades to student accordding 
to their scores:
-90-100,A
-70-89,B
-60-69, C
-50-59, D
-0-49,F*/

// let student = prompt("enter tha giving examination mark then Find out the value of Grade");
// if (student>=90 && student<=100){
//     alert(student + " Your Grade is A");
// }else if (student >=70 && student<90){
//     alert(student + " Your Grade is B");
// }else if (student >=60 && student<70){
//     alert(student + " Your Grade is C");
// }else if(student >=50 && student<60){
//     alert(student + " Your Grade is D");
// }else /*if(student >=0 && student <50)*/{
//     alert(student + " Your Grade is Fail(F)");
// }


// Calculate sum of 1 of 5


// let sum = 0;

// for (let i = 0; i < 5; i++) {
    
//      sum = sum +i ;
    
// }

// console.log(sum);

//do while loop

// let i = 11;
// do {
//     console.log("i",i)
//     i++
// } while (i<=10);


// for of loop

// let dataName = "shailendra";

// let size = 0;

// for(let val of dataName){
//     console.log(val);
//     size ++
// }

// console.log(size);


// for in loops 

// const profile ={
//     name:"shailendra",
//     age : 24,
//     married : "yes"
// };

// for(let key in profile){
//     console.log(key,profile[key])
// }


// Print all even number for 0 to 100


// for(let i=0; i<=100; i++){
//     if(i%2==0){
//     console.log(i);
//     }
// }



// let gameNum = 25;

// let userNum = prompt("Dear user please tha correct number of tha Game : ");

// console.log(userNum);

// while (userNum != gameNum) {

//     userNum = prompt("You enter number its wrong. enter again: ");

    
// }

//  alert("Congratulation my dear user");

// Prompt the user to enter their full name. Generate a username for them for them based on input.Start username with @, follwed by their full name and ending with the fullname length.
//eg:user name = "shailendrapandey", username should be "@shailendrapandey16"


// let fullName = prompt("Enter the Fullname without spacing");let userName = "@"+fullName+fullName.length;

// console.log(userName);


//aaray

// let fullName=["Papa","Dada","Mummy","Bhabhi","Navam","Nayan","shailendra","gayatri"]
// for(let i=0; i<fullName.length; i++){
//     console.log(fullName[i]);
// }


// // for of loop

// for(let val of fullName){
//     console.log(val.toUpperCase());
// }

// For a given array with marks of Students ->[85,97,44,37,76,60]
//Find the average marks of the entire class


// let marks=[85,97,44,37,76,60];

// let sum = 0

// for (let i of marks) {
//     sum = sum + i;
// }

// console.log(sum);

// let avg = sum/marks.length;

// console.log(`avg marks of all Class Student ${avg}`);


// for a given array with price of 5 items ->[250,645,300,900,50]
// all items have on offers of 10% on them change the array to store final price applying offer. 

// let price =[250,645,900,300,50];

// let i= 0;

// for (let val of price){
//      let offer= val/10;
//     price[i]= price[i]-offer;
//     console.log(`value after offer =${price[i]}`)
//     i++
// }
// console.log(price)

// for (let i = 0; i < price.length; i++) {
//     let offer = price[i] /10;
//     price[i] -= offer;
// }
// console.log(price);

/* Create an array to store companies-> "bloomberg","Microsoft","Uber","Google","IBM","Netflix"
a. Remove the first company from the array
b. remove Uber & Add Ola in its place
c. Add Amazon at the end */

// let companies = ["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // a. its is complete
// companies.shift();

// console.log(companies)

// // b . complete the Question b.
// companies.splice(1,1,"Ola");
// console.log(companies);

// // C. its the anser of question c

// companies.push("Amazon");
// console.log(companies);



// allow function

// const multiPle =(x,y)=>{
//     console.log(x*y);
// }

// multiPle(5,20);



// Create a function using the "function" keyword that takes a astring as an argument & returns the number of vowels in the string 



// function vowelC(str) {
//     let count = 0 ;
//     for (const c of str) {
//         if(c ==="a" || c === "e" || c === "i" || c === "o" || c === "u"){
//             count++;
//         }
        
//     }
//     return count;
// }



// console.log(vowelC(" shailendra pandey radhe radhe"));


// let value =(strT)=>{
//     let count = 0 ;
//     for (const c of strT) {
//         if(c ==="a" || c === "e" || c === "i" || c === "o" || c === "u"){
//             count++;
//         }
        
//     }
//     return count;
// }

// console.log(value("dada"));



//for each loop

//  for a given array of numbers print the square of each value using the forEach loop

// let nums = [1,2,3,4,5,6,7];

// nums.forEach((val) => {
//     console.log(val*val);
// });

// let callArea = (num)=>{
//     console.log(num*num);
// }


// nums.forEach(callArea);


// console.log(nums);


//we are given of marks of students Filter out of the marks of students that scored 90+

// let marks = [83,78,99,94,65,91,57];

// let highest= marks.filter((mark)=>{
//     return mark>90;
// })

// console.log(highest);


// Take a number n as input from user. Create an array of numbers from 1 to n. User the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.


// let num = prompt("Hello dear polease enter number : ");

// let arr =[];

// for(let i=1; i<=num; i++){

//     arr [i-1] = i;
// }

// console.log(arr)

// let sum = arr.reduce((prv,cur)=>{
//     return prv + cur;
// });

// console.log(sum)

// let multi = arr.reduce((prv,cur)=>{
//     return prv * cur;
// });

// console.log(multi);

// Create a H2 heading element with text - "Hello JavaScript" . Append "from Apna College student" to this text using JS.


// let h2 = document.querySelector("h2");

// h2.append("from Apna College student");


// h2.innerText = h2.innerText + " from Apna College student"




// Create 3 div with common class name - "box". Access them & add some unique text to each of them


// let div = document.querySelectorAll(".box");
// let idx = 1;
// for(let e of div){
//     e.innerText = ` papa ki jaan ${idx}`;
//     idx++
// }


// div[0].innerText = "papa";
// div[1].innerText = "dada";
// div[2].innerText = "mai";


// Create a new nutton element.Give it a text "click me", background color of red & text color of white.
//Insert the button as the first element inside the body tag

// let btn = document.createElement("button");
// btn.innerText="click me";
// btn.style.backgroundColor="red";
// btn.style.color="white";

// document.querySelector("body").prepend(btn);




// Create a <p> tag in html , give it a class & some stylling.
//Now create a new class in css and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one ? Solve this problem using classList.


//  let para = document.querySelector("p");
//  para.style.color="white";
//  para.classList.add("myClass");
//  console.log(para);




 // Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.


// let btnE = document.querySelector(".btnE");
// let mode = "light";

// let body = document.querySelector("body");

// btnE.addEventListener("click", ()=>{
//     if(mode === "light"){
//         mode = "dark";
//         body.style.backgroundColor="black";
//         body.style.color="white";
//     }else{
//         mode = "light";
//         body.style.backgroundColor="pink";
//         body.style.color="black";

//     }
//     console.log(mode);
// });

//you are creating a website for your college. create a class with 2 properties, name & email. it also hase a method called viewdata() that allows user to view website data. 

let data = "secrate information knowladge"

class College {
    constructor(name,email){
        this.name= name;
        this.email=email;
    }
        viewdata(){
            console.log("data = " + data);
        }
    }
    


let student1 = new College("shailedra pandey","shailendrakr2010@gmail.com");

console.log(student1);
console.log(student1.viewdata());


class Admin extends College{
    constructor(name,email){
        super(name,email);
    }

    editData(){
        data = "chutya kat gya BC";
    }
}

let admin1 = new Admin("jeetu bhai","jeetu@gmail.coim");

// Create a new class called Admin Which inherits from User.Add a new method called editData to Admin that allows it to edit website data. 


















