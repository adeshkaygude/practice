let products = [
  { name: "Laptop", category: "Electronics", price: 50000 },
  { name: "Mouse", category: "Electronics", price: 1000 },
  { name: "Shirt", category: "Clothing", price: 1500 },
  { name: "Keyboard", category: "Electronics", price: 2500 },
  { name: "Jeans", category: "Clothing", price: 2000 },
];

let total = products.reduce((prev, curent) => {
  return prev + curent.price;
}, 0);

console.log(total);
