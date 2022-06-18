//가장 큰 수

// https://programmers.co.kr/learn/courses/30/lessons/42746

// 먼저 배열에 있는 수를 오름차순으로 정리한다.
// 숫자가 10자리까지 있다면 두번째자리까지 비교해서 다시 정렬을 한다.
// sort(()=>{b-a})
// 그리고 문자열로 만들고,
// 리듀서나 map을 사용해 하나로 합쳐준다.

function solution(numbers) {
  let num = [];

  // numbers.sort((a, b) => b + a - (a + b));
  // numbers.sort((a, b) =>  b + a);
  // numbers.sort((a, b) => b - a);

  //  문자열로 바꾼 이유는 숫자로 내림차순으로 하면 값이 큰수부터 나와서 이여 붙였을때 큰 값이 안나온다.
  for (let i = 0; i < numbers.length; i++) {
    num.push(numbers[i] + '');
  }

  // 이 정렬 방식을 잘 모르겠다... 정렬에도 여러가지 방식이 있지만,,, 너무 방대하고 복잡하다...
  // https://hyo-ue4study.tistory.com/68
  num.sort((a, b) => b + a - (a + b));

  num;

  // for문으로 합치려 했지만... 귀차니즘이 일어나기도 하고 reduce가 훨씬 심플하닌깐?
  let answer = num.reduce((sum, cur) => sum + cur);

  // https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#%EC%98%88%EC%A0%9C
  // 조건 때문에 문자열의 첫번째가 0이면 그대로 0을 보여주기

  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2])); // 6210
console.log(solution([3, 30, 34, 5, 9])); //9534330

//  다른 사람 풀이!

function solutionA(numbers) {
  // 1)
  let strings = numbers
    .map((num) => num + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  // 2)
  // let strings = numbers.map((num) => num + '');
  // const answer = strings.sort((a, b) => b + a - (a + b)).join('');

  // return answer[0] === '0' ? '0' : answer;
  return strings[0] === '0' ? '0' : strings;
}

console.log(solutionA([6, 10, 2])); // 6210
console.log(solutionA([3, 30, 34, 5, 9])); //9534330
