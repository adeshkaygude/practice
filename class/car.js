class car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  display() {
    return [this.brand, this.model, this.price];
  }
}
const c1 = new car("BMW", "M4", 8500000);

const c2 = new car("Audi", "A4", 5500000);

console.log(c1.display());
console.log(c2.display());
