function createCart() {
  let item = 0;
  function addItem(name, value) {
    item = item + value;
    return name + " " + "added";
  }

  function getTotal() {
    return item;
  }
  return {
    addItem,
    getTotal,
  };
}

let cart = createCart();

console.log(cart.addItem("Laptop", 50000)); // Laptop added
console.log(cart.addItem("Mouse", 1000)); // Mouse added
console.log(cart.getTotal()); // 51000
