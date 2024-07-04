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
      - [Form Validation](#form-validation)
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
- [Scroll Reveal](https://scrollrevealjs.org/) - JS library

### What I learned

This section show some new knowledges that I learned in this project. 

#### **Grid Layouts**

In this project I starded to work with Grid Layout. This is a skill that I have to improve and some

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
---

#### Form Validation

``` javascript

``` 


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
