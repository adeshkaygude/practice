let car = {
  brand: "BMW",
  model: "X5",
  engine: {
    type: "Petrol",
  },
};

let car_copy = { ...car };
let car2_copy = Object.assign({}, car);

console.log(car);
console.log(car_copy);
console.log(car2_copy);
