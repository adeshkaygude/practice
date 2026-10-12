function ShoppingCart(name) {
  this.name = name;
  let items = [];

  function addItem(product, price, quantity) {
    if (price <= 0 || quantity <= 0) {
      throw new Error("Price and quantity must be positive");
    }

    items.push({
      name: product,
      price: price,
      quantity: quantity,
    });
  }

  function getTotal() {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  function removeItem(product) {
    items = items.filter((item) => item.name !== product);
  }

  return {
    addItem,
    getTotal,
    removeItem,
  };
}

const cart1 = new ShoppingCart("Adesh");

cart1.addItem("Laptop", 50000, 1);
cart1.addItem("Mouse", 500, 2);

console.log(cart1.getTotal());

cart1.removeItem("Mouse");

console.log(cart1.getTotal());
