let arr = ["Soumen", "Parthiv", "Rajesh"];

let object = {
    name: "Soumen",
    city: "Chandrokona",
    greet: function () {
        console.log("Hello, " + this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Srabani",
}

object2.__proto__ = object;

// need to learn more about prototype inheritance