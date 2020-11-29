// Assignment code
// Special characters for the function created

const specialCharacters = '!@#$%^&*(){}[]=<>/,.';
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts for password criteria
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you would like your new password to have between 8 and 128.");

  var numbers = confirm("Would you like numbers in your password?");

  var lowerCases = confirm("Would you like lowercases in your password?");

  var upperCases = confirm("Would you like uppercases in your password?");

  var special = confirm("Would you like any special characters in your password?");

  // Minimum count for upperCases, lowerCases, numbers and specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


  // Functions to generate specific password criteria (Upper / Lower cases, special character and numbers.)
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Makes sure user selected ok for all criteria it uses blank minimums as shown above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }
  else {
    alert('your option is not valid, all criteria needs to be checked yes');

}

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // Empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // A loop to get random characters
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
