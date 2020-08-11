/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 21;

if (votingAge > 18) {
    console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myMood = "Meh";

let dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
    myMood = "Meh";
} else if (dayOfWeek === "Friday") {
    myMood = "Hooray! It's Friday!"
}

console.log("My mood: " + myMood);


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));

//Task d: Write a function to multiply a*b 

const multiplyNumbers = (a, b) => a * b;

console.log(multiplyNumbers(5, 4));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const dogYears = (myAge) => myAge * 7;

console.log("My Age in dog years: " + dogYears(26));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function poundsPerDay (weight, age) {
    if (age < 1) {
        if (age >= (2/12) && age < (4/12)) {
            return weight * .1;
        } else if (age >= (4/12) && age < (7/12)) {
            return weight * .05;
        } else if (age >= (7/12) && age < (12/12)) {
            return weight * .04;
        }
    } 
    else if (age >= 1) {
        if (weight <= 5) {
            return weight * .05;
        } 
        else if (weight <= 10) {
            return weight * .04;
        } 
        else if (weight <= 15) {
            return weight * .03;
        } 
        else if (weight > 15) {
            return weight * .02;
        }
    }
}

console.log("Amount of food per day: " + poundsPerDay(15, 1) + " pounds.");

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// 1=rock
// 2=paper
// 3=scissors

function rockPaperScissors (yourChoice) {
    computerChoice = Math.floor(Math.random() * 3) +1;
    if (yourChoice === "rock" && computerChoice === 3) {
        return "Rock breaks scissors. You win!"
    } else if (yourChoice === "rock" && computerChoice === 2) {
        return "Paper covers rock. You lose!"
    } else if (yourChoice === "rock" && computerChoice === 1) {
        return "Draw!";
    } else if (yourChoice === "paper" && computerChoice === 3) {
        return "Scissors cut paper. You lose!"
    } else if (yourChoice === "paper" && computerChoice === 2) {
        return "Draw!"
    } else if (yourChoice === "paper" && computerChoice === 1) {
        return "Paper covers rock. You win!"
    } else if (yourChoice === "scissors" && computerChoice === 3) {
        return "Draw!"
    } else if (yourChoice === "scissors" && computerChoice === 2) {
        return "Scissors cut paper. You win!"
    } else if (yourChoice === "scissors" && computerChoice === 1) {
        return "Rock breaks scissors. You lose!"
    }
}

console.log(rockPaperScissors("scissors"));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kilometersToMiles = (kilometers) => kilometers * 0.621371;

console.log(kilometersToMiles(5));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feetToCentimeters = (feet) => feet * 30.48;

console.log(feetToCentimeters(5));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong (startingNumber) {
    for (let i = startingNumber; i > 0; i -= 1) {
        console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + (i-1) + " bottles of soda on the wall.");
    }
}

annoyingSong(5);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade (mark) {
    if (mark < 60) {
        return "Letter grade: F";
    } else if (mark < 70) {
        return "Letter grade: D";
    } else if (mark < 80) {
        return "Letter grade: C";
    } else if (mark < 90) {
        return "Letter grade: B";
    } else if (mark < 100) {
        return "Letter grade: A";
    }
}

console.log(letterGrade(Math.floor(Math.random()*100)));
  
/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





