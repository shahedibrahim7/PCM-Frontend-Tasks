// OBJECTS & ARRAYS

console.log("\n=== OBJECTS & ARRAYS ===");

const user = {
  name: "Ali",
  age: 25
};

const products = ["Laptop", "Phone", "Tablet"];

console.log(user.name);
console.log(products[1]);


// DESTRUCTURING

console.log("\n=== DESTRUCTURING ===");

const student = {
  name: "Sara",
  age: 22
};

const { name, age } = student;

console.log(name, age);

const colors = ["red", "green", "blue"];
const [first, second] = colors;

console.log(first, second);


// SPREAD OPERATOR

console.log("\n=== SPREAD OPERATOR ===");

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);

const user1 = { name: "Omar", age: 30 };
const user2 = { ...user1, age: 31 };

console.log(user1);
console.log(user2);


// IMMUTABILITY

console.log("\n=== IMMUTABILITY ===");

const original = { name: "Ali", age: 20 };

// WRONG (mutation)
// original.age = 21;

// CORRECT (new object)
const updated = { ...original, age: 21 };

console.log(original);
console.log(updated);


// DATA STRUCTURE TASK

console.log("\n=== USERS & PRODUCTS SYSTEM ===");

const users = [
  {
    id: 1,
    name: "Ali",
    products: ["Laptop", "Mouse"]
  },
  {
    id: 2,
    name: "Sara",
    products: ["Phone"]
  }
];

// Add product immutably
const updatedUsers = users.map(user => {
  if (user.id === 1) {
    return {
      ...user,
      products: [...user.products, "Keyboard"]
    };
  }
  return user;
});

console.log(updatedUsers);

// Find user
const ali = users.find(u => u.name === "Ali");
console.log(ali);

// Remove product
const cleanedUsers = users.map(user => {
  if (user.id === 2) {
    return {
      ...user,
      products: user.products.filter(p => p !== "Phone")
    };
  }
  return user;
});

console.log(cleanedUsers);