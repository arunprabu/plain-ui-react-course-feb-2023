// class decorator 
function component(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// functional decorator
function hello(){
  console.log("hello(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("hello(): called");
  };
}

@component
class Student {
  
  type = "report";
  title: string;
  studentName: string = '';

  constructor(t: string) {
    this.title = t;
  }
  
  @hello()
  getStudentData(a: string, b: string) {

  }

}