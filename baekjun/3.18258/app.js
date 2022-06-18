const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]); //15
const commands = input.slice(1);

class Node {
  prev = null;
  next = null;
  constructor(value) {
    console.log('15 : ', { constructor });
    this.value = value;
  }
}

class Queue {
  constructor() {
    console.log('22 : ', { constructor });
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length += 1;
  }

  pop() {
    if (this.length === 0) return -1;

    const value = this.head.value;

    this.head = this.head.next;
    this.length -= 1;

    return value;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  front() {
    return this.length ? this.head.value : -1;
  }

  back() {
    return this.length ? this.tail.value : -1;
  }
}

const solution = (N, commands) => {
  const queue = new Queue();

  let answer = '';

  commands.forEach((item) => {
    const [command, value] = item.split(' ');
    if (command === 'push') queue[command](value);
    else answer += queue[command]() + '\n';
  });

  return answer;
};

console.log(solution(N, commands));
