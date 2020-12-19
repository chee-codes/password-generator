/* Variable declaration */

// Character variables

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var spec = "~!@#$%^+&*-()[/]_{:}<=>?";

var allChar = lower + upper + nums + spec;

var pWord = "";

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

function generatePassword() {
  if (userInput >= 8 && userInput <= 128) {
    for (var i = 0; i < userInput; i++) {
      if (alphaLow && alphaCap && numbers && charSpec) {
        pWord += allChar.charAt(Math.floor(Math.random() * allChar.length));
      } else if (
        alphaLow === true &&
        alphaCap === true &&
        numbers === true &&
        charSpec === false
      ) {
        pWord += charOp1.charAt(Math.floor(Math.random() * charOp1.length));

        //lower + upper + Special
      } else if (
        alphaLow === true &&
        alphaCap === true &&
        charSpec === true &&
        numbers === false
      ) {
        pWord += charOp2.charAt(Math.floor(Math.random() * charOp2.length));

        //lower + Numbers + Special
      } else if (
        alphaLow === true &&
        numbers === true &&
        charSpec === true &&
        alphaCap === false
      ) {
        pWord += charOp3.charAt(Math.floor(Math.random() * charOp3.length));

        // Upper + Numbers + Special
      } else if (
        alphaCap === true &&
        numbers === true &&
        charSpec === true &&
        alphaLow === false
      ) {
        pWord += charOp4.charAt(Math.floor(Math.random() * charOp4.length));

        // lower + upper
      } else if (
        alphaLow === true &&
        alphaCap === true &&
        numbers === false &&
        charSpec === false
      ) {
        pWord += charOpA.charAt(Math.floor(Math.random() * charOpA.length));

        // lower + numbers
      } else if (
        alphaLow &&
        numbers &&
        numbers === false &&
        charSpec === false
      ) {
        pWord += charOpB.charAt(Math.floor(Math.random() * charOpB.length));

        // lower + spec
      } else if (
        alphaLow === true &&
        alphaCap === false &&
        numbers === false &&
        charSpec === true
      ) {
        pWord += charOpC.charAt(Math.floor(Math.random() * charOpC.length));

        // upper + numbers
      } else if (
        alphaLow === false &&
        alphaCap === true &&
        numbers === true &&
        charSpec === false
      ) {
        pWord += charOpD.charAt(Math.floor(Math.random() * charOpD.length));

        // upper +spec
      } else if (
        alphaLow === false &&
        alphaCap === true &&
        numbers === false &&
        charSpec === true
      ) {
        pWord += charOpE.charAt(Math.floor(Math.random() * charOpE.length));

        //number + spec
      } else if (
        alphaLow === false &&
        alphaCap === false &&
        numbers === true &&
        charSpec === true
      ) {
        pWord += charOpF.charAt(Math.floor(Math.random() * charOpF.length));
      }
    }
  }
  return pWord;
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
