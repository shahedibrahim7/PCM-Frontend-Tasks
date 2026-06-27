console.log("=== SHOPPING CART SYSTEM ===");

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Mouse", price: 50 }
];

//1. FILTER PRODUCTS (price > 100)

const expensiveProducts = products.filter(product => product.price > 100);

console.log("\nExpensive Products:");
console.log(expensiveProducts);

//2. MAP PRODUCTS (add tax 10%)
const productsWithTax = products.map(product => {
  return {
    ...product,
    priceWithTax: product.price * 1.1
  };
});

console.log("\nProducts with Tax:");
console.log(productsWithTax);

//3. REDUCE (TOTAL PRICE)

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("\nTotal Price:");
console.log(totalPrice);

//4. SHOPPING CART LOGIC
// (add items + calculate total)

const cart = [1, 2, 4]; // product IDs

const cartItems = cart.map(id => {
  return products.find(product => product.id === id);
});

console.log("\nCart Items:");
console.log(cartItems);

const cartTotal = cartItems.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log("\nCart Total:");
console.log(cartTotal);