# Tricky JavaScript Questions

## Hoisting & Scoping

**What will be the output?**

```javascript
console.log(a);
var a = 10;
```

**What’s the difference between `let`, `const`, and `var` in terms of scoping and hoisting?**

---

**What will this print?**

```javascript
function test() {
  console.log(a);
  var a = 5;
}
test();
```

**What is the Temporal Dead Zone (TDZ)?**

---

## 🧠 Closures & Lexical Scope

**Explain closures. Give a use case.**

---

**What will be the output and why?**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**Fix the above code to print 0 1 2.**

---

**What will this output?**

```javascript
let funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => console.log(i));
}
funcs[0]();
funcs[1]();
funcs[2]();
```

---

## 🤯 Type Coercion

**What is the output of the following expressions?**

```javascript
[] + []       // ?
[] + {}       // ?
{} + []       // ?
{} + {}       // ?
```

---

**What will this return?**

```javascript
console.log(null == undefined); // ?
console.log(null === undefined); // ?
```

**What is typeof NaN?**

---

**What's the result of:**

```javascript
true + true; // ?
false + 1; // ?
"5" - 2; // ?
"5" + 2; // ?
```

---

## 🔄 Event Loop & Async JS

**What is the output?**

```javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
```

**What’s the difference between microtasks and macrotasks?**

**Which will execute first: `Promise.then()` or `setTimeout()`?**

---

## 🧵 This, Bind, Call, Apply

**What will be logged?**

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
const greet = person.greet;
greet(); // ?
```

**How to fix the above issue using `bind()`?**

**Explain the difference between `call`, `apply`, and `bind`.**

---

## 🧩 Objects & Arrays

**What's the output?**

```javascript
const obj = { a: 1 };
const obj2 = obj;
obj2.a = 2;
console.log(obj.a); // ?
```

---

**What will happen here?**

```javascript
const a = {};
const b = {};
console.log(a == b); // ?
console.log(a === b); // ?
```

---

## 🧮 Equality & Comparison

**What will be the output?**

```javascript
console.log(0 == "0"); // ?
console.log(0 === "0"); // ?
```

**Why is `[] == false` true, but `[] === false` false?**

**What’s the difference between `Object.is(a, b)` and `a === b`?**

---

## 🧰 Destructuring & Spread/Rest

**What is the output?**

```javascript
const a = [1, 2, 3];
const [x, , y] = a;
console.log(x, y); // ?
```

**Explain the difference between shallow copy and deep copy in JavaScript.**

---

## 🔐 Miscellaneous

**What’s the difference between `==` and `===`?**

**What does `'use strict'` do?**

**What is the difference between synchronous and asynchronous code?**

**What are IIFEs and why are they used?**

---

**What is the result?**

```javascript
(function () {
  var a = (b = 3);
})();
console.log(typeof b); // ?
```
