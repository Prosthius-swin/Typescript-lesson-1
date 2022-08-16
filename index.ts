// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
const fizzBuzzBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById('fizzbuzz-btn')
);

fizzBuzzBtn.addEventListener('click', fizzbuzz);
function fizzbuzz() {
  const lowerLimitInput: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('lowerLimit-inp')
  );
  const upperLimitInput: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('upperLimit-inp')
  );

  let counter: number = Number(lowerLimitInput.value);
  let limit: number = Number(upperLimitInput.value);

  while (counter <= limit) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      console.log('fizzbuzz');
    } else if (counter % 3 === 0) {
      console.log('fizz');
    } else if (counter % 5 === 0) {
      console.log('buzz');
    } else console.log(counter);

    counter++;
  }
}

class Car {
  rego: string;
  speed: number;
  maxSpeed: number = 120;

  constructor(_speed: number, _rego) {
    this.speed = _speed;
    this.rego = _rego;
  }

  increaseSpeed(spd: number): void {
    this.speed = spd;

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }
}

// Instantiating instances of Car
let car1: Car = new Car(0, '111aaa');
let car2: Car = new Car(10, '222bbb');
let car3: Car = new Car(20, '333ccc');

// An array/list of cars
let carList: Car[] = [car1, car2, car3];

// Typescript 'for' loop
for (let index in carList) {
  console.log(carList[index]);
}
