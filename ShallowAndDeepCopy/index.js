let user1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    social: {
        twitter: "@john",
        facebook: "john.doe"
    }
};

// let anotherUser = user1;
// console.log(anotherUser);
// console.log(anotherUser === user1); // true --> that means both variables point to the same object in memory.
/*
    anotherUser is not copy of object user1, it is a reference to the same object.
    If we change anotherUser, user1 will also change.
*/
// anotherUser.name = "Jane";
// console.log(anotherUser);
// console.log(user1);

// ------- Shallow Copy ---------
/*
    A shallow copy create a new object and copies the top-level properties of an object to
    a new variable. In this process, only the top-level properties are copied, while nested
    objects or arrays still reference the original memory location. This means that if we 
    change the nested properties in one object, those changes will reflect in the other 
    because they share the same memory reference.
*/

let user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    social: {
        twitter: "@john",
        facebook: "john.doe"
    }
};

// let user_one = { ...user };
// console.log(user_one);
// console.log(user_one === user); // false --> user_one is a new object.

// user_one.name = "Jane";
// user_one.address.city = "Los Angeles";
/*
    user_one.address.city = "Los Angeles"; this will change the city in user_one object as 
    well as in the user object also because address is a nested object and it is still
    referencing the same memory location.
    So, if we change the nested properties in user_one, it will also change in user object.
    If we want to change the nested properties in user_one without changing the user object,
    we need to create a deep copy of the object.
*/
// console.log(user_one);
// console.log(user);

// let user_two = JSON.parse(JSON.stringify(user));
// console.log(user_two);
// user_two.name = "Jane";
// user_two.address.city = "Los Angeles";
// user_two.social.twitter = "@jane";
// user_two.social.facebook = "jane.doe";
// console.log(user_two);
// console.log(user);

function makeDeepCopy(object) {
    if (object === null || typeof object !== 'object') {
        return object; // Return the value if it's not an object or is null
    }

    let copiedValue = Array.isArray(object) ? [] : {};

    let keys = Object.keys(object);

    for (let i = 0; i < keys.length; i++) {
        copiedValue[keys[i]] = makeDeepCopy(object[keys[i]]);
    }

    return copiedValue;
}

let user_two = makeDeepCopy(user);

// console.log(user);

// console.log(user_two);

user_two.name = "Jane";
user_two.address.city = "Los Angeles";
user_two.social.twitter = "@jane";
user_two.social.facebook = "jane.doe";

console.log(user);

console.log(user_two);

/* ------------------- DRY RUN EXAMPLE ------------------- */

let person = {
    name: "Soumen",
    age: 22,
    address: {
        city: "Kolkata",
        pin: 700001
    },
    hobbies: ["coding", "music"]
};

/*
makeDeepCopy(person)
--------------------------------------------
object = person
=> typeof object = "object" ✅
=> copiedValue = {} (since person is an object)
=> keys = ["name", "age", "address", "hobbies"]

Loop begins:

1️⃣ i = 0, key = "name"
   copiedValue["name"] = makeDeepCopy("Soumen")
       -> "Soumen" is not an object → returns "Soumen"
   => copiedValue = { name: "Soumen" }

2️⃣ i = 1, key = "age"
   copiedValue["age"] = makeDeepCopy(22)
       -> 22 is not an object → returns 22
   => copiedValue = { name: "Soumen", age: 22 }

3️⃣ i = 2, key = "address"
   copiedValue["address"] = makeDeepCopy({ city: "Kolkata", pin: 700001 })
       -> New recursive call
          object = { city: "Kolkata", pin: 700001 }
          => copiedValue = {}
          => keys = ["city", "pin"]
          Loop:
             i = 0 → copiedValue["city"] = makeDeepCopy("Kolkata") → returns "Kolkata"
             i = 1 → copiedValue["pin"] = makeDeepCopy(700001) → returns 700001
          return { city: "Kolkata", pin: 700001 }
   => copiedValue["address"] = { city: "Kolkata", pin: 700001 }

   copiedValue now =
   {
     name: "Soumen",
     age: 22,
     address: { city: "Kolkata", pin: 700001 }
   }

4️⃣ i = 3, key = "hobbies"
   copiedValue["hobbies"] = makeDeepCopy(["coding", "music"])
       -> New recursive call
          object = ["coding", "music"]
          => copiedValue = []  (since it’s an array)
          => keys = ["0", "1"]
          Loop:
             i = 0 → copiedValue["0"] = makeDeepCopy("coding") → returns "coding"
             i = 1 → copiedValue["1"] = makeDeepCopy("music") → returns "music"
          return ["coding", "music"]
   => copiedValue["hobbies"] = ["coding", "music"]

Loop ends ✅

Return final copiedValue:
{
  name: "Soumen",
  age: 22,
  address: { city: "Kolkata", pin: 700001 },
  hobbies: ["coding", "music"]
}
*/

let copiedPerson = makeDeepCopy(person);

console.log(copiedPerson);

/*
📊 Final Output:
{
  name: "Soumen",
  age: 22,
  address: { city: "Kolkata", pin: 700001 },
  hobbies: ["coding", "music"]
}

Check independence (Deep Copy confirmation)
copiedPerson.address.city = "Delhi";
copiedPerson.hobbies.push("travel");

console.log(person.address.city); // "Kolkata" ✅ original unchanged
console.log(person.hobbies);      // ["coding", "music"] ✅ unchanged
console.log(copiedPerson.hobbies); // ["coding", "music", "travel"]
*/