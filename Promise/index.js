// const API_URL = "https://api.github.com/users/soumeningit";

// fetch(API_URL)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Error fetching data:", error);
//     });

/*
    A Promise is an object representing the eventual completion or failure of an 
    asynchronous operation.
    It is a placeholder for a value that is not yet known but will be resolved in the future.
    Promises can be in one of three states:
    1. Pending: The initial state, neither fulfilled nor rejected.
    2. Fulfilled: The operation completed successfully, resulting in a value.
    3. Rejected: The operation failed, resulting in an error.
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isValid = true;
        if (isValid) {
            resolve("Promise is resolved successfully.");
        } else {
            reject("Promise is rejected.");
        }
    }, 4000);
});

console.log(promise);

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

console.log(promise);
