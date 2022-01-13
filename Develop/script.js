// Assignment code here

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharachters = "!#$%'()*+,-./:;<=>?@[\]^_`{|}~";
  
function generatePassword() {
  var passwordLength = window.prompt("Password Length");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password Length must be between 8 and 128.")
    return generatePassword();
  }

  var lowercase = window.confirm("Lowercase Letters?");
  var uppercase = window.confirm("Uppercase Letters?");
  var numbers = window.confirm("Numbers?");
  var specialCharachters = window.confirm("Special Charachters?")

  if (lowercase === false && uppercase === false && numbers === false && specialCharachters === false) {
    window.alert("You must select at least one option.")
    return generatePassword();
  };

  //3. generate password based on criteria
  for (var i = 0; i <= password; i++) {
    var password = Math.floor(Math.random() )
  }

  
  //4. display password to the page
  return passwordText;
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

