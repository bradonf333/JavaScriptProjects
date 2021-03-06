// Initialize variables
var name;
var health = 0;
var strength = 0;
var stealth = 0;
var choice;
var charClass;
var outcome;
var storyProgress = 0;
var player;
var regexCamCase = /b/i;
var randBegin;

// Beginning HTML
document.getElementById("mainText").innerHTML = "One day you wake up and the world as you know has ended.  The dead come to life and prey on the living. There is no hope, no cure, only survival.  Welcome to the zombie apocalypse.";

//document.getElementById("mainText").innerHTML = 

// List to hold all beginning scenarios
var beginningScenarios = ["You wake up in a hospital. It is eerily quiet. You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures. You see a small convenience store up ahead and decide to loot it for goods."];

// List of beginning scenario places
var beginningPlace = ["hospital", "white house", "store"];

// List of the main story. Used kind of like a book, each element is a differnt part of the story
var storyHTML = ["Lets get your information so we can start!", "Enter your Name:" + createInputBox("text", "charName") + "<p>Enter Your class: <b>soldier, doctor, politician</b>" + createInputBox("text", "charClass"), "Welcome to the zombie apocalypse ", "placeholder for the beginning of the story", "The brave adventurer and former ", "action?", "endScene"];

// Returns a random number in the given range
function randomNumber(range) {
    "use strict";
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

/*
 *=======================================
 *           -- Functions --
 *=======================================
 */
// Dynamically creates an input in HTML
function createInputBox(type, name, id) {
    this.type = type;
    this.name = name;
    return "<br><input type='" + type + "' name='" + name + "' id='" + name + "'/>";
}

// Object Constructor
function Character(name, health, strength, stealth, charClass) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.stealth = stealth;
    this.charClass = charClass;
}

// Tries to attack the zombie
function attackZombie(storyProgress) {
    this.storyProgress = storyProgress;
    if (player.strength === 5) {
        storyHTML[storyProgress] = "You run towards the zombie hitting it and knocking it over. You look to your right and see a brick laying on the ground....<br><br>You pick up the brick and hit the zombie in the head.<br>You have killed the zombie with your strength.<br><br>You look up and see a baseball bat, pack of beef jerky and some sunglasses.";
        outcome = "win";
    } else if (player.strength < 5) {
        storyHTML[storyProgress] = "You charge the zombie with everything you have....<br>";
        if (player.charClass === "doctor") {
            storyHTML[storyProgress] += ("<br>Being a " + player.charClass + " you do not have the required strength to kill the zombie.<br><br>The zombie tackles you scratching and clawing you to the ground.<br><br>You hit the ground with the zombie on top of you, hurting your leg. You look to your left and see a sharp piece of glass. You grab the glass and stab the zombie in the head.");
            player.health -= 5;
            storyHTML[storyProgress] += ("<br><br>You roll the zombie off you and get up. You only have " + player.health + " health left and you can barely walk. But you get up and loot the store, finding a bag of potato chips, an old soda and a first aid kit.");
            outcome = "win";
        } else if (player.charClass === "politician") {
            storyHTML[storyProgress] += ("<br>Being a " + player.charClass + " you quickly realize you dont have the strength to fight the zombie. Scared out of your mind you try to turn and run from the zombie, only to trip over some debri on the ground.<br><br>You get up as quickly as you can but the zombie is right behind you and lunges at you....<br><br>You have no weapon, you swing a horrible punch at the zombie, missing terribly!! <br>The zombie grabs your arm and bites a huge chunk out of it. You fall to the ground in pain. The zombie falls on top of you and bites your neck....");
            outcome = "lose";
        }
    }
}

// Tries to sneak by the zombie
function sneakZombie(storyProgress) {
    this.storyProgress = storyProgress;
    if (player.stealth === 5) {
        storyHTML[storyProgress] = "Being a " + player.charClass + " you sneak right passed the zombie.<br>You grab some supplies off the ground including a can of refried beans, some old bottle of soda and a rusty pocket knife .";
        outcome = "win";
    } else {
        storyHTML[storyProgress] = "You try to slip by the zombie, but you accidentally stumble over a box of glass soda bottles, alerting the zombie of your existence. It slowly turns its head and shuffles towards you.";
        if (player.charClass === "soldier") {
            storyHTML[storyProgress] += "<br><br>The zombie is much faster than you thought. He is running at you. Being a " + player.charClass + " you are not afraid. You stand your ground as the zombie rushes towards you.<br><br>You take 3 rushing steps towards the zombie, jumping into the air feet first. You drop kick the zombie right in the head. The zombie flies backwards into the air and lands flat on the ground.<br><br>You grab a shovel laying on the ground and smash the zombie.<br><br>Feeling stupid for trying to sneak passed the zombie when you are a " + player.charClass + " you get up and realize you should have just attacked him from the beginning. As you get up you look around for supplies. You find a motocross helmet, an awesome old dirty levi jacket and a whole box of roasted almonds.";
            outcome = "win";
        } else {
            storyHTML[storyProgress] += "<br><br> The zombie is running towards you, much faster than you ever imagined. Being a " + player.charClass + " you realize you are not the sneakiest or the strongest but you are smart. You try to think of something quick to get away from the zombie.";

            // 1 in 3 chance of living
            var liveRatio = randomNumber(3);

            if (liveRatio === 3) {
                storyHTML[storyProgress] += "<br><br>You scan your surroundings and see a huge book shelf barely staying upright. The zombie is closing in on you, you better do something fast. As the zombie is just about to grab you, you jump to the side of the book shelf grabbing the top of it.<br><br>As the zombie just barely misses you the book shelf lands right on top of the zombie pinning him to the ground.<br><br>As the zombie is stuck there scratching and clawing you smash his head.<br><br>When you scanned the area earlier you noticed a cool looking book laying on the ground. You grab the book and a couple of other supplies and head on your way.";
            } else {
                storyHTML[storyProgress] += "<br><br>You are panicking you can't seem to find anything that will help you. As you turn your head back the zombie you realize he is much closer than you expected. He lunges at you as you try to jump out of the way......<br><br>You are too slow, the zombie grabs your leg and bites it.<br>You kick the zombie off with your other foot, but it is too late. You have been bitten!!";
                outcome = "lose";
            }
        }
    }
}

// Add event listener to the Next Button
document.getElementById("nextBtn").addEventListener("click", GenerateInnerHTMLStory);

// Generates the story in the webpage using HTML depending on what part of the story we are at
function GenerateInnerHTMLStory() {
    switch (storyProgress) {
        case 2:
            name = document.getElementById("charName").value;
            name = name.replace(regexCamCase, name[0].toUpperCase());
            charClass = document.getElementById("charClass").value;
            if (charClass === "soldier") {
                strength = 5;
                stealth = 0;
                health = 5;
            }
            if (charClass === "politician") {
                strength = 0;
                stealth = 5;
                health = 5;
            }
            if (charClass === "doctor") {
                strength = 2;
                stealth = 0;
                health = 8;
            }
            player = new Character(name, health, strength, stealth, charClass);
            storyHTML[storyProgress] += (player.name + "<p>Lets begin....</p>");
            break;
        case 3:
            randBegin = randomNumber(beginningScenarios.length - 1);
            storyHTML[storyProgress] = beginningScenarios[randBegin];
            break;
        case 4:
            // User decides to attack or sneak
            storyHTML[storyProgress] += (player.charClass + " " + player.name + " enters the " + beginningPlace[randBegin] + " for some loot.  You notice a zombie slowly shuffling around amongst the destruction. <br><br>What action do you take?<br><br><b>Attack</b>, or attempt to <b>sneak</b> by the zombie?" + createInputBox("text", "playerChoice"));
            break;
        case 5:
            choice = document.getElementById("playerChoice").value;
            if (choice === "attack") {
                attackZombie(storyProgress);
            } else {
                sneakZombie(storyProgress);
            }
            break;
        case 6:
            if (outcome === "win") {
                switch (player.charClass) {
                    case "soldier":
                        storyHTML[storyProgress] = "You grab all the supplies and head on your way. Knowing you're the baddest " + player.charClass + " around.<br><br><font size=22>YOU WIN!!</font><br><br><font size=2>Don't feel too good about yourself though, the soldier wins in all scenarios...</font><br><br>Play again?";
                        break;
                    case "doctor":
                        storyHTML[storyProgress] = "You grab all the supplies and head on your way. Knowing you're the slickest " + player.charClass + " around.<br><br><font size=22>YOU WIN!!</font><br><br><font size=2>You should feel pretty good about yourself the " + player.charClass + " doesn't always win...</font><br><br>Play again?";
                        break;
                    case "politician":
                        storyHTML[storyProgress] = "You grab all the supplies and head on your way. Knowing you're the sneakiest " + player.charClass + " around.<br><br><font size=22>YOU WIN!!</font><br><br><font size=2>Don't feel too good about yourself though, the " + player.charClass + " is weak...</font><br><br>Play again?";
                        break;

                }
            } else {

            }
            break;
    }

    document.getElementById("mainText").innerHTML = storyHTML[storyProgress];
    storyProgress++;
}

// Generate a random beginning window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

/*
// Make sure character is named or give default name
if (!character.name) {
    character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");

    if (!character.name) {
        window.alert("Well I did try to warn you. Gunther Piddles it is then.");
        character.name = "Gunther Piddles";
    }

}
*/
/*
// Sneak passed the zombie. Gives different scenarios based on class
if (choice === "sneak" || choice === "sneak by the zombie") {
    if (character.stealth === 5) {
        window.alert("You sneak by the zombie, you clever bastard.");
    }
    if (character.stealth < 5) {
        window.alert("You try to slip by the zombie, but you accidentally stumble over a can of Beanie Weenies, alerting the zombie of your existence. It slowly turns its head and shuffles towards you.");
        if (character.strength === 5) {
            window.alert("Although you have alerted the zombie to your presence you are able to crush its skull with your bare hands.");
            outcome = "win";
        } else {
            window.alert("Weaponless and weak the zombie chomps down on an arm as you flail wildly in its general direction.");
            outcome = "lose";
        }
    }
}

// Final outcome
if (outcome === "lose") {
    window.alert("You lose!");
} else if (outcome === "win") {
    window.alert("You win!");
}
*/
