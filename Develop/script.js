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

//Function for choosing which set of characters to use based on the confirms
function decideCharset() {
  //Horribly inefficient method, but all characters were put into their own arrays which will be combined based on the confirmations given by the user on their desired characters. Backslash didn't want to cooperate with this method and is not present. Space was also not included in this as I did not want it to end up at the start or end of a password (and also I don't believe many passwords actually want any spaces). The confirms also ended up moved into here whilst I was trying to find the source of a completely unrelated error but whatever.
  var numConf = confirm("Would you like to include numbers in your password?");

  var upperConf = confirm("Would you like to include uppercase letters in your password?");
  
  var lowerConf = confirm("Would you like to include lowercase letters in your password?");
  
  var symbConf = confirm("Would you like to include symbols in your password?");
  if (numConf === false && upperConf === false && lowerConf === false && symbConf === false) {
    alert("Please choose at least one character type!");
    generatePassword();
  }

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
  var numUpper = numbers.concat(upperCase);
  var numLower = numbers.concat(lowerCase);
  var numSymb = numbers.concat(symbols);
  var upperLower = upperCase.concat(lowerCase);
  var upperSymb = upperCase.concat(symbols);
  var lowerSymb = lowerCase.concat(symbols);
  var numUpperLower = numbers.concat(upperCase, lowerCase);
  var numUpperSymb = numbers.concat(upperCase, symbols);
  var numLowerSymb = numbers.concat(lowerCase, symbols);
  var upperLowerSymb = upperCase.concat(lowerCase, symbols);
  var all = numbers.concat(upperCase, lowerCase, symbols);
  
  if (numConf === true && lowerConf === false && upperConf === false && symbConf === false) {
    return numbers
  }
  else if (numConf === false && lowerConf === false && upperConf === true && symbConf === false) {
    return upperCase
  }
  else if (numConf === false && lowerConf === true && upperConf === false && symbConf === false) {
    return lowerCase
  }
  else if (numConf === false && lowerConf === false && upperConf === false && symbConf === true) {
    return symbols
  }
  else if (numConf === true && lowerConf === true && upperConf === false && symbConf === false) {
    return numLower
  }
  else if (numConf === true && lowerConf === false && upperConf === true && symbConf === false) {
    return numUpper
  }
  else if (numConf === true && lowerConf === false && upperConf === false && symbConf === true) {
    return numSymb
  }
  else if (numConf === false && lowerConf === true && upperConf === true && symbConf === false) {
    return upperLower
  }
  else if (numConf === false && lowerConf === false && upperConf === true && symbConf === true) {
    return upperSymb
  }
  else if (numConf === false && lowerConf === true && upperConf === false && symbConf === true) {
    return lowerSymb
  }
  else if (numConf === true && lowerConf === true && upperConf === true && symbConf === false) {
    return numUpperLower
  }
  else if (numConf === true && lowerConf === false && upperConf === true && symbConf === true) {
    return numUpperSymb
  }
  else if (numConf === true && lowerConf === true && upperConf === false && symbConf === true) {
    return numLowerSymb
  }
  else if (numConf === false && lowerConf === true && upperConf === true && symbConf === true) {
    return upperLowerSymb
  }
  else {
    return all
  }
  }









function generatePassword() {

// User is prompted for how many characters they want. Their answer is converted into a number and then passed through a check to determine if it is a valid answer. If the answer is not valid (Too small or large of a number or not a number at all), the function resets and the user is prompted again instead of being able to continue.
var passLength = prompt("How many characters long do you want your password to be? (Between 8 and 128 characters only)")

var passLengthNum = parseInt(passLength, 10);

if (passLengthNum < 8 || passLengthNum > 128 || isNaN(passLengthNum) === true ) {
generatePassword();
}
//Password Generation Finale
else {
  var charSet = decideCharset();
  var frigginPassword = " "
  for (i = 0; i < passLengthNum; i++) {
    
    frigginPassword += charSet[Math.floor(Math.random() * charSet.length)];
}
  return frigginPassword
}
}

// Passwords need to be checked for presence of all characters specified, with current methods it is possible to miss a given character at random. I will look into this, however at the very least passwords can still be generated just with a chance of imperfection.

