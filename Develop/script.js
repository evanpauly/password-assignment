// Assignment code here
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!#$%'()*+,-./:;<=>?@[\]^_`{|}~";
  var passwordLength = "";

    var passwordLength = window.prompt("Password Length");

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password Length must be between 8 and 128.")
      return generatePassword();
    }
  
  var lowercase = window.confirm("Lowercase Letters?");

  if (lowercase === true) {
    return lowercase[Math.floor(Math.random() * lowercase.length)]
  };

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
function writePassword(passwordLength, lowercase, uppercase, numbers, specialCharacters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();