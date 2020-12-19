/* Variable declaration */

// Character variables

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var spec = "~!@#$%^+&*-()[/]_{:}<=>?";

// User input variables

var userInput = prompt(
  "Please choose a number between 8 and 128 for your password length"
);

var alphaLow = confirm("Would you like to use lowercase letters?");
var alphaCap = confirm("Would you like to use uppercase letters?");
var numbers = confirm("Would you like to you use numbers also?");
var charSpec = confirm("How about special characters?");

/*    -----------------------------------   */

/* Function Declaration */

function gerneratePassword() {
  if (userInput >= 8 && userInput <= 128) {
    for (var i = 0; i < userInput; i++) {
      if (alphaLow && alphaCap && numbers && charSpec) {
      }
    }
  }
}

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
