import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";
// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  vin: string | undefined;
  color: string | undefined;
  make: string | undefined;
  model: string | undefined;
  year: number | undefined;
  weight: number | undefined;
  topSpeed: number | undefined;
  wheels: Wheel[];
  constructor(vin : string, color : string, make : string, model : string, year : number, weight : number, topSpeed : number, wheels : number | any) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize the properties of the Motorbike class
    this.wheels = wheels;

    // Check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    if (!this.wheels || this.wheels.length !== 2) {
      this.wheels = [new Wheel(17, "Default Brand"), new Wheel(17, "Default Brand")];
    }
  }

  // Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails() {
    // Call the printDetails method of the parent class
    super.printDetails();
    // Log the details of the Motorbike
    console.log(`Wheels: ${this.wheels.length} wheels`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
