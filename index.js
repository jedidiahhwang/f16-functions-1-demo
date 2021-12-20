// Data Type Conversion

/*
    Boolean - Boolean()
    Number - STRICT: + and Number() LOOSE: parseInt()
    String - String()
*/

let booleanNumber = -1000;
// console.log(Boolean(booleanNumber));

let booleanString = "false";
// console.log(Boolean(booleanString));

let numberString = "10ft";
// console.log(Number(numberString));
// console.log(+numberString);
// console.log(parseInt(numberString));

// String Methods

/*
    .includes() - Checks to see if one string contains another.
    .startsWith() - Checks to see if the string starts with a specified character.
    .endWith() - Checks to see if the string ends with a specified character.
    .replace()/replaceAll() - Replaces a specified string with another string.
    .toLowerCase()/.toUpperCase() - Changes the casing of the string respectively.
    .split() - Splits the string into an array depending on the character supplied.
    .join() - Joins the array into a single string depending on the character supplied.
*/

let theWinnerIs = "Aragorn is the winner.";
// console.log(theWinnerIs.includes("Aragorn"));
// console.log(theWinnerIs.startsWith("aragorn"));
// console.log(theWinnerIs.endsWith("winner."));

let newString1 = theWinnerIs.replace("aragorn", "O");
// console.log(newString1);
let newString2 = theWinnerIs.replaceAll("r", "y").replaceAll("i", "z");
// console.log(newString2);

let theWinnerIsLower = theWinnerIs.toLowerCase();
// console.log(theWinnerIsLower);
let theWinnerIsUpper = theWinnerIs.toUpperCase();
// console.log(theWinnerIsUpper);

let theWinnerSplit = theWinnerIs.split(" ");
// console.log(theWinnerSplit);
let theWinnerJoin = theWinnerSplit.join("%hi%");
// console.log(theWinnerJoin);

// Functions

/*
    Function Declaration

    function funcName(param) {
        ...
    };
*/

let aragornHealth = 100;

function isAragornAlive() {
    if(aragornHealth > 0) {
        console.log("Aragorn survived the fall.");
    } else {
        console.log("RIP Aragorn.");
    };
};

// isAragornAlive();

function surpriseAttack(attack) {
    aragornHealth -= attack; // aragornHealth = aragornHealth - attack;
    isAragornAlive();
};

// surpriseAttack(80);
// surpriseAttack(20);

/*
    Function Expression

    const funcName = function() {
        ...
    };
*/

const greeting = function(person1, person2) {
    console.log(`${person1} and ${person2} say hello to each other.`);
};

// greeting("Legolas", 100, "Gandalf");

/*
    Arrow Functions

    const funcName = () => {
        ...
    };
*/

const rollDice = () => {
    let possibleRolls = [1, 2, 3, 4, 5, 6];
    let randomNumber = Math.floor(Math.random() * possibleRolls.length);

    return possibleRolls[randomNumber];
};

let firstRoll = rollDice();
let secondRoll = rollDice();

// console.log(firstRoll, secondRoll);

const diceMultiplier = () => {
    let firstRollMultiplier = rollDice();
    let secondRollMultiplier = rollDice();

    return firstRollMultiplier * secondRollMultiplier;
};

let multipliedNumber = diceMultiplier();
// console.log(diceMultiplier());
console.log(multipliedNumber);
