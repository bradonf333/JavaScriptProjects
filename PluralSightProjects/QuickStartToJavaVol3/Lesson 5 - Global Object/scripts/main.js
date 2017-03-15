/*---------------------------------
    -- Lesson 5 - Global Object --
 ---------------------------------*/
function sayHello(){
    alert("Hello using the alert command");
    window.alert("Hello using the window.alert command");
}

sayHello();
window.sayHello();

// Overrides all the alert commands with a console.log("Hello!!")
function alert(){
    console.log("Hello!!");
}
alert();
