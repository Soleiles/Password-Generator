// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generates Event Listener
generateBtn.addEventListener("click", () => {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

  passwordEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol, 
    length);
});

// Generates password function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  var typesCount = lower + upper + number + symbol;

  var typesArr =[{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0]
      
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Dom Elements
var passwordEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Modal function
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

generateBtn.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})