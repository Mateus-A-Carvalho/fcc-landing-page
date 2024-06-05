import { 
  inputFirstNameEl,
  inputLastNameEl,
  inputEmailEl,
  inputDatetimeEl,
  inputTelEl,
  formEl
} from './form-validate.js'

const labelEls = document.querySelectorAll('label');


inputFirstNameEl.addEventListener('focus', () => {

  labelEls.forEach(label => {
    if(inputFirstNameEl.dataset.name === label.dataset.name) {
      inputFocused(inputFirstNameEl);
      labelAnimate(label);
    }
  })
});

inputFirstNameEl.addEventListener('focusout', () => {

  labelEls.forEach(label => {
    if(inputFirstNameEl.dataset.name === label.dataset.name) {
      inputFocused(inputFirstNameEl);
      labelAnimate(label);
    }
  })
});

inputLastNameEl.addEventListener('focus', () => {

  labelEls.forEach(label => {
    if(inputLastNameEl.dataset.name === label.dataset.name) {
      inputFocused(inputLastNameEl);
      labelAnimate(label);
    }
  })
});

inputLastNameEl.addEventListener('focusout', () => {

  labelEls.forEach(label => {
    if(inputLastNameEl.dataset.name === label.dataset.name) {
      inputFocused(inputLastNameEl);
      labelAnimate(label);
    }
  })
});

inputEmailEl.addEventListener('focus', () => {

  labelEls.forEach(label => {
    if(inputEmailEl.dataset.name === label.dataset.name) {
      inputFocused(inputEmailEl);
      labelAnimate(label);
    }
  })

})

inputEmailEl.addEventListener('focusout', () => {

  labelEls.forEach(label => {
    if(inputEmailEl.dataset.name === label.dataset.name) {
      inputFocused(inputEmailEl);
      labelAnimate(label);
    }
  })
})

inputTelEl.addEventListener('focus', () => {

  labelEls.forEach(label => {
    if(inputTelEl.dataset.name === label.dataset.name) {
      inputFocused(inputTelEl);
      labelAnimate(label);
    }
  })

})

inputTelEl.addEventListener('focusout', () => {

  labelEls.forEach(label => {
    if(inputTelEl.dataset.name === label.dataset.name) {
      inputFocused(inputTelEl);
      labelAnimate(label);
    }
  })
})

inputDatetimeEl.addEventListener('focus', () => {
  inputFocused(inputDatetimeEl);
})

inputDatetimeEl.addEventListener('focusout', () => {
  inputFocused(inputDatetimeEl);
})

function inputFocused(input) {
  input.classList.toggle('input-focused')
}

function labelAnimate(label) {
  label.classList.toggle('label-animation-focus')
}
