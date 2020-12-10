// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
// User must be prompted for password lenght (between 8 and 128) and prompted for the inclusion of upper and lower letters, numbers, and/or symbols. These values will be saved in variables and used later.

// The lenght inputted will be probably be able to be used to form a loop that will loop through a process however many times needed to reach the needed number of characters

// For each loop a value will be pulled (I guess from an array or object of some sort?) using a random process, with the pool of characters being dependant on which prompts are marked as false or true

// There should be a check afterwards to ensure that at least one symbol of each type specified as true has been chosen, this being if I have chosen to contain all possible characters at any given time within a few arrays meaning that there will be a chance present that one type doesn't get rolled even while specified. Either that or I create a better proccess to pick out and jumble the characters.

// The characters chosen should be joined together into a single string at the end of the process and returned at the end of the function. The code is already present to show the result of this function as text and hopefully nothing further will have to be done beyond this point.
}