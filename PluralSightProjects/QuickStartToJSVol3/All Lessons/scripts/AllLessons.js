/*----------------------------
    -- Lesson 1 - Objects --
 -----------------------------*/

// Create a coffee object
var myCoffee = {
    flavor: "espresso",
    temperature: "cold",
    ounces: 24,
    milk: true,
    
    // Method -#Lesson2
    reheat: function () {
        if (myCoffee.temperature !== "cold") {
            myCoffee.temperature = "cold";
            alert("Your coffee has been iced!");
        } else {
            alert("Your coffee is already cold!");
        }
    }
};

/*----------------------------------
    -- Lesson 2 - Methods --
    
    -- See Method "reheat" above --
 -----------------------------------*/
myCoffee.temperature = "hot";
alert("Your coffee is now " + myCoffee.temperature + ". Better ice it.");
myCoffee.reheat();

//Bracket notation
myCoffee["temperature"] = "warm";
alert("Your coffee is now " + myCoffee.temperature + ". Better ice it.");
myCoffee.reheat();
myCoffee.reheat();


/*----------------------------
        -- Lesson 3 --
    
    -- Object Literals    
    -- Object Constructors
 -----------------------------*/

// Object Literal
var mark = {
    name: "Mark",
    tShirtColor: "Navy Blue"
};

var lisa = {
    name: "Lisa",
    shirtColor: "Red"
};

// Object Constructor
function Friend(name, shirtColor) {
    this.name = name;
    this.shirtColor = shirtColor;
}

// Instance of Object
var Danny = new Friend("Denny", "Green");
alert(Danny.name);

/*---------------------------------
    -- Lesson 5 - Global Object --
 ---------------------------------*/
function sayHello() {
    alert("Hello using the alert command");
    window.alert("Hello using the window.alert command");
}

sayHello();
window.sayHello();

// Overrides all the alert commands with a console.log("Hello!!")
/*
function alert(){
    console.log("Hello!!");
}
alert();
*/

/*----------------------------
        -- Lesson 7 --
    
    -- Local & Global Scope    
 -----------------------------*/
var example = "Example";

function alertExample(){
    var anotherExample = "Example inside Function";
    globalExample = "This is bad!";
}

// anotherExample is unreachable because it was declared in the alertExample function
alert(anotherExample);

// globalExample is reachable here because in the alertExample function we did not use the var keywor
// This is very bad and should never be done in practice.
alert(globalExample);

