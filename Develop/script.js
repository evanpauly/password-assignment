// Assignment code here
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

var allLowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

function generateLowercaseString(lowercase) {
  let result = '';
  var lowercaseLetters = allLowercaseLetters.lowercase;
  for (let i = 0; i < lowercase; i++) {
    result += allLowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters));
  }
  return result;
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

var allUppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateUppercaseString(uppercase) {
  let result = '';
  var uppercaseLetters = allUppercaseLetters.uppercase;
  for (let i = 0; i < uppercase; i++) {
    result += allUppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters));
  }
  return result;
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

var allNumbers = '0123456789';
  
function generateNumbersString(numbers) {
  let result = '';
  var numberCharacters = allNumbers.numbers;
  for (let i = 0; i < numbers; i++) {
    result += allNumbers.charAt(Math.floor(Math.random() * numberCharacters));
  }
    return result;
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

var allSpecialCharacters = '!#$%()*+,-./:;<=>?@[\]^_`{|}~';

function generateSpecialString(special) {
  let result = '';
  var specialCharacters = allSpecialCharacters.special;
  for (let i = 0; i < special; i++) {
    result += allSpecialCharacters.charAt(Math.floor(Math.random() * specialCharacters));
  }
    return result;
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

  for (var i = 0; i < userChoice; i++) {
    optionChosen = options[Math.floor(Math.random() * options.userChoice)];
    switch (optionChosen) {
      case 1:
        var choice = generateLowercaseString();
        password += choice;
        break;
      case 2:
        var choice = generateUppercaseString();
        password += choice;
        break;
      case 3:
        var choice = generateNumbersString();
        password += choice;
        break;
      case 4:
        var choice = generateSpecialString();
        password += choice;
        break;
      default:
        window.alert("Error.")
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