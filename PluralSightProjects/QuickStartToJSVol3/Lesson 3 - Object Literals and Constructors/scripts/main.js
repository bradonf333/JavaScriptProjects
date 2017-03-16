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