/*
    In JavaScript, `call`, `apply`, and `bind` are methods used to explicitly set the value 
    of this inside a function.

    - call invokes the function immediately and takes arguments one by one.

    - apply also invokes the function immediately, but takes arguments as an array.

    - bind does not call the function immediately — it returns a new function with this 
    bound to the given context, which can be invoked later.
*/

function fullName(email, contactNumber) {
    return this.firstName + " " + this.lastName + " " + email + " " + contactNumber;
}

let user1 = {
    firstName: "John",
    lastName: "Doe"
};

let user2 = {
    firstName: "Jane",
    lastName: "Smith"
};

// // // Using call
// console.log(fullName.call(user1, "john.doe@example.com", "123-456-7890")); // we can pass arguments one by one after comma
// console.log(fullName.call(user2, "jane.smith@example.com", "098-765-4321"));

// Using Apply
// console.log(fullName.apply(user1, ["john.doe@example.com", "123-456-7890"])); // we can pass arguments as an array
// console.log(fullName.apply(user2, ["jane.smith@example.com", "098-765-4321"]));

// Using Bind
let response = fullName.bind(user1, "john.doe@example.com", "123-456-7890");
console.log(response);
/*
    The bind method returns a new function with the context set to user1,
    and the arguments "
    ƒ fullName(email, contactNumber) {
        return this.firstName + " " + this.lastName + " " + email + " " + contactNumber;
    }
*/

console.log(response()); // Invoking the bound function