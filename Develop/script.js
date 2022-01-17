// Assignment code here
function length() {
  var userChoice = window.prompt("Password Length");
  var userLength = parseInt(userChoice);
    if (userLength >= 8 && userLength <=128) {
      var userLengthChoice = userLength;
    } else {
      window.alert("Password Length must be between 8 and 128.");
    var userLengthChoice = length();
    }
  return userLengthChoice; 
  }

function useLowercase() {
  var userChoice = window.confirm("Lowercase Letters?");
  var lowercaseLetters = userChoice;
  switch (lowercaseLetters) {
    case true:
      var selectLowercase = true;
      break;
    case false:
      var selectLowercase = false;
      break;
    default: window.alert("Please select an option.");
    var selectLowercase = uselowercase();
  }
  return selectLowercase;
}

var allLowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';

function generateLowercaseString(lowercase) {
  let result = '';
  var lowercaseLetters = allLowercaseLetters;
  for (let i = 0; i < lowercase; i++) {
    result += allLowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters));
  }
  return result;
}

function useUppercase() {
  var uppercase = window.confirm("Uppercase Letters?");
  var uppercase = uppercase;
  switch (uppercase) {
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
  var uppercaseLetters = allUppercaseLetters;
  for (let i = 0; i < uppercase; i++) {
    result += allUppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters));
  }
  return result;
}

function useNumbers() {
  var userChoice = window.confirm("Numbers?");
  var numbersChosen = userChoice;
  switch (numbersChosen) {
    case true:
      var selectNumbers = true;
      break;
    case false:
      var selectNumbers = false;
      break;
    default: window.alert("Please select an option.");
    var selectNumbers = useNumbers();
  }
  return selectNumbers;
}

var allNumbers = '0123456789';
  
function generateNumbersString(numbers) {
  let result = '';
  var numberCharacters = allNumbers;
  for (let i = 0; i < numbers; i++) {
    result += allNumbers.charAt(Math.floor(Math.random() * numberCharacters));
  }
    return result;
  }

function useSpecial() {
  var userChoice = window.confirm("Special Characters?");
  var specialCharactersChosen = userChoice;
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
  var specialCharacters = allSpecialCharacters;
  for (let i = 0; i < special; i++) {
    result += allSpecialCharacters.charAt(Math.floor(Math.random() * specialCharacters));
  }
    return result;
  }

function generatePassword() {
  var passwordLength = length();
  var lowercase = useLowercase();
  var uppercase = useUppercase();
  var numbers = useNumbers();
  var specialCharacters = useSpecial();

  while (passwordLength === false && lowercase === false && uppercase === false && numbers === false && specialCharacters === false) {
    window.alert("You must select at least one option.");
    var passwordLength = length();
    var lowercase = lowercase();
    var uppercase = uppercase();
    var numbers = numbers();
    var specialCharacters = special();
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

  for (var i = 0; i < passwordLength; i++) {
    optionChosen = options[Math.floor(Math.random() * options.passwordLength)];
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
