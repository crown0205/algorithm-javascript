// 숫자의 표현
// https://programmers.co.kr/learn/courses/30/lessons/12924

// 1부터 하나씩 더한 수를 더해준다.
// 더한 수가 n이 되면 멈추고 cnt를 적립한다.
// 더한 수가 n을 초과하는 값이면 멈추고 다음으로 간다.
// 2부터 하나씩 더하기 시작한다.
// * 코드는 위에서 부터 밑으로 차례대로 내려가면서 반복된다!!! 주의하자!!

// 문제!!
// 키포인드!!
// 연속된 자연수들로 n을 표현하는 방법의 수를 찾는거!

// 반복은 주어진 n의 숫자만큼만 할수있다.
// 주어진 n의 값을 절반이상 넘어가면 n의 값 하나분인거 같다.

function solution(n) {
  let sum = 0;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      sum += j;

      if (sum === n) {
        count++;
        sum = 0;
        break;
      } else if (sum >= n) {
        sum = 0;
        break;
      }
    }
  }

  return count;
}

console.log(solution(15)); // 4

console.log(15 % 1);
console.log(15 % 2);
console.log(15 % 3);
console.log(15 % 4);
console.log(15 % 5);
console.log(15 % 6);
console.log(15 % 7);
console.log(15 % 8);
console.log(15 % 9);
console.log(15 % 10);
console.log(15 % 11);
console.log(15 % 12);
console.log(15 % 13);
console.log(15 % 14);
console.log(15 % 15);

console.log(10 % 1);
console.log(10 % 2);
console.log(10 % 3);
console.log(10 % 4);
console.log(10 % 5);
console.log(10 % 6);
console.log(10 % 7);
console.log(10 % 8);
console.log(10 % 9);
console.log(10 % 10);

console.log(5 % 2);
console.log(1 % 2);

// 홀수의 경우, 약수는 홀수 밖에 안나옴. 15의 약수는 1,3,5, 15. 약수를 이용해서 연속된 수의 합이 15가 나오도록 할 수도 있음
function expressions(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}

console.log(expressions(15));
