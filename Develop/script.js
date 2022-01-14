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

function useLowercase() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase;
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

function useUppercase() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase;
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

function useNumbers() {
    var numbers = "0123456789";
    return numbers;
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

function useSpecial() {
  var specialCharacters = "!#$%'()*+,-./:;<=>?@[\]^_`{|}~";
  return specialCharacters;
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

  var password = "";
  var options = new Array();
  if (lowercase === true) {
    options.push(1);
  }
  if (uppercase === true) {
    options.push(2);
  }
  if (numbers === true) {
    options.push(3);
  }
  if (specialCharacters === true) {
    options.push(4);
  }

  for (var i = 0; i < length; i++) {
    optionChosen = options[Math.floor(Math.random() * options.userChoice)];
    switch (optionChosen) {
      case 1:
        var choice = lowercase();
        password += choice;
        break;
      case 2:
        var choice = uppercase();
        password += choice;
        break;
      case 3:
        var choice = numbers();
        password += choice;
        break;
      case 4:
        var choice = special();
        password += choice;
        break;
      default:
        window.alert("Error.")
        break;
      var password = generatePassword();
    }
  }
  return password;
}

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