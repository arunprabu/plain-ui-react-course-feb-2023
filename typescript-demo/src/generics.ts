// Refer this first: 
// https://www.typescriptlang.org/docs/handbook/2/generics.html

// here's generic fn
function identity<Type>(arg: Type): Type {
  return arg;
}

const output = identity<number>(10); // call this way or 
// const output = identity(10); // call like this
console.log(output);

// Let's try a generic class
class Bird<Type>{

  getBirdInfo(name: Type): Type {
    return name;
  }

}

var bird1 = new Bird<string>()
const birdName = bird1.getBirdInfo('Sparrow');
// birdName will have implicit typing of string
console.log(birdName);