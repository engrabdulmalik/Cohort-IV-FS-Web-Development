// // const a = 5;
// // console.log(a)

// // a= 10;
// // console.log(a)


// // let a = 5;
// // let b= 10;
// // console.log(a + b); // Concatenation due to type coercion


// let a = "5";
// a += "10"; 
// // This is equivalent to a = a + 10
// console.log(a); // Concatenation due to type coercion

let a = 5;

// if (a > 5) {
//     console.log("a is greater than 5"); // Concatenation due to type coercion. This is equivalent to console.log("a is greater than or equal to 5");
// }

// else
// {
//     console.log("a is less than or equal to 5");
// }


// a > 5 ? console.log("a is greater than 5") : console.log("a is less than or equal to 5");
// let pay = 40000

// if (pay > 50000) {
//     console.log("You are eligible for a loan");
// }
// else if (pay > 30000) { 
//     console.log("You are eligible for a car loan");
// }
// else if (pay > 20000) {
//     console.log("You are eligible for a bike loan");
// }
// else {
//     console.log("You are not eligible for a loan");
// }



//grading system using switch

let marks = 83;

switch(true) {
    case (marks >= 80 || marks <=84):
        console.log("Grade A-");
        break;
    
    case 60:
        console.log("Grade B");
        break;
    case 40:
        console.log("Grade C");
        break;
    case 20:
        console.log("Grade D");
        break;
    default:
        console.log("Fail");
}