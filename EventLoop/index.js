// console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// }, 4000)

// console.log("End");

// console.log("Start");

// document.querySelector("#btn")
//     .addEventListener("click", function cb() {
//         console.log("Button Clicked");
//     });

// console.log("End");

console.log("Start");

setTimeout(function cbT() {
    console.log("Timeout Callback");
}, 4000);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function cbF() {
        console.log("Fetch Callback");
    });

// Let assume here is thousand of lines of code

console.log("End");