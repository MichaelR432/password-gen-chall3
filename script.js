// Assignment code here
let generateBtn = document.querySelector("#generate");

// write password function
function writePassword() {
let password = generatePassword();
let passwordText = document.querySelector("#password");
passwordText.value = password;
}

// variable arrays for password characters
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];


// Setting functions for generator questions

function generatePassword()  {
  let randomPass = "";
  let passArray = [];
  let passLength = parseInt(prompt("Enter the amount of characters between 8-128."));

  if (passLength > 128 || passLength < 8) {
    return alert("Invalid selection. Enter correct character amount");
  }

  let passLowerCase = confirm("Do you want lower case characters in your password?");

  if (passLowerCase === true) {
    passArray = passArray.concat(lowerCase);
  }

  let passUpperCase = confirm("Do you want upper case characters in your password?");

  if (passUpperCase === true) {
    passArray = passArray.concat(upperCase);
  }

  let passNumbers = confirm("Do you want numbers in your password?");

  if (passNumbers === true) {
    passArray = passArray.concat(numbers);
  }

  let passSpecialChar = confirm("Do you want special characters in your password?");

  if (passSpecialChar === true) {
    passArray = passArray.concat(special);
  }

  for (let i=0 < passLength; i++;){
    randomPass += passArray[Math.floor(Math.random() * (passArray.length))];
  }
  return randomPass;

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
