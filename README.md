# Freecodecamp Cerfification - Landing Page

This is my fourth project to Responsive Web Design Certification [Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/). Freecodecamp certifications help you improve your coding skills by building realistic projects.

## Table of contents

- [Freecodecamp Cerfification - Landing Page](#freecodecamp-cerfification---landing-page)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The Project](#the-project)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [**Grid Layouts**](#grid-layouts)
      - [**Image Sliders**](#image-sliders)
    - [Form Validation](#form-validation)
    - [Box-shadow style function](#box-shadow-style-function)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Project

Users should be able to:

1. Your product landing page should have a header element with a corresponding <code>id="header"</code>
2. You can see an image within the header element with a corresponding <code>id="header-img"</code> (A logo would make a good image here)
3. Within the <code>#header</code> element, you can see a <code>nav</code> element with a corresponding <code>id="nav-bar"</code>
4. You can see at least three clickable elements inside the <code>nav</code> element, each with the class <code>nav-link</code>
5. When you click a <code>.nav-link</code> button in the <code>nav</code> element, you are taken to the corresponding section of the landing page
6. You can watch an embedded product video with <code>id="video"</code>
7. Your landing page has a form element with a corresponding <code>id="form"</code>
8. Within the form, there is an input field with <code>id="email"</code> where you can enter an email address
9. The <code>#email</code> input field should have placeholder text to let users know what the field is for
10. The <code>#email</code> input field uses HTML5 validation to confirm that the entered text is an email address
11. Within the form, there is a submit <code>input</code> with a corresponding <code>id="submit"</code>
12. When you click the <code>#submit</code> element, the email is submitted to a static page <code>(use this mock URL: https://www.freecodecamp.com/email-submit)</code>
13. The navbar should always be at the top of the viewport
14. Your product landing page should have at least one media query
15. Your product landing page should utilize CSS flexbox at least once

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.


### Links

- Repository URL: [Add solution URL here](https://github.com/Mateus-A-Carvalho/fcc-landing-page)
- Live Site URL: [Add live site URL here](https://mateus-a-carvalho.github.io/fcc-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Scroll Reveal](https://scrollrevealjs.org/) - JS Library
- [Animista](https://animista.net/) - CSS Library

### What I learned

This section show some new knowledges that I learned in this project. 

#### **Grid Layouts**

In this project I starded to work with Grid Layout. This is a skill that I have to improve. Here is the code that I implemented to style the images and text of products. In Desktop View you can see them side by side. 

In Mobile View, I decided to show one unde other. 

**Desktop View**

```css
/* PRODUCTS SECTION */
section#products {
  display: grid; /* Defining Grid Layout */
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 1fr);
  height: auto;
  padding: 8.5rem 5rem;
  gap: 1rem 2.5rem;
  font-family: var(--body-font);
}
```
```css
/* Products sliders */
.products-img__container-wrapper:nth-of-type(1) {
  grid-row: 1 / 2;
  border-radius: var(--inverted-border-radius);
}

.products-img__container-wrapper:nth-of-type(2) {
  grid-row: 2 / -1;
  grid-column: 2/ -1;
  border-radius: var(--inverted-border-radius);
  justify-content: start;
```
```css
/* CONTAINER WITH SERVICES/PRODUCTS DESCRIPTORS */
.products-text__container-wrapper:nth-of-type(1) {
  grid-row: 1 / 2;
}

.products-text__container-wrapper:nth-of-type(2) {
  grid-row: 2 / -1;
}
```
**Mobile View**

```css
section#products {
  display: grid;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: repeat(4, 1fr);
  height: auto;
  padding: 8.5rem 2.5rem;
  gap: .5rem;
  font-family: var(--body-font);
}

.products-img__container-wrapper:nth-of-type(1) {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
}

.products-text__container-wrapper:nth-of-type(1) {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
}

.products-img__container-wrapper:nth-of-type(2) {
  grid-column: 1 / -1;
  grid-row: 3 / 4;
}

.products-text__container-wrapper:nth-of-type(2) {
  grid-column: 1 / -1;
  grid-row: 4 / -1;
}
```

---

#### **Image Sliders**

**Controls**

This part of code I implemented what I learned in a Youtube tutorial's. In the code bellow, the variables <code>firstCurrentImg</code> and <code>secondCurrentImg</code> are controls that check the lenght of <code>firstContainerProductsImgEl</code> and <code>secondContainerProductsImgEl</code>. The Event Handle will check if the target of event type contains the class that refers to images and pass this target as a parameter in the <code>updateImg()</code>.

``` javascript
// Img control;
let firstCurrentImg = 1;
let secondCurrentImg = 1;

bodyEl.addEventListener('click', (e) => {
  if(e.target.classList.contains('first-container__btn-next')) {
    updateImg('first', e.target);
  }

  if(e.target.classList.contains('first-container__btn-prev')) {
    updateImg('first', e.target);
  }

  if(e.target.classList.contains('second-container__btn-next')) {
    updateImg('second', e.target);
  }

  if(e.target.classList.contains('second-container__btn-prev')) {
    updateImg('second', e.target);
  }
})

```
**<code>UpdateImg()</code> function**

In this code bellow, the <code>updateImg()</code> takes *two parameters*, the *first* tells us which container the we clicking. The *second* parameter passes button type to check the class name. After <code>if/else</code> statement checks the firsts parameters and knows if is first or second, we icrement the **image control's**. After it, we checks two things: <br>

1. If image control(<code>firstCurrentImg</code> or <code>secondCurrentImg</code>) is greater than its own lenght, them will be equal 1. 
2. If image control is less than 1, them will be equal its own lenght.
  
This is the two basic verification before we set slide animation.
```javascript
function updateImg(containerNumber, btnType) {
    
    // Checking the parameter
    if(containerNumber === 'first' && btnType.classList.contains('btn-next')) {
      firstCurrentImg++;   
      
      // Img control
      if(firstCurrentImg > firstContainerProductsImgEl.length) {
        firstCurrentImg = 1;
      } else if(firstCurrentImg < 1) {
        firstCurrentImg = firstContainerProductsImgEl.length;
      }

      firstImgSlider.style.transform = `translateX(-${(firstCurrentImg - 1) * imgWidthValue}px)`;
      
    }

    if(containerNumber === 'first' && btnType.classList.contains('btn-prev')) {
      firstCurrentImg--;   
      
      // Img control
      if(firstCurrentImg > firstContainerProductsImgEl.length) {
        firstCurrentImg = 1;
      } else if(firstCurrentImg < 1) {
        firstCurrentImg = firstContainerProductsImgEl.length;
      }

      firstImgSlider.style.transform = `translateX(-${(firstCurrentImg - 1) * imgWidthValue}px)`;
     
    }

    if(containerNumber === 'second' && btnType.classList.contains('btn-next')) {
      secondCurrentImg++;   
      
      // Img control
      if(secondCurrentImg > secondContainerProductsImgEl.length) {
        secondCurrentImg = 1;
      } else if(secondCurrentImg < 1) {
        secondCurrentImg = secondContainerProductsImgEl.length;
      }

      secondImgSlider.style.transform = `translateX(-${(secondCurrentImg - 1) * imgWidthValue}px)`;
      
    }

    if(containerNumber === 'second' && btnType.classList.contains('btn-prev')) {
      secondCurrentImg--;   
      
      // Img control
      if(secondCurrentImg > secondContainerProductsImgEl.length) {
        secondCurrentImg = 1;
      } else if(secondCurrentImg < 1) {
        secondCurrentImg = secondContainerProductsImgEl.length;
      }

      secondImgSlider.style.transform = `translateX(-${(secondCurrentImg - 1) * imgWidthValue}px)`;
      
    }
}
``` 

**Slider Animation**

This code reveal one of thousands of ways to do this animation. In my solution, all images is wrapped in a container. This container will slide to the left or to the right according to **image control** multiplying to <code>imgWidthValule</code>. To avoid any error sliding the images, we subtract by 1 the image control.
```javascript
  secondImgSlider.style.transform = `translateX(-${(secondCurrentImg - 1) * imgWidthValue}px)`;
```

---

### Form Validation
This was the hardest part of my project. I needed to learn a bit of ***RegEx*** to check the inputs. Also, firstly I wanted to made modules and specific files to each function(Validade, Label Animation and etc...). But I realized that my code was very confused and with a lot of bug. So I decided to made the *validate* and other *functionalities* about form in the same file.

**Valitating**

First of all, we started with a event trigger "submit". Then, we catch this event with <code>e</code> parameter and prevent the form to send data without a validation, in <code>e.preventDefault();</code>. 
 
After it, start a serie of <code>if/else</code> statements that will check each input to validate this form. I choose to put one of this validate to don't make it too big.

Accordingly to the requires, it should have a <code>input</code> with a <code>id="submit"</code>. This creates a error when we pass for all input validation's and call the <code>formEl.submit()</code> method's because this is overlaiding for other element with *submit* name. To solve this problem, I used the <code>.call()</code> function to call submit method's to form using heritage of <code>HTMLFormElement</code>.

```javascript
// Validating form;
formEl.addEventListener('submit', (e) => {
  e.preventDefault();


  HTMLFormElement.prototype.submit.call(formEl); // Inheriting the submit method from HTMLFormElement and calling formEl as thisArg;

})
```

Here is the part that check inputs specifically. In <code>isEmailValid(email)</code> and <code>isPhoneNumberValid(phoneNumber)</code> functions I used a ***RegEx*** to accept the patterns. In phone number, I set the regex to accept only numbers of Brazil(My Country)/

```javascript
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
```
---
### Box-shadow style function

This functions receives input as parameters and check if has a class with input name **AND** denies theses values. Bellow I will explain this.



```javascript
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
```

1. The first condition of <code>if/else</code> statements checks if input has a specifically class name.
2. After it, I deny the input value because if this functions is running, it's means that the verification passed the first block of <code>if/else</code> statement and got caughted in the <code>else</code> statement, returning **true**. Returning true is easier to check in this case. 
3. If this block returns true, <code>isInputValid()</code> is invoked.
---

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
