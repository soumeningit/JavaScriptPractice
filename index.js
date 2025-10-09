// {
//     var a = 5;
//     var b = 10;
//     console.log(a); // 5
//     console.log(b); // 10
// }

// console.log(a); // 5
// console.log(b); // 10

// {
//     let a = 5;
//     let b = 10;
//     console.log(a); // 5
//     console.log(b); // 10
// }
// console.log(a);
// console.log(b);
/*
    a and b are block-scoped variables, declared with let. so they are only accessible 
    within the block they are defined in. Outside of that block, they are not accessible.
    This means when error happens in a then it will not affect the b variable, and b will
    not run it will show error.
*/

let x = 5;

function func() {
    console.log(x)
    let x = 10;
}

func();

/*
    In this case, the function will show an error because as the x variable is available in
    global scope and also in the function scope, it will not be able to access the global x
    variable because of the hoisting. The function will try to access the local x variable
    which is not defined yet, hence it will throw a ReferenceError. But if we remove the
    let x = 10; line then it will print the global x variable value which is 5. But if 
    we make x is let to var then it will print undefined because of hoisting.
*/
