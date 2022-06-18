const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// let input = [26, 55, 1, 0, 71];

// input 값.
let N = +input[1];

// 계산할값을 따로 할당.
let num = N;

// 몇번만에 사이클이 완성 되는지 카운드 하는 변수 설정
let count = 0;

console.log('계산할 값 : ', num);

while (true) {
  console.log('1 : ', num);

  let sum = Math.floor(num / 10) + (num % 10);

  num = (num % 10) * 10 + (sum % 10);
  count++;

  console.log('2 : ', num);
  console.log('count 증가 : ', count);
  console.log('-------------');

  if (num === N) break;
  // 처음 input의 "N"값과 계산되어진 "num"값이 같아 지면 while 반복 취소
}

console.log({ count });
