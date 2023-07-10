"use strict";
// basic types
let id = 5;
let company = "doyy corp";
let isActive = true;
let x = "hello";
let age;
let ids = [1, 2, 3];
let arr = [1, true, "doyydoyan"];
// tuple -> specify exact types inside array
let persons = [1, "zabina", true];
// tupple array
let employees;
employees = [
    [1, "zabina"],
    [2, "anastasya"],
];
// union
let pid;
pid = "22";
// enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {})); /** it return the values : up=0, down=1... */
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {})); /** it return the strings : up='up', down='down'... */
const user = {
    id: 1,
    name: "zabina",
};
// type Assertion
let cid = 1;
let customerId = cid;
// functions
function addNum(x, y) {
    return x + y;
}
// void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "zabina",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
