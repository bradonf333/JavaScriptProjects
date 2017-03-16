/*----------------------------
        -- Lesson 7 --
    
    -- Local & Global Scope    
 -----------------------------*/
var example = "Example";

function alertExample(){
    var anotherExample = "Example inside Function";
    globalExample = "This is bad!";
}

alertExample();
// anotherExample is unreachable because it was declared in the alertExample function
alert(anotherExample);

// globalExample is reachable here because in the alertExample function we did not use the var keywor
// This is very bad and should never be done in practice.
alert(globalExample);