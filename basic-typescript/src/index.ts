// basic types
let id: number = 5;
let company: string = "doyy corp";
let isActive: boolean = true;
let x: any = "hello";
let age: number;

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, true, "doyydoyan"];

// tuple -> specify exact types inside array
let persons: [number, string, boolean] = [1, "zabina", true];

// tupple array
let employees: [number, string][];

employees = [
  [1, "zabina"],
  [2, "anastasya"],
];

// union
let pid: string | number;

pid = "22";

// enum
enum direction {
  up,
  down,
  left,
  right,
} /** it return the values : up=0, down=1... */

enum direction2 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
} /** it return the strings : up='up', down='down'... */

// objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "zabina",
};

// type Assertion
let cid: any = 1;
let customerId = cid as number;

// functions
function addNum(x: number, y: number): number {
  return x + y;
}

// void
function log(message: string | number): void {
  console.log(message);
}

// interfaces -> spesific structure to an object
interface UserInterface {
  readonly id: number /** readonly makes we can't change the value */;
  name: string;
  age?: number /** optional */;
}

const user1: UserInterface = {
  id: 1,
  name: "zabina",
};

interface mathFunc {
  (x: number, y: number): number;
}

const add: mathFunc = (x: number, y: number): number => x + y;
const sub: mathFunc = (x: number, y: number): number => x - y;

// classes

