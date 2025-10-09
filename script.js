// JavaScript is Statically Typed Language or Dynamically Typed Language?

// How is var different from let and const?

// console.log(x); // undefined
// var x = 10;

// console.log(a); // error: Cannot access 'a' before initialization
// let a = 10;

// console.log(b);
// const b = 10;

/*
    Due to the concept of hoisting, variable declerations are moved to top of their scope.
    However, var is initialised with undefined until the line get executed where it is
    assigned a value.
    Incase of let and const, they are also hoisted but they are not initialized. They are
    in a "temporal dead zone" until the line where they are declared is executed.
    This is why accessing them before declaration results in a ReferenceError.
*/
// -- Redeclaration --
// var x = 20; // Allowed
// let a = 20; // Error: Identifier 'a' has already been declared


// What are data types in JavaScript?
/*
    Their are 2 main categories of data types in JavaScript:
    1. Primitive Data Types:
        - Number
        - String
        - Boolean
        - Null
        - Undefined
        - Symbol
        - BigInt
    2. Reference Data Types:
        - Object
        - Array
        - Function
*/

/*
    All the primitive data types are used stack memory, meaning that they are stored
    directly in the memory location. When we assign a primitive value to a variable,
    the variable holds the actual value itself. If we assign that variable to another
    variable, a new copy of the value is created in memory. This means that changes made
    to one variable do not affect the other, as they are independent copies.

    Reference data types, on the other hand, are stored in heap memory. When we assign
    a reference data type to a variable, the variable holds a reference (or pointer) to
    the memory location where the actual data is stored. If we assign that variable to
    another variable, both variables will point to the same memory location. This means
    that changes made to one variable will affect the other, as they both reference the
    same data in memory.
*/

// What is hoisting in JavaScript?

