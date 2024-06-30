// Form and containers array;
const formEl = document.querySelector('#form');
const containerInputsEl = document.querySelectorAll('.container-input')

const inputToggler = document.querySelector('#toggler')

document.addEventListener('click', () => {
  console.log(inputToggler.checked);
})

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

// Focus and Blur features;
labelAnimate(inputFirstNameEl);
labelAnimate(inputLastNameEl);  
labelAnimate(inputEmailEl);
labelAnimate(inputTelEl);

// Validating form;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  // Checking First Name;
  if(!inputFirstNameEl.value) {
    isInputInvalid(inputFirstNameEl);
    isFirstNameValid(inputFirstNameEl.value);
    return;
  } else {
    // Adding the input valid style;
    addInputValidateStyle(inputFirstNameEl);
  }
  
  // Checking Last Name;
  if(!inputLastNameEl.value) {
    isInputInvalid(inputLastNameEl);
    isLastNameValid(inputLastNameEl.value);
    return;
  } else {
    addInputValidateStyle(inputLastNameEl);
  }

  // Checking email
  if(!inputEmailEl.value) { 
    isInputInvalid(inputEmailEl); 
    creatingSpan('Please, enter your e-mail', 'email'); 
    return;    
  } else if (!isEmailValid(inputEmailEl.value)) { 
    isInputInvalid(inputEmailEl);
    creatingSpan('E-mail invalid!', 'email');
    return;
  } else {
    addInputValidateStyle(inputEmailEl); 
  }

  // Checking datetime;
  if(!inputDatetimeEl.value) {
    isInputInvalid(inputDatetimeEl);
    isDatetimeValid(inputDatetimeEl.value);
    return;
  } else {
    addInputValidateStyle(inputDatetimeEl);
  }

  // Checking phone number;
  if(!inputTelEl.value) { 
    isInputInvalid(inputTelEl);
    creatingSpan('Please, enter your phone number', 'phone-number');
    return;
  } else if (!isPhoneNumberValid(inputTelEl.value)) {
    isInputInvalid(inputTelEl);
    creatingSpan('Phone number invalid!', 'phone-number');
    return;
  } else {
    addInputValidateStyle(inputTelEl);
  }

  HTMLFormElement.prototype.submit.call(formEl); // Inheriting the submit method from HTMLFormElement and calling formEl as thisArg;

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

// Checking if first name input is valid;
function isFirstNameValid(firstName) {
  if(!firstName) {
    creatingSpan('Please, enter your first name', 'first-name');
    return true; // Returning true to use this value in the form validation;
  }

  return false; // Returning false to use this value in addInputValidateStyle() feature;
}

// Checking if last name input is valid;
function isLastNameValid(lastName) {
  if(!lastName) {
    creatingSpan('Please, enter your last name', 'last-name');
    return true;
  }

  return false;
}

// Checking if datetime input is valid;
function isDatetimeValid(datetime) {
  if(!datetime) {
    creatingSpan('Please, select your prefered date ', 'datetime');
    return true;
  } 

  return false;
}

// checking if phone number input is valid
function isPhoneNumberValid(phoneNumber) {
  const telNumberRegex = new RegExp( // Testing a Regex based in Brazilians DDD(between 11 to 99); 
    /^[1-9][1-9]9\d{4}\d{4}$/ // 
  );

  if(telNumberRegex.test(phoneNumber)) {
    return true;
  }

  return false;
}

// This function adds input box-shadow feature;
function addInputValidateStyle(input) {
  if(input.classList.contains('first-name') && !isFirstNameValid(input)) { // Based in class name and return values, add box-shadow;
    isInputValid(input);
  }

  if(input.classList.contains('last-name') && !isLastNameValid(input)) {
    isInputValid(input);
  }

  if(input.classList.contains('input-email') && !isEmailValid(input)) {
    isInputValid(input);
  }

  if(input.classList.contains('input-datetime') && !isDatetimeValid(input)) {
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

      setTimeout(() => {
        label.classList.remove('shake-horizontal');
      }, 2000)
    }
  })
  input.classList.toggle('shake-horizontal');
  input.classList.toggle('input-invalid');

  setTimeout(() => {
    input.classList.toggle('shake-horizontal');
    input.classList.toggle('input-invalid');
  }, 2000)
}

// Adding box-shadow in input valid;
function isInputValid(input) {
  input.classList.add('input-valid')
}

// Creating a span element to warn the input invalid;
function creatingSpan(message, inputType) {
  const spanEl = document.createElement('span');

  containerInputsEl.forEach(container => {
    if(inputType === container.dataset.name) {
      if(container.dataset.name === 'datetime') {
        spanEl.style.top = '5px';
      }
      container.appendChild(spanEl);
      spanEl.innerHTML = `${message}`
    }
  })

  setTimeout(() => {
    spanEl.remove();
  }, 2000)
}

