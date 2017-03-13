// An Array of friends
var friends = ["Mark", "Lisa", "Danny"];

// Get the area of a shape with 2 sides
function calculateArea(side1, side2) {
    return side1 * side2;
}

// Get a random number
function randomNumber() {
    return Math.random();
}

// Function to easily loop through friends array
function greetFriends() {
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
    }
    console.log();
}

console.log(calculateArea(5, 50));
console.log(randomNumber());
console.log();

// Array Stuff
console.log("Full Array:")
greetFriends();
friends.push("Chuck");
console.log("Push new friend Chuck to the array");
greetFriends();
console.log("No longer friends with Chuck, pop him off the list");
friends.pop();
greetFriends();
