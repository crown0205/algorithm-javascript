const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 최대힙이란 부모가 자식보다 큰 값을 유지하는것이라고 한다.
//  max 부모 > 자식

// let length = input[0];

// let str = [];

// for (let i = 1; i < input.length; i++) {

// }

// console.log(input[1]);

// for (let i = 1; i < length - 1; i++) {
//   if (input[1] === 0) {

//   }
// }
// //
// // Math.max(...str);
// // console.log(Math.max.apply(null, str));

// console.log(str);
