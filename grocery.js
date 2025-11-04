const cart = [
  { name: "Apples", price: 3.5, quantity: 4 },
  { name: "Milk", price: 4.75, quantity: 2 },
  { name: "Steak", price: 15.99, quantity: 3 },
  { name: "Cereal", price: 5.25, quantity: 1 },
  { name: "Bananas", price: 1.25, quantity: 6 }
];

let total = 0;

function totalPrice() {
    for (let i = 0; i < cart.length; i++) {
      if (cart.price < 5) {
        price *= 0.95;
      }
      total += cart.price * cart.quantity;
      if (total > 100) {
        price *= 0.9
      }
    }
}
totalPrice()
console.log(`Your final total is ${total} after all discounts.`)