# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/rating-component-using-pure-html-css-and-js-ry6VWIsVq)
- Live Site URL: [Github Pages](https://saulthebear.github.io/Interactive-Rating-Component/index.html)

### Screenshot

![](./screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Through this project I learned how to create custom radio buttons.
This was done by rendering the inputs themselves invisible and styling the labels instead.

```css
.inputs > input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.inputs > input:checked + label {
  background-color: var(--orange);
  color: white;
}

.inputs > label {
  line-height: 1;
  height: 3em;
  aspect-ratio: 1/1;
  background-color: var(--dark-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  cursor: pointer;
}

label:hover,
label:active {
  background-color: var(--medium-grey);
  color: white;
}
```

### Useful resources

- [Custom Checkbox](https://www.w3schools.com/howto/howto_css_custom_checkbox.asp) - This showed me how to hide the radio buttons while still maintaining their functionality.

## Author

- Frontend Mentor - [@saulthebear](https://www.frontendmentor.io/profile/saulthebear)
- Twitter - [@saulthebear](https://www.twitter.com/saulthebear)
