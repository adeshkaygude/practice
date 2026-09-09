function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;

  this.buy = (qut) => {
    if (this.quantity >= qut) {
      return (this.quantity -= qut);
    } else {
      return "Not enough stock";
    }
  };

  this.totalPrice = () => {
    return this.price * this.quantity;
  };
}

let p1 = new Product("Laptop", 50000, 5);

console.log(p1.totalPrice()); // 250000
console.log(p1.buy(2)); // 3
console.log(p1.quantity); // 3
console.log(p1.buy(5)); // Not enough stock
