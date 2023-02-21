"use strict";
class Vehicle {
    getOnRoadPrice() {
    }
}
class Car extends Vehicle {
    constructor(carMake, carModel) {
        super(); // must call super constructor when you inherit
        this.make = carMake;
        this.model = carModel;
        this.fuel = 'Petrol';
    }
    // public method 
    drive() {
        console.log(`Driving ${this.make} ${this.model}`);
    }
    // public method 
    getCarInfo() {
        console.log(`Car Info: ${this.make} ${this.model} has a ${this.fuel} Variant`);
        this.getMileage();
    }
    getMileage() {
        console.log(`Mileage of ${this.make} ${this.model}: 20kmpl`);
    }
}
var myCar = new Car('Honda', 'City');
myCar.getCarInfo();
// Learn about abstract classes: 
// https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members
