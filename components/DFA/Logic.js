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
            (this.problem === problem1 && (this.currentNode === 14 || this.currentNode === 17)) ||
            (this.problem === problem2 && (this.currentNode === 10 || this.currentNode === 11 || this.currentNode === 12 || this.currentNode === 13 || this.currentNode === 18))
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
  new Node(14, 15, 16),
  new Node(15, 15, 16),
  new Node(16, 17, 12),
  new Node(17, 14, 16),
];

export const problem2 = [
  new Node(1, 3, 2),
  new Node(2, 4, 5),
  new Node(3, 5, 4),
  new Node(4, 4, 4),
  new Node(5, 14, 6),
  new Node(6, 14, 7),
  new Node(7, 14, 8),
  new Node(8, 16, 9),
  new Node(9, 10, 18),
  new Node(10, 10, 11),
  new Node(11, 16, 12),
  new Node(12, 13, 18),
  new Node(13, 14, 15),
  new Node(14, 14, 15),
  new Node(15, 16, 17),
  new Node(16, 10, 11),
  new Node(17, 13, 18),
  new Node(18, 10, 18),
];

export const language1 = ["a", "b"];
export const language2 = ["0", "1"];
