/* 1. Promises
Create a function fetchData that simulates fetching data from an API. The function should
return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object
should represent a user with properties id, name, and age. */
function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const users=[
                {id:1, name: 'dee', age:21},
                {id:2, name: 'riya', age:24}
            ];
            resolve(users);
        }, 2000);

    }    );
}
fetchData().then((data)=>{
    console.log(data);
});

/* 2. Closures
Create a function createCounter that returns an object with two methods: increment and
getCount. The increment method should increase the internal count by 1, and the getCount
method should return the current count. Use a closure to maintain the internal count variable. */
const createCounter=() => {
    let count=0;
    return {
        increment : () => {
            count += 1;
        },
        getCount : () => {
            return count;
                }
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());

/* 3. Callbacks
Create a function processData that accepts an array of numbers and a callback function. The
function should process each number in the array using the callback function and return a
new array of processed numbers. */
function processData(numbers, callabck){
    return numbers.map(callabck);
}
const numbers=[1,2,3];
const sum = (num) => num+num;
const addNum = processData(numbers, sum);
console.log(addNum);

/* 4. Async/Await
Rewrite the fetchData function from Question 1 using async and await. */
const fetchData1 = async () => {   
    const delay = (ms) => new Promise((resolve1) => setTimeout(resolve1, ms));    
    await delay(2000); 
    const users = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 },
         ];    
    return users;
  };  
  const getData = async () => {
    const data1 = await fetchData1();
    console.log(data1);
  };  
  getData();
  

/* 5. Array Manipulation: Map
Given an array of numbers, create a function that doubles each number using map. */
function doubleNumbers(numbers1) {   
    return numbers1.map((num1) => num1 * 2);
  }  
  const originalNumbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleNumbers(originalNumbers);
  console.log(doubledNumbers); 
  

/* 6. Array Manipulation: Filter
Given an array of numbers, create a function that filters out numbers less than 10 using filter. */
function filterNum(arr){
    return arr.filter((number1) => number1>=10 );
}
const inputArr = [5,6,10,12,15];
const resultArr = filterNum(inputArr);
console.log(resultArr);

/* 7. Array Manipulation: Find
Given an array of numbers, create a function that finds the first number greater than 15 using
find. */
function findArr(arr1){
    return arr1.find((number2)=> number2>15);
}
const inputArr1 = [12,15,16,20];
const resultArr1 = findArr(inputArr1);
console.log(resultArr1);

/* 8. Array Manipulation: Reduce
Given an array of numbers, create a function that sums all numbers using reduce. */
function reduceArr(arr2){
    return arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const inputArr2 = [1,2,3,4,5];
const sums = reduceArr(inputArr2);
console.log(sums);

/* 9. Object Manipulation
Given an array of user objects, write a function to transform this array into an object where the
keys are user IDs and the values are the corresponding user objects. */
function transformUsers(users){
    return users.reduce((acc, user)=>{
        acc[user.id]= user;
        return acc;
    },{});
}
const usersArray = [
    { id: 1, name: 'aasma', age: 20 },
    { id: 2, name: 'pra', age: 21 },
];
const usersObj = transformUsers(usersArray);
console.log(usersObj);

/* 10. Classes and Objects
Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person. */
class Person{
    constructor(name, age){
        this.name = name;
        this.age= age;
    }
    describe(){
    return (`${this.name} is ${this.age} years old.`);
    }
}
const person1 = new Person('Urza', 13, );
console.log(person1.describe());

/* 11. Inheritance
Create a Student class that extends Person and adds a grade property. Add a method study
that returns a string indicating the student is studying. */
class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    study(){
        return (`${this.name} received grade ${this.grade}.`);
    }
}
const person2 = new Student('Urza', 13, 'A');
console.log(person2.study());


/* 12. Error Handling with Promises
Modify the fetchData function to randomly reject the promise with an error message &quot;Failed to
fetch data&quot;. Handle this error using .catch when calling the function. */
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {       
        const success = Math.random() > 0.5; 
        if (success) {
          resolve([
            { id: 1, name: 'Alisha', age: 25 },
            { id: 2, name: 'Ress', age: 30 },
            { id: 3, name: 'Remi', age: 35 }
          ]);
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 2000);
    });
  } 
  fetchData()
    .then(data => {
      console.log('Data fetched:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  


/* 13. Error Handling with Async/Await
Modify the fetchData function with async/await to handle errors using try/catch blocks. */
  async function fetchDataAndHandleError() {
    try {
      const data = await fetchData();
      console.log('Data fetched:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  fetchDataAndHandleError();

/* 14. Complex Array Manipulation
Given an array of users, where each user has a name and an array of hobbies, create a
function that returns an array of all unique hobbies using reduce. */
function hobbies(people){
    const allHobbies = people.reduce((accumulator1,currentUser)=>{
        return accumulator1.concat(currentUser.hobbies);
    },[]);

const uniqueHobby = [...new Set(allHobbies)];
return uniqueHobby;}
const people=[
    { name: 'Dee', hobbies: ['reading', 'painting'] },
  { name: 'Yoj', hobbies: ['painting', 'gardening'] },
  { name: 'Pri', hobbies: ['reading', 'gardening', 'cooking'] }
];
const uniqueHobby = hobbies(people);
console.log(uniqueHobby);

/* Conceptual Questions
1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
Ans. Promises in JavaScript are used to handle asynchronous operations. They provide a cleaner and more structured way to handle asynchronous code compared to 
traditional callback functions.The advantages of using promises include:
i. Readability: Promises use a chainable syntax with then() and catch() methods, making the code more readable and easier to understand.
ii.Error Handling: Promises have built-in error handling through the catch() method, which makes it easier to handle errors in asynchronous code.
iii.Chaining: Promises can be chained together using then() method, allowing for sequential execution of asynchronous tasks.
iv.Avoiding Callback Hell: Promises help avoid callback hell, a situation where nested callbacks become unreadable and hard to manage.

2. What is a closure in JavaScript? Provide an example.
Ans. A closure in JavaScript is a combination of a function and the lexical environment within which that function was declared. It allows a function to retain 
access to variables from its containing scope even after the scope has closed. Here's an example:
function outerFunction() {
  let outerVariable = 'I am from the outer function';  
  function innerFunction() {
    console.log(outerVariable); 
  }  
  return innerFunction;
}
const closureExample = outerFunction();
closureExample();

3. What is a callback function and why is it used in JavaScript?
Ans. A callback function in JavaScript is a function that is passed as an argument to another function and is executed after some operation has been completed. 
Callback functions are commonly used in asynchronous programming to handle asynchronous tasks such as API requests or file operations. They allow us to specify
 what should happen once the asynchronous operation is complete.

4. What are async/await in JavaScript and how do they improve asynchronous programming?
Ans. async/await in JavaScript is a modern way to work with asynchronous code. async is used to declare that a function will return a promise, and await is used 
to pause the execution of a function until a promise is resolved. They make asynchronous code look and behave more like synchronous code, which improves readability
 and maintainability. Here's an example:
 async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

5. Write the difference between ES6 and JS.
Ans. ES6 stands for ECMAScript 2015, which is a version of JavaScript standardized in 2015. JavaScript, on the other hand, refers to the general-purpose programming 
language that includes various versions and specifications, including ES6. In simpler terms, ES6 is a specific version or iteration of JavaScript.

6. What are some of the major features introduced in ES6? 
Ans. Some major features introduced in ES6 include:
Arrow functions
Template literals
Classes
Let and const for variable declarations
Default parameters
Rest and spread operators
Destructuring assignments
Promises
Modules

*/




