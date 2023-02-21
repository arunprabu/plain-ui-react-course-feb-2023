"use strict";
// Functions 
function add(a, b) {
    let z = 100;
    return a + b;
}
add(10, 20);
// =============
function calc(fn) {
    fn(10, 20);
}
function multiply(a, b) {
    return a * b;
}
calc(multiply);
// Refer for more: https://www.typescriptlang.org/docs/handbook/2/functions.html
