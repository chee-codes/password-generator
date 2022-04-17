/* Variable declaration */

// Character variables

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var spec = "~!@#$%^+&*-()[/]_{:}<>?";

var pWord = "";

//Combined Variables

var allChar = lower + upper + nums + spec;
var charOpA = lower + upper;
var charOpB = lower + nums;
var charOpC = lower + spec;
var charOpD = upper + nums;
var charOpE = upper + spec;
var charOpF = nums + spec;
//
var charOp1 = charOpA + nums; // lower+upper+nums
var charOp2 = charOpA + spec; // lower+upper+spec
var charOp3 = charOpB + spec; // lower+nums+spec
var charOp4 = charOpD + spec; // upper+nums+spec

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

        // singles
      } else if (alphaLow) {
        pWord += lower.charAt(Math.floor(Math.random() * lower.length));
      } else if (alphaCap) {
        pWord += upper.charAt(Math.floor(Math.random() * upper.length));
      } else if (numbers) {
        pWord += nums.charAt(Math.floor(Math.random() * nums.length));
      } else if (charSpec) {
        pWord += spec.charAt(Math.floor(Math.random() * spec.length));
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
