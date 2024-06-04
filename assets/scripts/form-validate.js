const formEl = document.querySelector('#form');

// First and Last name inputs elements;
const inputFirstNameEl = document.querySelector('#first-name');
const inputLastNameEl = document.querySelector('#last-name');

// Input email element; 
const emailInputEl = document.querySelector('#email');

// Input datetime and tel elements:
const inputDatetimeEl = document.querySelector('#input-datetime');
const inputTelEl = document.querySelector('#input-tel');

/* TODO: 
  3 - Fazer regex para o formato de telefone;
*/
inputFirstNameEl.addEventListener('focus', () => {

})

// Validating form;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if(!inputFirstNameEl.value) {
    isFirstNameValid(inputFirstNameEl.value);
    return;
  }
  
  if(!inputLastNameEl.value) {
    isLastNameValid(inputLastNameEl.value);
    return;
  }

  if(!emailInputEl.value) {
    alert('Please, enter your best email');
    return;    
  } else if (!isEmailValid(emailInputEl.value)) {
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