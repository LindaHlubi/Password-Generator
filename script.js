// Assignment Code
const generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", writePassword);
//console.log("does this work")

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
   
  
}

// variables created for generate password function 

var lengthPassword;
var confirmNumber;
var confirmLower;
var confirmUpper;
var confirmSymbol;
var selection;

function generatePassword() {
// password question length prompt
    lengthPassword = prompt("Please enter the number of characters you would like your new password to have between 8 and 128.");
  if (!lengthPassword) {
    alert("value needed");
  }// needs to specify lenghth longer than 8 but less than 128 characters
  else if (lengthPassword < 8 || lengthPassword > 128 ) {
      lengthPassword = parseInt(prompt("Please choose a number between 8 and 128"));

  }
  else {
      
  // password criteria questions
     confirmNumber = confirm("Would you like numbers in your password?");
  
     confirmLower = confirm("Would you like lowercases in your password?");
  
     confirmUpper = confirm("Would you like uppercases in your password?");
  
     confirmSymbol = confirm("Would you like any special characters in your password?");
  };

 var randomStringArray = {
// a function that generates a random lower case
  getRandomLower: function() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
  },
// a function that generates a random upper case
  getRandomUpper: function() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
  },
  // a function that generates a random number
  getRandomNumber: function() {
    return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
  },
  //console.log(getRandomNumber());
  // a function that generates a random symbol

  getRandomSymbol: function () {
    // special characters need to be specified 
    const symbols = '!@#*&%$()^?></(){},';
    // returns a random character
    return symbols[Math.floor(Math.random()* symbols.length)];
    
  }
};
  //console.log(getRandomSymbol());




  var minValue = 0
// empty string 
  var minLower = "";
  var minUpper = "";
  var minNumber = "";
  var minSymbol = "";

// min criteria select for user
  if (confirmNumber === true) {
    minNumber = randomStringArray.getRandomNumber()
    minValue++;

  }
  else {
    alert("All criteria needs to be confirmed");

}

  if (confirmLower === true) {
    minLower = randomStringArray.getRandomLower();
    minValue++;

  }

  if (confirmUpper === true) {
    minUpper = randomStringArray.getRandomUpper();
    minValue++;

  }

  if (confirmSymbol === true) {
    minSymbol = randomStringArray.getRandomSymbol();
    minValue++;

  }
// empty string varaible for the loop below
 var randomPassword = "";
// a loop to get random characters
for (let i = 0; i < parseInt(lengthPassword - minValue); i++) {
      var tickSelection = Math.floor(Math.random() * 4 );
      randomPassword += tickSelection;
  }
// makes sure characters are added to password
randomPassword += minNumber;
randomPassword += minUpper
randomPassword += minLower
randomPassword += minSymbol
// returns password
return randomPassword;

}

  
  
