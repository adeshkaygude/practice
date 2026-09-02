let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 },
  { name: "Monitor", price: 15000 },
];

products.sort((a, b) => {
  return b.price - a.price;
});
console.log(products);
