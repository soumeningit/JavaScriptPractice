# Basic JavaScript Questions

- **What is JavaScript? How is it different from Java?**
- **How is `var` different from `let` and `const`?**
- **What are data types in JavaScript?**
- **What is hoisting in JavaScript?**
- **What is the difference between `==` and `===`?**
- **What are truthy and falsy values?**
- **What are global and local variables?**
- **What is the difference between `null` and `undefined`?**
- **What is a closure in JavaScript?**
- **What is the use of `typeof` operator?**

---

## Intermediate JavaScript Questions

- **What are callbacks, promises, and async/await?**
- **What is event bubbling and event capturing?**
- **How does prototypal inheritance work?**
- **What are higher-order functions?**
- **What is the difference between `call`, `apply`, and `bind`?**
- **What is the `this` keyword? How does it work in different contexts?**
- **Explain the concept of IIFE (Immediately Invoked Function Expression).**
- **What is the event loop in JavaScript?**
- **What are arrow functions and how are they different?**
- **How do you deep clone an object in JavaScript?**

---

## Advanced JavaScript Questions

- **Explain how JavaScript handles asynchronous code.**
- **What is a memory leak in JavaScript? How do you prevent it?**
- **What is debouncing and throttling?**
- **What are generators and iterators?**
- **Explain the module pattern in JavaScript.**
- **What are ES6+ features you’ve used?**
- **How does garbage collection work in JavaScript?**
- **What is the difference between synchronous and asynchronous code?**
- **What is the difference between microtask and macrotask queues?**
- **What is a WeakMap and WeakSet?**

---

## DOM & BOM (Browser Object Model)

- **What is the DOM? How can you manipulate it using JavaScript?**
- **How do you attach an event listener to an element?**
- **What is event delegation?**
- **What is the difference between `document.getElementById`, `querySelector`, and `getElementsByClassName`?**
- **How to dynamically create and insert an element in the DOM?**

---

## Array and String Methods

- **Difference between `map()`, `forEach()`, `filter()`, and `reduce()`?**
- **What is the use of `splice()`, `slice()`, and `split()`?**
- **How do you flatten a nested array?**
- **How to remove duplicates from an array?**
- **How to reverse a string in JavaScript?**

---

## Object-Oriented JavaScript (OOP)

- **What is the difference between a class and a function constructor?**
- **What are getters and setters?**
- **Explain encapsulation, inheritance, and polymorphism in JavaScript.**
- **How do you achieve private variables in JavaScript?**
- **What is the role of `super` in class inheritance?**

---

## Code Output / Debugging Questions

```js
var a = 10;
function foo() {
  console.log(a);
  var a = 20;
}
foo(); // What will be the output?
```

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4); // Output?
```

---

## ES6+ and Modern JavaScript

- **What are template literals?**
- **What are default parameters?**
- **What is destructuring?**
- **Explain the spread and rest operators.**
- **What are Set and Map objects?**

---

## Error Handling & Debugging

- **What is the purpose of `try...catch`?**
- **How can you create custom errors?**
- **What is the difference between `throw` and `console.error`?**

---

## JavaScript in the Browser

- **How does `localStorage` differ from `sessionStorage`?**
- **What is the difference between cookies, `localStorage`, and `sessionStorage`?**
- **How to make an AJAX request using `fetch`?**
- **What is CORS? How does JavaScript handle cross-origin requests?**

---

## Miscellaneous / Tricky

- **Why does `typeof NaN` return `"number"`?**
- **Can you add a property to a primitive like `str.myProp = 5;`?**
- **What is tail call optimization?**
- **What’s the output of:**
  - `console.log([] + []);`
  - `console.log([] + {});`
  - `console.log({} + []);`
- **Difference between `Object.freeze()` and `Object.seal()`?**
