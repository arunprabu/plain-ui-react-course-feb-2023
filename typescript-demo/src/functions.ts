// Functions 
function add(a: number, b: number): number {
  let z = 100;
  return a + b;
}

add(10, 20);

// =============

function calc( fn: (x: number, y: number) => number ) {
  fn(10, 20);
}
function multiply(a: number, b: number): number {
  return a * b;
}
calc(multiply);

// Refer for more: https://www.typescriptlang.org/docs/handbook/2/functions.html
