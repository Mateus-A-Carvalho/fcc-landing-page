import { 
  inputFirstNameEl,
  inputLastNameEl,
  inputEmailEl,
  inputDatetimeEl,
  inputTelEl
} from './form-validate.js'

const labelEls = document.querySelectorAll('label');

console.log(labelEls[0].dataset)

for(let label of labelEls) {
  console.log(label.dataset);
}

