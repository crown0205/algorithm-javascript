const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


console.log(input)

// let input = require('fs').readFileSync('/dev/stdin');

// let count = 0;

// while (true) {
//   if (input % 5 === 0) {
//     console.log(count += input / 5);
//     //console.log( count );
//     break;
      
//   } else if (input < 0) {
//     console.log(-1);
//     break;
      
//   } else {
//     count++;
//     input -= 3;
//   }
// }