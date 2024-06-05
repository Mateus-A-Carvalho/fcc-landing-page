import { labelAnimate } from './input-label-animation.js'

const formEl = document.querySelector('#form');
const inputWrapperContainer = document.querySelector('.input-names__wrapper')

// First and Last name inputs elements;
const inputFirstNameEl = document.querySelector('#first-name');
const inputLastNameEl = document.querySelector('#last-name');

// Input email element; 
const inputEmailEl = document.querySelector('#email');

// Input datetime and tel elements:
const inputDatetimeEl = document.querySelector('#input-datetime');
const inputTelEl = document.querySelector('#input-tel');


document.addEventListener('click', () => {
  creatingSpan();
})

// Validating form;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!inputFirstNameEl.value) {
    isInputInvalid(inputFirstNameEl);
    isFirstNameValid(inputFirstNameEl.value);
    return;
  }
  
  if(!inputLastNameEl.value) {
    isLastNameValid(inputLastNameEl.value);
    return;
  }

  if(!inputEmailEl.value) {
    alert('Please, enter your best email');
    return;    
  } else if (!isEmailValid(inputEmailEl.value)) {
    alert('Invalid email');
    return;
  }

  if(!inputDatetimeEl.value) {
    isDatetimeValid(inputDatetimeEl.value);
    return;
  }

  if(!inputTelEl.value) {
    alert('Please, enter your phone number!')
    return;
  } else if (!isPhoneNumberValid(inputTelEl.value)) {
    alert('Invalid Phone Number');
    return;
  }

  HTMLFormElement.prototype.submit.call(formEl);

})

function isEmailValid(email) {
  // Creating a RegEx to validate email;
  const emailRegEx = new RegExp(
    /^[^\s]+@[^\s]+\.[^\s]+$/
  );

  if(emailRegEx.test(email)) {
    return true;
  }

  return false;
}

function isFirstNameValid(firstName) {
  if(!firstName) {
    alert("Fill in your first name!");
    return true;
  }
}


// TODO: Work with setTimeInterval() to erase spanEl after 3000ms;
function creatingSpan() {
  const spanEl = document.createElement('span');
  inputWrapperContainer.appendChild(spanEl);
}

function isLastNameValid(lastName) {
  if(!lastName) {
    alert("Fill in your last name!");
    return true;
  }
}

function isDatetimeValid(datetime) {
  if(!datetime) {
    alert("Fill in your date time input!");
    return true;
  } 
}

function isPhoneNumberValid(phoneNumber) {
  const telNumberRegex = new RegExp(
    /^[1-9][1-9]9\d{4}\d{4}$/
  );

  if(telNumberRegex.test(phoneNumber)) {
    return true;
  }

  return false;
}

function inputValid(input) {
  input.classList.toggle('input-valid');
}

function isInputInvalid(input) {
  input.classList.toggle('shake-horizontal');
  input.classList.toggle('input-invalid');
}

export { 
  inputFirstNameEl,
  inputLastNameEl,
  inputEmailEl,
  inputDatetimeEl,
  inputTelEl,
  formEl
}