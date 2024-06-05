import { 
  inputFirstNameEl,
  inputLastNameEl,
  inputEmailEl,
  inputDatetimeEl,
  inputTelEl,
  formEl
} from './form-validate.js'

const labelEls = document.querySelectorAll('label');


inputFirstNameEl.addEventListener('focus', (e) => {

  labelEls.forEach(label => {
    if(inputFirstNameEl.dataset.name === label.dataset.name) {
      labelAnimate(label);
      console.log('run')
    }
  })
});


inputFirstNameEl.addEventListener('focusout', (e) => {

  labelEls.forEach(label => {
    if(inputFirstNameEl.dataset.name === label.dataset.name) {
      labelAnimate(label);
      console.log('run')
    }
  })
});

function labelAnimate(label) {
  return label.classList.toggle('label-animation-focus')
}

