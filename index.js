const prompt = require("prompt-sync")();

const mastercardPattern = /^(5[1-5][0-9]{14})$/;
const visacardPattern = /^(4[0-9]{12}(?:[0-9]{3})?)$/;


function isValidMastercard(number) {
  return mastercardPattern.test(number);
}

function isValidVisacard(number) {
  return visacardPattern.test(number);
}

function getNumber() {
  const number = prompt("Please input your card number: ");
  return number;
}

function getChoice() {
  const choice = parseInt(prompt("Please enter either 1 or 2: "));
  if (choice > 2 || choice < 1) return getChoice()
  return choice;
}

function runCardValidator() {
  console.log("Welcome, what kind of card do you want to validate?");
  console.log("1. Mastercard");
  console.log("2. Visacard");
  const choice = getChoice();
  const number = getNumber()

  if (choice === 1) {
    if (isValidMastercard(number)) {
        console.log("Congrats! Mastercard number is valid");
    } else {
        console.log("This Mastercard number is Invalid");
    }
  }

  if (choice === 2) {
    if (isValidVisacard(number)) {
      console.log("Congrats! Visacard number is valid");
    } else {
      console.log("This Visacard number is Invalid");
    }
  }
}

runCardValidator()