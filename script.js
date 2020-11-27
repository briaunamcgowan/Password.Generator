// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!$^&*-=+_?";

var newPW;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
var pwLength = parseInt(prompt("Please confirm how many characters you would like in your password."));

if (pwLength > 8 || pwLength < 128) {
  lower = confirm("Do you want to include lower case?");
  upper = confirm("Do you want to include upper case?");
  symbols = confirm("Do you want to include special characters?");
  number = confirm("Do you want to include numbers?");

    var pwChar = ''
  
    if (lower === true) {
        pwChar +=lowerCase
    }

    if (upper === true) {
      pwChar +=caps
    }

    if (number === true){
      pwChar +=num
    }

    if (symbols === true){
      pwChar +=special
    }

    var pwCharLength = pwChar.length;
    newPW = '';

    for (var i = 0; i < pwLength; i++){
      newPW += pwChar.charAt(Math.floor(Math.random() * pwCharLength));
    }
} else  {
  alert("Choose a number between 8 and 128.");
  generatePassword();
}
return newPW;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


