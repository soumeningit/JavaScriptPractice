/*
    Closure is a feature in JavaScript where an inner function has access to the outer 
    function's variables even after the outer function has executed. This allows for data 
    encapsulation and private variables.
*/

function z() {
    let b = 25;
    function x() {
        var a = 10;
        function y() {
            console.log(a, b);
        }
        return y;
    }
    return x;
}

let ans = z();
console.log(ans);
let num = ans();
console.log(num);
num();
