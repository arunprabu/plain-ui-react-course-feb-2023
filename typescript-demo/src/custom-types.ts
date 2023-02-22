// custom data types or a.k.a type aliases 

type PhoneNumber = string; 
var contactNumber: PhoneNumber;

type EmployeeType = {
  name: string,
  city: string,
  phone: number,
  age: number,
  skills: string[]
}

// what if we want many complex objects with same blueprint/skeleton
const employee10: EmployeeType = {
  name: 'John',
  city: 'London',
  phone: 53467890,
  age: 25,
  skills: ['html', 'css', 'js', 'ts']
}

const employee20: EmployeeType = {
  name: 'Steve',
  city: 'Sydney',
  phone: 988076775,
  age: 27,
  skills: ['react','js']
}

