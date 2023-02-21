// Arrays
var colors1: string[] = ['red', 'green', 'blue'];
var colors2: Array<string> = ['red', 'green', 'blue'];

var colors3: any[] = ['red', 'green', 413, true, undefined, null];
var colors4: Array<any> = ['red', 'green', 413, true, undefined, null];

// Tuple 
var colors5: [number, boolean, string] = [1231, true, 'ABC'];
// colors5 = ['XYZ', true]; // error 
// This is called Tuple. Tuple is a data structure consisting of multiple parts