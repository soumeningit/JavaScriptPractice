// create an array
let arr = [1, 2, 3, 4, 5];

// create an array with new Array and fill it with zeros
let nums = new Array(5).fill(0);
console.log(nums);
console.log(nums.length);

// check if arr is an array
console.log(Array.isArray(arr));
console.log(arr instanceof Array);

// insert values inside array
for (let i = 0; i < nums.length; i++) {
    nums[i] = i + 1;
}
console.log(nums);

let arr1 = [];
for (let i = 0; i < 5; i++) {
    arr1.push(i + 1);
}
console.log(arr1);

// traverse an array
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let i of arr1) {
    console.log(i);
}

arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});

let a = arr.filter((value) => value !== 3);
console.log("a : " + a + " " + typeof a);

let b = arr.map((value) => value * 10);
console.log("b : " + b);

let sum = arr.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
}, 0);

console.log("Sum of arr: " + sum);

let maxValue = arr.reduce((acc, cur) => {
    if (acc < cur) {
        acc = cur;
    }
    return acc;
}, 0);

console.log("Max value in the arr : " + maxValue);

const transactions = [
    { amount: 1000, type: 'income' },
    { amount: 200, type: 'expense' },
    { amount: 500, type: 'income' },
    { amount: 100, type: 'expense' }
];

const summary = transactions.reduce((acc, curr) => {
    if (curr.type === 'income') {
        acc.income += curr.amount;
        acc.net += curr.amount;
    } else if (curr.type === 'expense') {
        acc.expense += curr.amount;
        acc.net -= curr.amount;
    }
    return acc;
}, { income: 0, expense: 0, net: 0 });

console.log("summary " + JSON.stringify(summary));

const user = [{ name: "John", age: 30, id: 2 }, { name: "Jane", age: 25, id: 4 }];

const userDetails = user.find(user => user.id === 2);
console.log("User Details: " + JSON.stringify(userDetails));

const num = [8, 78, 0, 8, 9, 1, 2, 3, 4, 5, 6, 7];
num.sort((a, b) => a - b); // Sort in ascending or increasing order
console.log("Sorted num: " + num);
num.sort((a, b) => b - a); // Sort in descending or decreasing order
console.log("Sorted num in descending order: " + num);

const reverseArr = arr1.reverse();
console.log("Reversed arr1: " + reverseArr);

let fruits = ["apple", "mango", "cherry", "piech"];
// fruits.sort();
// console.log("Sorted fruits: " + fruits);

// fruits.sort((a, b) => a.localeCompare(b)); // Sort strings in alphabetical order
// console.log("Sorted fruits: " + fruits);

// const deleteEleFromLast = fruits.pop();
// console.log("Deleted element from: " + deleteEleFromLast);

// const deleteEleFromFirst = fruits.shift();
// console.log("Deleted element from first: " + deleteEleFromFirst);

// fruits.splice(3, 1);
// console.log("Fruits after splice: " + fruits);

fruits.splice(2, 0, "pineapple"); // Insert "pineapple" at index 2
console.log("Fruits after inserting pineapple: " + fruits);

// const resultantArray = arr.concat(arr1, nums, fruits);
// console.log("Resultant Array: " + resultantArray);

const resultantArray = [...arr, ...num];
console.log("Resultant Array using spread operator: " + resultantArray);

arr1.push(...fruits); // Add all elements of fruits to arr1
console.log("arr1 after pushing fruits: " + arr1);

console.log(arr);
element = arr.some((num) => num % 2 === 0);
console.log(element);
/*
    The some method check if at least one element in the the array pass the test implemented
    inside the some callback function. It returns boolean value. If at least one element
    passes the test, it returns true, otherwise it returns false.
*/

element = arr.every((num) => num % 2 === 0);
console.log(element);
/*
    The every method check if all elements in the the array pass the test implemented
    inside the every callback function. It returns boolean value. If all elements
    passes the test, it returns true, otherwise it returns false.
*/

element = arr.find((num) => num > 10);
console.log(element);

/*
    The find method returns the first element in the array that satisfies the provided 
    testing function. If no values satisfy the testing function, undefined is returned.
*/

element = arr.findIndex((num) => num > 10);
console.log(element);
/*
    The findIndex method returns the index of the first element in the array that satisfies 
    the provided testing function. If no values satisfy the testing function, -1 is returned.
*/

console.log(typeof fruits);
let str = fruits.join(", ");
console.log("Joined fruits: " + str);
console.log(typeof str);

let x = [1, 2, [10, 20, ["a", "b", "c", [45]]]];
let flatArray = x.flat();
console.log("Flat Array: " + flatArray);

let string = 'hello';
let stringArray = Array.from(string);
console.log(stringArray);

let array1 = [1, 2, 3];
let array2 = [2, 3, 4];
let newArray = [...new Set([...array1, ...array2])];
console.log(newArray);

let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Peter', age: 35 }
];

let sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);

// find intersection of two arrays
ele = array1.filter(value => array2.includes(value));
console.log("Intersection of array1 and array2: " + ele);

/*
    What are sparse arrays and how do they differ from dense arrays?
    Sparse arrays have gaps between elements (i.e., some indices are empty), while dense arrays 
    have elements at every index. Sparse arrays consume less memory for the gaps but can have 
    performance implications.

    const sparseArray = [1, , 3, , 5]; // Contains empty slots
    const denseArray = [1, 2, 3, 4, 5]; // No empty slots
*/

// How to convert an array-like object to an array?
let arrayLikeObject = { 0: 'a', 1: 'b', length: 2 };
let convertedArray = Array.from(arrayLikeObject);
console.log("Converted Array: " + convertedArray);

/*
    How do you remove falsy values from an array?
    Falsy values (false, 0, '', null, undefined, NaN) can be removed from an array 
    using the filter method with a Boolean constructor as the callback.
*/

let mixedArray = [0, 1, false, 2, '', 3, null, 'a', undefined];
let truthyArray = mixedArray.filter(Boolean);
console.log(truthyArray);

