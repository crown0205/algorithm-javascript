// 배열속 객체중 일치 하지않는 값 찾기!
let A = [
  {
    start: 'Wed May 18 2022 08:00:00 GMT+0900',
    end: 'Wed May 18 2022 09:00:00 GMT+0900',
  },
  {
    start: 'Sat May 19 2022 12:00:00 GMT+0900',
    end: 'Sat May 19 2022 13:00:00 GMT+0900',
  },
  {
    start: 'Fri May 20 2022 14:00:00 GMT+0900',
    end: 'Fri May 20 2022 15:00:00 GMT+0900',
  },
];

let B = [
  {
    start: 'Wed May 18 2022 08:00:00 GMT+0900',
    end: 'Wed May 18 2022 09:00:00 GMT+0900',
  },
  {
    start: 'Fri May 20 2022 14:00:00 GMT+0900',
    end: 'Fri May 20 2022 15:00:00 GMT+0',
  },
];

console.log(A[0].start === B[0].start && A[0].end === B[0].end);
console.log(A[0].end === B[0].end);

// for (let i = 0; i < A.length; i++) {
//   A[i].start !== B[i].start;
//   for (let j = 0; j < B.length; j++) {
//     A[i].start !== B[j].start;
//   }
// }

// A.filter((item) => item.start !== B[idx].start);

function findUniqElem(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

A.concat(B).filter((i, idx) => i);

// findUniqElem(A, B);
// findUniqElem([1, 2, 3, 4, 5, 6], [1, 3, 4, 5, 6, 7, 8]);
findUniqElem(
  [
    {
      start: 'Wed May 18 2022 08:00:00 GMT+0900',
    },
    {
      start: 'Sat May 19 2022 12:00:00 GMT+0900',
    },
    {
      start: 'Fri May 20 2022 14:00:00 GMT+0900',
    },
  ],
  [
    {
      start: 'Wed May 18 2022 08:00:00 GMT+0900',
    },
    {
      start: 'Fri May 20 2022 14:00:00 GMT+0900',
    },
  ],
);

var enterprise = [
  {
    name: 'SULU',
    species: 'Human',
  },
  {
    name: 'KIRK',
    species: 'Human',
  },
];

var yorktown = [
  {
    name: 'BEN',
    species: 'Human',
  },
  {
    name: 'DEMORA',
    species: 'Human',
  },
  {
    name: 'SULU',
    species: 'Human',
  },
];

for (var i = 0; i < enterprise.length; i++) {
  if (JSON.stringify(yorktown).includes(JSON.stringify(enterprise[i]))) {
    console.log(enterprise[i]);
  }
}

// 성지님 코드~~~
const Astart = [];
for (let i = 0; i < A.length; i++) {
  Astart.push(A[i].start);
}
const Bstart = [];
for (let i = 0; i < B.length; i++) {
  Bstart.push(B[i].start);
}
const C = Astart.filter((time, index) => !Bstart.includes(time));
const D = A.filter((time, index) => time.start === C[0]);
console.log(D);
