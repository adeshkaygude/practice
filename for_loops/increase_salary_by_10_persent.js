let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
  { name: "Monitor", price: 15000 },
];

let salary = products.map((el) => {
  let price_new = el.price * 1.1;

  return {
    name: el.name,
    price: price_new,
  };
});

console.log(salary);
