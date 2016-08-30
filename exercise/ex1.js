//Rock paper scissors game
// R is shortcut of "rock";
// S is shortcut of "scissor";
// P is shortcut of "paper";

//built the rule of game. R>S, S>P, P>R. `>` means defeat.
var whoWin = function(user, computer) {
    if (user === "R") {
        if (computer === "R") {
            return "No winner.";
        } else if (computer === "S") {
            return "Winner is user."
        }
        else if (computer === "P") {
           return "Winner is computer."
        }
    } else if (user === "S") {
        if (computer === "R") {
            return "Winner is computerNo winner.";
        }
        else if (computer === "S") {
            return "No winner."
        } else if (computer === "P") {
           return "Winner is user."
        }
    } else {
        if (computer === "R") {
            return "Winner is user.";
        } else if (computer === "S") {
            return "Winner is computer."
        } else if (computer === "P") {
           return "No winner."
        }
    }
};

//play the game.
var userChoice = prompt("please input user choice(R/S/P):");
var comChoice = prompt("please input computer choice(R/S/P):");

whoWin(userChoice, comChoice)



       
    