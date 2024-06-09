// import { labelAnimate } from './input-label-animation.js'

const formEl = document.querySelector('#form');
const inputWrapperContainer = document.querySelector('.input-names__wrapper')

// First and Last name inputs elements;
const inputFirstNameEl = document.querySelector('#first-name');
const inputLastNameEl = document.querySelector('#last-name');

// Labels array;
const labelEls = document.querySelectorAll('label');

// Input email element; 
const inputEmailEl = document.querySelector('#email');

// Input datetime and tel elements:
const inputDatetimeEl = document.querySelector('#input-datetime');
const inputTelEl = document.querySelector('#input-tel');

labelAnimate(inputFirstNameEl);
labelAnimate(inputLastNameEl);
labelAnimate(inputEmailEl);
labelAnimate(inputTelEl);

// Validating form;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!inputFirstNameEl.value) {
    isInputInvalid(inputFirstNameEl);
    isFirstNameValid(inputFirstNameEl.value);
    return;
  } else {
    addInputValidateStyle(inputFirstNameEl);
  }
  
  if(!inputLastNameEl.value) {
    isInputInvalid(inputLastNameEl);
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

// Checking if email is valid with regex;
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
    creatingSpan('first name');
    return true;
  }

  return false;
}

function isLastNameValid(lastName) {
  if(!lastName) {
    creatingSpan('last name');
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



function addInputValidateStyle(input) {
  if(input.classList.contains('first-name') && !isFirstNameValid(input)) {
    isInputValid(input);
  }

  if(input.classList.contains('last-name') && !isLastNameValid(input)) {
    isInputValid(input);
  }

  if(input.classList.contains('input-email') && !isEmailValid(input)) {
    isInputValid(input);
  }

  if(input.classList.contains('label-datetime') && !isDatetimeValid(input)) {
    isInputValid(input);
  }

  if(input.classList.contains('input-tel') && !isPhoneNumberValid(input)) {
    isInputValid(input);
  }

}


// Function to trigger animation and check input validation;
function labelAnimate(input) {

  // Function to trigger animation and check input validation
  input.addEventListener('focus', (e) => {
    let element = e.target;

    labelEls.forEach(label => {
      if (input.dataset.name === label.dataset.name) {
        label.classList.add('label-animation-focus');
      }
    });
  });

  input.addEventListener('blur', (e) => {
    let element = e.target;

    labelEls.forEach(label => {
      if (input.dataset.name === label.dataset.name && !element.value) {
        label.classList.remove('label-animation-focus');
      }
    });
  });

}


// Cheking the input invalid;
function isInputInvalid(input) {
  labelEls.forEach(label => {
    if(input.dataset.name === label.dataset.name) {
      label.classList.add('shake-horizontal');
    }
  })
  input.classList.toggle('shake-horizontal');
  input.classList.toggle('input-invalid');

  setTimeout(() => {
    input.classList.toggle('shake-horizontal');
    input.classList.toggle('input-invalid');
  }, 3000)
}

// Adding box-shadow in input valid;
function isInputValid(input) {
  input.classList.add('input-valid')
}

// Creating a span element to warn the input invalid;
function creatingSpan(input) {
  const spanEl = document.createElement('span');
  inputWrapperContainer.appendChild(spanEl);
  spanEl.innerHTML = `Please, enter your ${input}`
  
  setTimeout(() => {
    spanEl.remove();
  }, 3000)
}


// TODO: Continue to work on color validation input. For now, I'm working in firstName input;