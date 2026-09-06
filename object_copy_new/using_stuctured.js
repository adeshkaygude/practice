let product = {
  name: "Laptop",
  price: 50000,
  details: {
    brand: "Dell",
    ram: "8GB",
  },
};

let productcopy=structuredClone(product);

productcopy.details.brand="hp";
console.log(product);
console.log(productcopy);

