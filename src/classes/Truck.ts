// Import the necessary classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Define the Truck class
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: any;
  model: any;
  year: undefined;
  weight: any;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor to initialize the properties of the Truck class
  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
    super(); // Call the parent class constructor
    this.vin = vin;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements
    if (wheels.length !== 4) {
      this.wheels = Array(4).fill(null).map(() => new Wheel()); // Create 4 new default Wheel objects
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleDetails} is being towed by the truck.`);
    } else {
      console.log(`${vehicleDetails} is too heavy to be towed.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the parent class printDetails method
    console.log(`VIN: ${this.vin}, Color: ${this.color}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Towing Capacity: ${this.towingCapacity}, Wheels: ${this.wheels.length}`);
  }
}

// Export the Truck class as the default export
export default Truck;