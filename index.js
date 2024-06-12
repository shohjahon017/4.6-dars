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
// /////

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

// //9-masala
// function son(num1, num2) {
//   let min;
//   if (num1 < num2) {
//     min = num1;
//   } else {
//     min = num2;
//   }
//   return min;
// }
// let i = son(5, 8);
// console.log(i);

//10-masala
// function son(num) {
//   y = 0;
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//     y = y + i;
//   }
//   return y;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//11-masala

// //12-masala
// function yosh(i) {
//   if (i >= 18) {
//     console.log("Katta");
//   } else {
//     console.log("Kichik");
//   }
//   return i;
// }
// let i = +prompt("yoshni kiriting");
// console.log(yosh(i));

//13-masala
// function son(num1, num2) {
//   if (num1 / num2) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   return num1, num2;
// }
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// console.log(son(num1, num2));

//14-masala
// function son(num) {
//   if (num > 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//15-masala
// function son(num) {
//   if (num < 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

// // //16-masala
// let num = +prompt("sonni kirting");
// function son(num) {
//   let result = num ** 0.5;
//   return result;
// }
// let result = son(num);
// console.log(son(result));
//17-masala
// function son(num1, num2) {
//   return num1 - num2;
// }
// console.log(son(20, 8));

// //18-masala
// function son(a, b, c) {
//   let max;

//   if (a > b && b > c) {
//     max = a;
//   } else if (a > b && b < c && a > c) {
//     max = a;
//   } else {
//     max = c;
//   }
//   if (a < b && b > c) {
//     max = b;
//   } else if (a < b && b < c) {
//     max = c;
//   }
//   return max;
// }
// let i = son(5, 8, 10);
// console.log(i);

// //19-masala
function son(a, b, c) {
  let min;
  if (a < b && b < c) {
    min = a;
  } else if (a < b && b > c && a < c) {
    min = a;
  }
  if (a > b && b < c) {
    min = b;
  } else if (a > b && b > c) {
    min = c;
  }
  return min;
}
let i = son(5, 8, 2);
console.log(i);

//20-masala

// function son(num) {
//   if (num > 10) {
//     console.log("Katta");
//   } else {
//     console.log("Kichik");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//21-masala
// function twoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   if (sum % 2 == 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return sum;
// }
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// console.log(twoNumbers(num1, num2));

//22-masala
// function son(num) {
//   if (num % 5 == 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

// //23-masala
// function twoNumbers(num1, num2) {
//   if (num1 > num2) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num1;
// }
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// console.log(twoNumbers(num1, num2));

//24-masala
// function son(num) {
//   if (num % 7 == 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

// //25-masala
// function son(num) {
//   return num ** 10;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//26-masala
// function

// //27-masala
// function son(num) {
//   if (num < 100) {
//     console.log("Kichik");
//   } else {
//     console.log("Katta");
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

// // 28 - masala;
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

//29-masala
// function twoNumbers(num1, num2) {
//   k = num1 * num2;

// }

// //30-masala
// function threenumbers(num1, num2, num3) {
//   if ((num3 = num1 + num2)) {
//     console.log("false");
//   } else {
//     console.log("true");
//   }
//   return num3;
// }
// let num1 = +prompt("1-sonni kiriting");
// let num2 = +prompt("2-sonni kiriting");
// let num3 = +prompt("3-sonni kiriting");
// console.log(threenumbers(num1, num2, num3));

// For yordamida ishlanadigan masalalar
//1-masala
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

//2-masala
// let k = 1;
// for (let i = 1; i <= 10; i++) {
//   k *= i;
// }
// console.log(k);

//3-masala
// let k = +prompt("sonni kiriting");
// let result = 1;
// for (let i = 1; i <= k; i++) {
//   result *= i;
// }
// console.log(result);

//4-masala
// function son(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));

//5-masala
// function son(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
//   return num;
// }
// let num = +prompt("sonni kiriting");
// console.log(son(num));
