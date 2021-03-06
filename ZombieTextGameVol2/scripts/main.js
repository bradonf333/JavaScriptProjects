
var outcome;

window.alert("One day you wake up and the world as you know has ended.  The dead come to life and prey on the living. There is no hope, no cure, only survival.  Welcome to the zombie apocalypse.");

var beginningScenarios = ["You wake up in a hospital.  It is eerily quiet.  You tiptoe to the door and peek out.", "You are standing in an open field west of a white house with a boarded front door. There is a small mailbox here.", "Desperate times call for desperate measures.  You see a small convenience store up ahead and decide to loot it for goods."];

function randomNumber(range) {
    "use strict";
    if (typeof range === "number") {
        return Math.round(Math.random() * range);
    }
}

// Generate a random beginning
window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);


// Create character
var character = {
    health: 5,
    strength: 0,
    stealth: 0,
    name: window.prompt("What is your name?"),
    characterClass: window.prompt("These times test the strengths of our character. What were you before the war? (Choose from: soldier, doctor, or politician)").toLowerCase()

};

// Make sure character is named or give default name
if (!character.name) {
    character.name = window.prompt("I don't know what to call you if you don't enter a name. If you don't answer I will be forced to name you myself...Last chance. What is your name?");

    if (!character.name) {
        window.alert("Well I did try to warn you. Gunther Piddles it is then.");
        character.name = "Gunther Piddles";
    }

}

// Assign attributes based on class chosen
if (character.characterClass === "soldier") {
    character.strength = 5;
}
if (character.characterClass === "politician") {
    character.stealth = 5;
}
if (character.characterClass === "doctor") {
    character.health = 8;
}

// User decides to attack or sneak
var choice = window.prompt("The brave adventurer and former " + character.characterClass + " " + character.name + " enters a store for some loot.  You notice a zombie slowly shuffling around amongst the destruction. What action shall you take? Attack, or attempt to sneak by the zombie? ").toLowerCase();

// Attack the zombie. Gives different scenarios based on the class chosen
if (choice === "attack") {
    if (character.strength === 5) {
        window.alert("Using only your bare hands, you slay that zombie! Success! You loot the store for goods and find an axe, a pack of batteries, and three cans of Beanie Weenies.");
        outcome = "win";
        character.strength++;
    } else if (character.strength <= 5) {
        window.alert("You charge the zombie with everything you have....");
        if (character.characterClass === "doctor") {
            window.alert("Being a " + character.characterClass + " you do not have the required strength to kill the zombie.");
            window.alert("The zombie tackles you scratching and clawing you to the ground.");
            window.alert("You hit the ground with the zombie on top of you, hurting your leg. You look to your left and see a sharp piece of glass. You grab the glass and stab the zombie in the head.")
            character.health -= 5;
            window.alert("You roll the zombie off you and get up. You only have " + character.health + " health left and you can barely walk. But get up and loot the store, finding food and a first aid kit.");
            outcome = "win";
        } else if (character.characterClass === "politician") {
            window.alert("Being a " + character.characterClass + " you quickly realize you dont have the strength to fight the zombie. Scared out of your mind you try to turn and run from the zombie, only to trip over some books on the ground.");
            window.alert("You get up as quickly as you can but the zombie is right behind you and lunges at you....");
            window.alert("You have no weapon, you swing a horrible punch at the zombie, missing terribly");
            window.alert("The zombie grabs your arm and bites a huge chunk out of it. You fall to the ground in pain. The zombie falls on top of you and bites your neck....");
            outcome = "lose";
        }

    }
}

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
