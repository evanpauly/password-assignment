// Assignment code here
var random = function (min, max) {
  var item = Math.floor(Math.random() * (max - min + 1) + min);
  return item;
}

function length() {
  var userChoice = window.prompt("Password Length");
  var userLength = parseInt(userChoice);
    if (userLength >= 8 && userLength <=128) {
      var userChoice = userLength;
    } else {
      window.alert("Password Length must be between 8 and 128.");
    var userChoice = length();
    }
  return userChoice;
  }

function lowercase() {
  var lowercase = window.confirm("Lowercase Letters?");
  var lowercaseLetters = lowercase.yesLowercase();
  switch (lowercaseLetters) {
    case true:
      var selectLowercase = true;
      break;
    case false:
      var selectLowercase = false;
      break;
    default: window.alert("Please select an option.");
    var selectLowercase = lowercase();
  }
  return selectLowercase;
}



function uppercase() {
  var uppercase = window.confirm("Uppercase Letters?");
  var uppercaseLetters = uppercase.yesUppercase();
  switch (uppercaseLetters) {
    case true:
      var selectUppercase = true;
      break;
    case false:
      var selectUppercase = false;
      break;
    default: window.alert("Please select an option.");
    var selectUppercase = uppercase();
  }
  return selectUppercase;
}



function numbers() {
  var numbers = window.confirm("Numbers?");
  var numbersChosen = numbers.yesNumbers();
  switch (numbersChosen) {
    case true:
      var selectNumbers = true;
      break;
    case false:
      var selectNumbers = false;
      break;
    default: window.alert("Please select an option.");
    var selectNumbers = numbers();
  }
  return selectNumbers;
}



function special() {
  var special = window.confirm("Special Charachters?");
  var specialCharactersChosen = special.yesSpecialCharacters();
  switch (specialCharactersChosen) {
    case true:
      var selectSpecialCharacters = true;
      break;
    case false:
      var selectSpecialCharacters = false;
      break;
    default: window.alert("Please select an option.");
    var selectSpecialCharacters = special();
  }
  return selectSpecialCharacters;
}





function generatePassword() {
  var passwordLength = length();
  var lowercase = lowercase();
  var uppercase = uppercase();
  var numbers = numbers();
  var specialCharacters = special();

  while (passwordLength === false && lowercase === false && uppercase === false && numbers === false && specialCharacters === false) {
    window.alert("You must select at least one option.");
    return generatePassword();
  }

  var finalPassword = "";






  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!#$%'()*+,-./:;<=>?@[\]^_`{|}~";
  var passwordLength = "";

  
  

  var uppercase = window.confirm("Uppercase Letters?");
  var numbers = window.confirm("Numbers?");
  var specialCharacters = window.confirm("Special Charachters?")

  if (lowercase === false && uppercase === false && numbers === false && specialCharacters === false) {
    window.alert("You must select at least one option.")
    return generatePassword();
  };
  
  //3. generate password based on criteria
  for (var i = 0; i < passwordLength; i++) {
    var passwordLength = Math.floor(Math.random() * passwordLength);
  };

  //4. display password to the page
  return password;
};

generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);