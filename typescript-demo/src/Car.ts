class Vehicle {
  getOnRoadPrice() {

  }
}

class Car extends Vehicle{
  // public variables 
  public make: string;
  model: string; // public keyword is optional for public variables
  
  // private variables 
  private fuel: string;

  constructor( carMake: string, carModel: string) {
    super(); // must call super constructor when you inherit
    this.make = carMake;
    this.model = carModel;

    this.fuel = 'Petrol';
  }

  // public method 
  public drive(): void{
    console.log(`Driving ${this.make} ${this.model}`);
  }

  // public method 
  getCarInfo(): void { //public keyword is optional for public method
    console.log(`Car Info: ${this.make} ${this.model} has a ${this.fuel} Variant`);
    this.getMileage();
  }

  private getMileage(): void {
    console.log(`Mileage of ${this.make} ${this.model}: 20kmpl`);
  }

}

var myCar: Car = new Car('Honda', 'City');
myCar.getCarInfo();

// Learn about abstract classes: 
// https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members

