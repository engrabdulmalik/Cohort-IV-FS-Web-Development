// // // const a = 5;
// // // console.log(a)

// // // a= 10;
// // // console.log(a)

// // // let a = 5;
// // // let b= 10;
// // // console.log(a + b); // Concatenation due to type coercion

// // let a = "5";
// // a += "10";
// // // This is equivalent to a = a + 10
// // console.log(a); // Concatenation due to type coercion

// let a = 5;

// // if (a > 5) {
// //     console.log("a is greater than 5"); // Concatenation due to type coercion. This is equivalent to console.log("a is greater than or equal to 5");
// // }

// // else
// // {
// //     console.log("a is less than or equal to 5");
// // }

// // a > 5 ? console.log("a is greater than 5") : console.log("a is less than or equal to 5");
// // let pay = 40000

// // if (pay > 50000) {
// //     console.log("You are eligible for a loan");
// // }
// // else if (pay > 30000) {
// //     console.log("You are eligible for a car loan");
// // }
// // else if (pay > 20000) {
// //     console.log("You are eligible for a bike loan");
// // }
// // else {
// //     console.log("You are not eligible for a loan");
// // }

// //grading system using switch

// let marks = 83;

// switch(true) {
//     case (marks >= 80 || marks <=84):
//         console.log("Grade A-");
//         break;

//     case 60:
//         console.log("Grade B");
//         break;
//     case 40:
//         console.log("Grade C");
//         break;
//     case 20:
//         console.log("Grade D");
//         break;
//     default:
//         console.log("Fail");
// }

// for (let i = 0; i < 10; i++) {
//   console.log("2 x " + (i+1) + " = " + 2 * (i+1));
// }
// let i = 11;
// while(i < 10) {
//   console.log("2 x " + (i+1) + " = " + 2 * (i+1));
//   i++;
// }   

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log("2 x " + (i+1) + " = " + 2 * (i+1) + ", 3 x " + (j+1) + " = " + 3 * (j+1));
//     }
// }

// bubble sort algorithm
// let arr = [5, 3, 8, 4, 2,10,11,18, 1, 6, 7, 9, 12, 13, 14, 15, 16, 17];
// let n = arr.length;

// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);

// let arr = [5, 3, 8, 4, 2, 10, 11, 18, 1, 6, 7, 9, 12, 13, 14, 15, 16, 17];
// function add(arr) {
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//         console.log("Invalid input: all elements must be numbers.");
//         return;
//     }
// }
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// return sum;
// }
   


// let result = add(arr);
// console.log(result); // Output: 15

// let car = {
//     color:"red",
//     speed:"120KPH",
//     price:2000000

// }

// console.log(car["color"]); // Output: red

let arrOfKeys = ["speed", "color", "price"]

// let drone = {
//     speed:"120KPH",
//     color:"metallic",
//     price:200000
// }

// for(let i =0; i<arrOfKeys.length;i++)
// {
//     console.log(drone[arrOfKeys[i]])
// }

arrOfKeys.pop()
console.log(arrOfKeys)

// Student Management System (Basic)
// Task Description:
// Create a simple JavaScript program that stores information about students and their marks. The program should:
// ✅ Use arrays to store multiple students.
// ✅ Use objects to store each student’s details (name, age, marks).
// ✅ Use functions to perform tasks.
// ✅ Use loops to process and display data.

//Use arrays to store multiple students.
let students = [];

// Use objects to store each student’s details (name, age, marks)

function addStudent(name, age, marks) {
    let student = {
        name: name,
        age: age,
        marks: marks
    };
    students.push(student);
}

// Use functions to perform tasks
function displayStudents() {
    for (let i = 0; i < students.length; i++) {
        console.log(`Name: ${students[i].name}, Age: ${students[i].age}, Marks: ${students[i].marks}`);
    }
}   

// Use loops to process and display data
function calculateAverageMarks() {
    let totalMarks = 0;
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks;
    }
    return totalMarks / students.length;
}   

// Call the functions
addStudent("John", 20, 85);
addStudent("Alice", 22, 92);
addStudent("Bob", 19, 78);
displayStudents();
let averageMarks = calculateAverageMarks();
console.log(`Average Marks: ${averageMarks}`);  