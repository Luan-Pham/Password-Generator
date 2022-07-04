// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword (){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz" .split('')
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split('')
  var genNumber = "123456789" .split('')
  var symbols = "!@#$%^&*()_+=/?.><" .split('')
  var PWlength = prompt("Please enter length between 8-128", "8-128")
  var asklowerCase = prompt ("Pass with lowercase letters?", "yes/no")
  var askUppercase = prompt("Password with uppercase letters?", "yes/no")
  var askNumbers = prompt("Password with numbers?","yes/no")
  var askSymbols = prompt ("Password with symbols?", "yes/no")
  var PW = []

  var Pwstring= []
  if (asklowerCase == "yes") Pwstring = Pwstring.concat(lowerCase)
  if (askUppercase == "yes") Pwstring = Pwstring.concat(upperCase)  
  if (askNumbers == "yes") Pwstring = Pwstring.concat(genNumber)
  if (askSymbols == "yes") Pwstring = Pwstring.concat(symbols)
  console.log(PWstring)
  for (let i=0; i <= PWlength - 1 ; i++){
    var passwordcharacter = Pwstring[Math.floor(Math.random() * PWlength)
    ]
    PW.push(passwordcharacter) 
    var finalpass = PW.join('')
  } 
  console.log (PW)
  console.log (finalpass)

  document.getElementById("password").textContent = finalpass;
  
  }

// function writePassword() {
//   var password = generatePassword() ;
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
