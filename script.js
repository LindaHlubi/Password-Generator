// Assignment code

const generateButton = document.getElementById('generateBtn')


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts for password criteria

function generatePassword() {

  var passwordLength = prompt("Please enter the number of characters you would like your new password to be. Characters need to be at least 8 characters and no more than 128 characters long.");

  var upperCases = confirm("Would you like uppercases in your password?");
  
  var lowerCases = confirm("Would you like lowercases in your password?");

  var numbers = confirm("Would you like numbers in your password?");

  var special = confirm("Would you like any special characters in your password?");


  // Minimum count for upperCases, lowerCases, numbers and specialCharacters
  
  var minimumCount = 0;


  // Blank minimums for upperCases, lowerCases, numbers and specialCharacters
  
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


 // Functions to generate specific password criteria (Upper / Lower cases, special character and numbers.)
  
  var criteria = {
    getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },

    getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },

    getSpecialCharacters: function() {
        const specialCharacters = '!@#$%^&*(){}[]=<>/,.'
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (upperCases === true) {
    minimumUpperCases = criteria.getUpperCases();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = criteria.getLowerCases();
    minimumCount++;

  }

  if (numbers === true) {
    minimumNumbers = criteria.getNumbers();
    minimumCount++;

  }

  if (specialCharacters === true) {
    minimumSpecialCharacters = criteria.getSpecialCharacters();
    minimumCount++;

  }

  // Empty string variable for the for loop below

  var randomPasswordGenerated = "";

  // A loop for get random characters 

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  // Make sure characters are added to the password

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
