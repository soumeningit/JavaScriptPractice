/*
    Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are 
    executed immediately after they are defined. They are typically used to create a local 
    scope for variables to prevent them from polluting the global scope.
*/

/*
The Problem: Global Scope Pollution
In JavaScript, variables declared with var (before ES6) are function-scoped or globally 
scoped if declared outside a function. This means:

    Any variable declared globally can be accessed or modified from anywhere.
    This leads to accidental overwriting of variables or conflicts in large codebases.
Example:
    var counter = 0;

    function increment() {
    counter++;
    }

    increment();
    console.log(counter); // 1

    Now any other script can modify `counter`, leading to potential bugs.

One of the solution is using IIFE
    An IIFE is a function that runs immediately after it's defined, creating its own local 
    scope — meaning variables inside it don’t leak into the global scope.

    (function() {
    var counter = 0;

    function increment() {
        counter++;
        console.log(counter);
    }

    increment(); // 1
    })();

    console.log(typeof counter); // "undefined"


*/

// Name IIFE
(function iife() {
    console.log("This is a named IIFE (Immediately Invoked Function Expression)");
})();

/*
    To write to IIFE in a same file, we must put ; the semicolon at the end of the first
    IIFE to avoid syntax errors.
*/

// Unnamed IIFE
(() => {
    console.log("This is an unnamed IIFE (Immediately Invoked Function Expression)");
})();

// pass argument to IIFE
((message) => {
    console.log(`This is an IIFE with a parameter: ${message}`);
})("Hello, IIFE!");

// IIFE with return value
const result = ((a, b) => {
    return a + b;
})(5, 10);
console.log(`The result of the IIFE is: ${result}`);



