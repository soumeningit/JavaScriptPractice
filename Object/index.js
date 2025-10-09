const user1 = {};
const user2 = {};

console.log(user1 === user2);

/*
    console.log(user1 === user2) output will be false. This is beacause when we use 
    Non-primitive data types like objects, arrays, functions, etc., they are stored in 
    memory and the value of the variable is not compared but the reference of the variable
    is compared. Since user1 and user2 are two different objects in memory, they have
    different references, hence the comparison returns false.
*/

let str1 = "";
let str2 = "";

console.log(str1 === str2);

/*
    console.log(str1 === str2) output will be true. This is because when we use
    primitive data types like strings, numbers, booleans, etc., their values are compared
    directly. Since str1 and str2 have the same value (an empty string), the comparison
    returns true.
*/

const user = {
    name: "Alice",
    age: 30,
    contact: {
        email: "alice@example.com",
        phone: "123-456-7890",
        address: {
            street: "123 Main St",
            city: "Springfield",
            zip: "12345"
        }
    },
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false
        }
    }
};

console.log(user);

user["contact"]["email"] = "alice.new@example.com";
console.log(user);

const pincode = 123456;
user["contact"]["address"]["pincode"] = pincode;

console.log(user);

// Create a function multiplyByTwo(obj) that multiply all the numeric values of nums by 2.
let nums = {
    a: 100,
    b: 200,
    title: "My nums",
};

function multiplyByTwo(obj) {
    for (let key in obj) {
        console.log(key);
        if (typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

console.log(multiplyByTwo(nums));

// const obj1 = { name: "GFG", age: 14 };
// const obj2 = { alpha: "rule", ...obj1 };
// console.log(obj2);

// const obj = {
//     name: "GFG",
//     level: 4,
//     company: true,
// }
// const res = JSON.stringify(obj, ["name", "level"]);
// console.log(res);
/*
    In this code, the JSON.stringify() method is used to convert the obj object into a 
    JSON string. The second argument passed to JSON.stringify() is an array of keys 
    (["name", "level"]), which acts as a replacer. This means only the properties specified
    in the array will be included in the resulting JSON string.
*/

const operation = {
    value: 20,
    multi() {
        return this.value * 10;
    },
    divide: () => this.value / 10,
};

console.log(operation.multi()); // 200
console.log(operation.divide()); // NaN

/*
    In this code, the "multi" method works correctly because it uses a regular function,
    where "this" refers to the "operation" object, allowing it to access "this.value" and
    return "200". However, the "divide" method is an arrow function, which lexically binds
    "this" to the surrounding context, not the "operation" object. In a browser, "this"
    inside the arrow function refers to the global object, which doesn't have a "value"
    property, so "this.value" is "undefined". As a result, "this.value / 10" results in
    "NaN" because "undefined" divided by 10 is not a valid number.
*/

// function Items(list, ...param, list2) {
//     return [list, ...param, list2];
// }
// Items(["a", "b"], "c", "d");

/*
    The code you provided will result in a syntax error because of the way the parameters 
    are structured in the function definition. In JavaScript, the rest parameter (...param)
    must be the last parameter in the function definition, but in your code, it is placed 
    before list2, which is not allowed.
*/

// let obj1 = { name: "GFG" };
// let obj2 = obj1;
// obj1.name = "GeeksForGeeks";
// console.log(obj2.name); // GeeksForGeeks

// console.log({ name: "GFG" } == { name: "GFG" });
// console.log({ name: "GFG" } === { name: "GFG" });
/*
    Both '==' and '===' operators compare objects by reference, not by their content.
*/

// let obj1 = { name: "GFG" };
// let obj2 = [obj1];
// obj1 = null;

// console.log(obj2);

let obj = { num: 2 };
function fun(x = { ...obj }) {
    console.log("x : " + JSON.stringify(x));
    console.log((x.num /= 2));
}

fun();
fun();
fun(obj);
fun(obj);

/*
    The first two calls to fun() create a new object each time (because of the spread 
    operator), and x.num is divided by 2, logging 1 both times. The last two calls pass 
    the original obj as the argument. Since objects are passed by reference, obj is 
    modified directly, first to { num: 1 } and then to { num: 0.5 }. Thus, 1 and 0.5 are 
    logged accordingly.
*/

let person = {
    name: 'John',
    age: 30,
    greet: function () {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

person.greet();

user.additionalDetails = {
    linkedin: "https//:www.example.com"
};

console.log(user);

delete user.additionalDetails;

console.log(user);

