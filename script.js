// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword (){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz" .split('')
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split('')
  var genNumber = "123456789" .split('')
  var symbols = "!@#$%^&*()_+=/?.><" .split('')
  var PWlength = prompt("Please enter length of password between 8-128", "8-128")
  var asklowerCase = prompt ("Pass with lowercase letters?", "yes/no")
  var askUppercase = prompt("Password with uppercase letters?", "yes/no")
  var askNumbers = prompt("Password with numbers?","yes/no")
  var askSymbols = prompt ("Password with symbols?", "yes/no")
  var PW = []

  // create string of possible characters to select from depending on select submission in prompts
  var Pwstring= []
  if (asklowerCase == "yes") Pwstring = Pwstring.concat(lowerCase)
  if (askUppercase == "yes") Pwstring = Pwstring.concat(upperCase)  
  if (askNumbers == "yes") Pwstring = Pwstring.concat(genNumber)
  if (askSymbols == "yes") Pwstring = Pwstring.concat(symbols)
  console.log(Pwstring)

  // for loop in order to select each character from string of possible characters
  for (let i=1; i <= PWlength ; i++){
    var passwordcharacter = Pwstring[Math.floor(Math.random() * Pwstring.length)
    ]
    PW.push(passwordcharacter) 
    var finalpass = PW.join('')
  } 
  console.log (PW)
  console.log (finalpass)

  document.getElementById("password").textContent = finalpass;
  
  }

  // click event to generate password
generateBtn.addEventListener("click", generatePassword);
