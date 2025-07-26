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
let arr = [5, 3, 8, 4, 2];
let n = arr.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);