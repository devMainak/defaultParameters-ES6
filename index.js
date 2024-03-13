//Default Parameters

//Write an arrow function with default parameters to add two numbers

const addNumbers = (a, b = 1) => a + b
console.log(addNumbers(2));

//Write an arrow function with default parameters to multiply two numbers
const multiplyNumbers = (a, b = 1) => a * b
console.log(multiplyNumbers(2, 2));

//Write an arrow function with default parameters to concatenate two strings
const concatenateStrings = (name , greeting = "Hello, ") => greeting + name
console.log(concatenateStrings("Bob"))

//Write an arrow function with default parameters to greet user
const greetUser = (name = "neoGrammer" , greeting = "Hello, ") => greeting + name
console.log(greetUser())

//Write an arrow function with default params to add three numbers

const addThreeNumbers = (a, b = 2, c = 3) => a + b + c
console.log(addThreeNumbers(1))