// function son(a) {
//   for (let a = 1; a <= n; i++) {
//     let sum = 0;
//   }
//   return (a = a + n);
// }
// let n = +prompt("sonni kiriting");
// console.log(son(a, n));

// Funksiyaga oid masalalar.
//1-masala
// function twoNumbers(arg1, arg2) {
//   console.log(arg1 + arg2);
// }
// twoNumbers(15, 30);

//2-masala
// function twoNumbers(arg1, arg2) {
//   console.log(arg1 * arg2);
// }
// twoNumbers(15, 30);

//3-masala
// function raqam(num1) {
//   return num1 ** 2;
// }

// console.log(raqam(5));

//4-masala
// function raqam(num1) {
//   return num1 ** 3;
// }

// console.log(raqam(5));

// //5-masala
// function threenumbers(num1, num2, num3) {
// return
// }

//6-masala
// function son(num) {
//   if (num % 2 == 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//7-masala

// function son(num) {
//   if (num % 2 == 1) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//8-masala

// function son(num1, num2) {
//   let max;
//   if (num1 > num2) {
//     max = num1;
//   } else {
//     max = num2;
//   }
//   return max;
// }
// let i = son(5, 8);
// console.log(i);

//9-masala
// function son(num1, num2) {
//   let max;
//   if (num1 < num2) {
//     max = num1;
//   } else {
//     max = num2;
//   }
//   return max;
// }
// let i = son(5, 8);
// console.log(i);

//10-masala
function son(num) {
  y = 0;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    y = y + i;
  }
  return y;
}
let num = +prompt("sonni kiriting");
console.log(son(num));
