export class Car {
  year: number;

  drive(speed: number) {
    console.log(`Driving at ${speed}`);
  }
}

const myCar = new Car();
console.log(myCar.year); // number
