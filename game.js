// print divs

var userScore = 0;
var computerScore = 0;

document.getElementById("theUser").value = userScore;
document.getElementById("theComputer").value = computerScore;

// user and computer choices

var gestures = ["rock", "paper", "scissors", "lizard", "spock"];

var rules = {
    rock:     { scissors: "breaks",  lizard: "crushes"     },
    paper:    { rock:     "covers",  spock:  "disproves"   },
    scissors: { paper:    "cuts",    lizard: "decapitates" },
    lizard:   { paper:    "eats",    spock:  "poisons"     },
    spock:    { scissors: "smashes", rock:   "vaporizes"   }
};

function play(index) {
    var your = gestures[index];
    var mine = gestures[Math.floor(5 * Math.random())];
    if (your === mine) return alert("Draw. We both played " + your + ".");
    var win = rules[your].hasOwnProperty(mine);
    var result = win ? "win" : "lose";
    var a = win ? your : mine;
    var b = win ? mine : your;

    alert("You " + result + ": " + a + " " + rules[a][b] + " " + b + ".");

    if (mine === a) {
    computerScore += 1; //increments score
    document.getElementById("theComputer").value = computerScore;
    } else if (mine === b) {
    userScore += 1; //increments score
    document.getElementById("theUser").value = userScore;
    } else {
    null
    }
}
