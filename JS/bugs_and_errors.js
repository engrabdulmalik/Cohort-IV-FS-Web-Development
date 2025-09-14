// // try{
// //     // function testFunction(a,b) {

// //     //     console.log("This is a test function.");

// //     // return a/b}

// //     // testFunction(10,c);

// //     throw new Error("This is a custom error message.");

// // }
// // catch(error){
// //     console.log(error);
// // }

// // console.log("Hello");
// // let str =5;
// // console.log(str.pop());
// //
//  // This will throw an error because numbers do not have a pop method

// //  class Car {
// //     constructor(make, model) {
// //         this.make = make;
// //         this.model = model;
// //     }

// //     displayInfo() {
// //         console.log(`Car Make: ${this.make}, Model: ${this.model}`);
// //             }
// // }

// // const Honda = new Car("Honda", "2025");
// // Honda.displayInfo();

// // console.log(Math.PI)

// let {PI} = Math;
// console.log(PI);

// let result = PI * 10;
// console.log(`The result is: ${PI} * 10 = ${result}`);
// // console.log(PI * 10)

// let arr1 = [1, 2, 3];

// let arr2 = [...arr1, 4, 5];

// console.log(arr2);

let top7 = ["JavaScript", "Python", "Java", "C#", "C++", "Ruby", "PHP"];

const [first, second, third, ...secondArray] = top7;

console.log(first); // JavaScript
console.log(second); // Python
console.log(third); // Java
console.log(secondArray); // [ 'C#', 'C++', 'Ruby', '
