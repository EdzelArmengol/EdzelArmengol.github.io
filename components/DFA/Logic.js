export class Node {
  constructor(nodeNumber, direction1, direction2) {
    this.nodeNumber = nodeNumber;
    this.direction = [direction1, direction2];
  }
}

export class DFA {
  constructor(input, problem, language) {
    this.input = input;
    this.problem = problem;
    this.language = language;

    this.currentNode = 1;
    this.currentInputPos = -1;
    this.path = [1];

    this.node();
  }
  node() {
    this.currentInputPos += 1;
    if (this.currentInputPos === this.input.length) {
        if (
            (this.problem === problem1 && (this.currentNode === 14 || this.currentNode === 15)) ||
            (this.problem === problem2 && this.currentNode === 9)
        ) {
            this.result = "Valid";
        } else {
            this.result = "Invalid";
        }
    } else {
        if (
          this.currentNode <= this.problem.length && this.currentNode !== "T1" && this.currentNode !== "T2" &&
          this.input[this.currentInputPos] !== undefined
        ) {
            let node = this.problem[this.currentNode - 1];

            if (
                (this.problem === problem1 && (this.input[this.currentInputPos] === "a" || this.input[this.currentInputPos] === "b")) ||
                (this.problem === problem2 && (this.input[this.currentInputPos] === "0" || this.input[this.currentInputPos] === "1"))
            ) {
                this.currentNode = node.direction[this.language.indexOf(this.input[this.currentInputPos])];
                this.currentNode !== undefined && this.path.push(this.currentNode);
            } else {
              this.currentNode = (this.problem === problem1 ? "T1" : "T2");
            }
            this.node();
        } else {
            this.result = "Invalid";
            this.path.push("eos");
        }
      }
  }
}

export const problem1 = [
  new Node(1, 2, 2),
  new Node(2, 3, 4),
  new Node(3, 5, 4),
  new Node(4, 3, 8),
  new Node(5, 6, 7),
  new Node(6, 6, 11),
  new Node(7, 8, 11),
  new Node(8, 9, 10),
  new Node(9, 3, 11),
  new Node(10, 11, 10),
  new Node(11, 15, 12),
  new Node(12, 13, 12),
  new Node(13, 14, 16),
  new Node(14, 15, 16, 14),
  new Node(15, 15, 16),
  new Node(16, 17, 12),
  new Node(17, 14, 16, 17),
];

export const problem2 = [
  new Node(1, 2, 3),
  new Node(2, 4, 3),
  new Node(3, 2, 4),
  new Node(4, 5, 5),
  new Node(5, 5, 6),
  new Node(6, 7, 8),
  new Node(7, 5, 9),
  new Node(8, 7, 9),
  new Node(9, 9, 9),
];

export const language1 = ["a", "b"];
export const language2 = ["0", "1"];
