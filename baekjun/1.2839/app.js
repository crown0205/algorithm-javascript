// 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다.

// 설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.

// 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다.

// 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만,

// 5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.

// 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];
let count = 0;

console.log({ N, count });

while (true) {
  if (N % 5 === 0) {
    count += N / 5;
    break;
  } else if (N < 0) {
    console.log(-1);
    break;
  } else {
    count++;
    N -= 3;
  }
}

//1)
// while (true) {
//   if (Num % 5 === 0) {
//     console.log(Num / 5 + count);
//     break;
//   }

//   if (0 > Num) {
//     console.log(-1);
//     break;
//   }

//   count++;
//   Num -= 3;
//   console.log({ count, Num });
// }

// const number = +input[0];

//2)
// function solution(number) {
//   let answer = 0;

//   while (number > 0) {
//     console.log('1 : ', number);

//     if (number % 5 === 0) {
//       console.log('2 : ', (number -= 5));

//       number -= 5;
//     } else {
//       console.log('3 : ', number);

//       number -= 3;
//     }
//     answer += 1;
//   }

//   return number === 0 ? answer : -1;
// }

// const answer = solution(number);
// console.log({ answer });
