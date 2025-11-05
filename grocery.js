const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];



function total(cart) {
  let total = 0;
  cart.forEach((item) => {
    if (item.price < 5) {
      total += item.quantity * item.price *0.95;
    } else {
      total += item.quantity *item.price;
    }
  });
  if (total > 100) {
    total = total * 0.9;
  }
  return total;
}
total(cart);