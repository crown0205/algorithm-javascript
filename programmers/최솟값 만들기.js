//최솟값 만들기

function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
console.log(solution([1, 8, 3], [9, 3, 4])); // 10
console.log(solution([1, 2, 13], [3, 4, 23])); // 10
