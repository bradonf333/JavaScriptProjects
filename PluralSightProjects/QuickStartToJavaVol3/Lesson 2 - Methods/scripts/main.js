// Create a coffee object
var myCoffee = {
    flavor: "espresso",
    temperature: "cold",
    ounces: 24,
    milk: true,
    
    // Method -#Lesson2
    reheat: function(){
        if(myCoffee.temperature != "cold"){
            myCoffee.temperature = "cold";
            alert("Your coffee has been iced!");
        }
        else {
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
