// function square(num) {
//     let ans = num * num;
//     return ans;
// }
// var num = 5;

// console.log(square(5));
// console.log(num);

// ---------------------- How JavaScript Engine Executes Code ----------------------

/*
    As soon as any JavaScript code is executed, the JavaScript engine creates a global
    execution context. The execution context has two parts: One is the Memory and the other
    is the code. And the execution context is created in two phases:
        i. Memory Allocation Phase
        ii. Code Execution Phase
    i. Memory Allocation Phase: In this phase, the JavaScript engine scans the code and
    allocates memory for variables and functions. First it allocates memory, for the variables
    it allocate memory and initialise it with undefined. For the functions, it allocates memory
    and stores the function definition in it.
    So for these example after the first phase, the memory will look like this:
    Memory:
    {
        square: function square(num) {
            let ans = num * num;
            return ans;
        },
        num: undefined
    }
    ii. Code Execution Phase: In this phase, the JavaScript engine executes the code line
    by line. And variables are assigned the value in this phase. So for these example after the
    second phase, now the num = undefined is assigned the value 5, when any function invokes
    (function call) a new execution context is created in the code block of the global execution
    context. And the excution context has its two parts: Memory and Code. It has also has two
    phases: Memory Allocation Phase and Code Execution Phase. In the Memory Allocation Phase,
    the JavaScript engine allocates memory for the function parameters and local variables.
    So for these example after the first phase, the memory will look like this:
    Memory:
    {
        square: function square(num) {
            let ans = num * num;
            return ans;
        },
        num: 5,
        num: undefined,
        ans: undefined
    }
    In the Code Execution Phase, the JavaScript engine executes the code line by line. So for
    these example after the second phase, the memory will look like this:
    Memory:
    {
        square: function square(num) {
            let ans = num * num;
            return ans;
        },
        num: 5,
        num: 5,
        ans: 25
    }
        now when the function execution is completed, the execution context is popped from the
        global execution context and the memory is freed up. So the memory will look like this:
    and the control goes back to the global execution context.

    And the global execution context , execution context all are maintained in a stack
    which is known as the Call Stack or Execution Stack.
    And the stack is used to keep track of the execution context.
*/


// ---------------------- Hoisting ----------------------
/*
    Hoisting is a JavaScript mechanism where variables and function declarations are moved
    to the top of their containing scope during the compilation phase. This means that we 
    can use variables and functions before they are declared in the code.

    In the case of variables, only the declaration is hoisted, not the initialization. 
    So if you try to access a variable before it is initialized, it will return undefined.

    In the case of functions, both the declaration and the definition are hoisted. So we
    can call a function before it is declared in the code.
*/

console.log(square(5)); // 25
console.log(num); // undefined
console.log(square); // f square(num) { ... }

function square(num) {
    let ans = num * num;
    return ans;
}
var num = 5;

console.log("func1 : " + func1); // undefined , because the arrow function get stored inside a variable
console.log(func1()); // "This is a function expression"

var func1 = () => {
    console.log("This is a function expression");
}

console.log("func : " + func); // undefined
console.log(func()); // "This is a function expression"

const func = () => {
    console.log("This is a function expression");
}

console.log(square2(5));
console.log(num2); // undefined
console.log(square2); // f square2(num) { ... }

function square2(num) {
    let ans = num * num;
    return ans;
}
let num2 = 5; // Error: Cannot access 'num2' before initialization
/*
    In case of let and const, they are also hoisted, but they are consist of a 
    "temporal dead zone" (TDZ) which means that they cannot be accessed before
    they are declared. If you try to access them before they are declared, it will
    throw a ReferenceError.
    So, in the case of let and const, the variable is hoisted but it is
    not initialized, and trying to access it before its declaration will result in
    a ReferenceError.
*/


