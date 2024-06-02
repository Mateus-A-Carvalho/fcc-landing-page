const formEl = document.querySelector('#form');

// First and Last name inputs elements;
const inputFirstNameEl = document.querySelector('#first-name');
const inputLastNameEl = document.querySelector('#last-name');

// Input email element; 
const emailInputel = document.querySelector('#email');

// Input datetime and tel elements:
const inputDatetimeEl = document.querySelector('#input-datetime');
const inputTelEl = document.querySelector('#input-tel');

/* TODO: 
  1 - Fazer regex do email;
  2 - Converter o formato do value do input datetime para mandar o email com a data;
  3 - Fazer regex para o formato de telefone;
*/
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(inputDatetimeEl.value);

  if(!inputFirstNameEl.value) {
    alert('Preencha o seu nome!')    
    return;
  }

  if(!inputLastNameEl.value) {
    alert('Preencha o seu nome!');
    return;    
  }

})
