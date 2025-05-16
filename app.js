
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%&_"
const allCharacters = upperCase + lowerCase + numbers + specialCharacters;

const passwordLength = 8;
const password = document.getElementById("password");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
generateBtn.addEventListener("click", generatePassword);

password.contentEditable = true;
// Function to generate a random password
function generatePassword() {
    let passwordCharacters = "";
    passwordCharacters += upperCase[Math.floor(Math.random() * upperCase.length)];
    passwordCharacters += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passwordCharacters += numbers[Math.floor(Math.random() * numbers.length)];
    passwordCharacters += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while (passwordCharacters.length < passwordLength) {
        passwordCharacters += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    password.innerText = passwordCharacters;
}

copyBtn.addEventListener("click", copyPassword);
function copyPassword() {
    const passwordText = password.innerText;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}