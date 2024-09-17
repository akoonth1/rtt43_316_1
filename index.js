
// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
// Part 1: Getting Started
// Explore the existing structure of the provided CodeSandbox to familiarize yourself with important aspects such as current DOM structure, element IDs, and available CSS classes.
// Take five minutes to familiarize yourself with CSS Custom Properties (variables) - they are an amazing addition to CSS. If you are familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!
// Start the project by building a main content element using the following steps:
// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.


console.log("Hello World"); //testing

//Part 1:

//querySelector for no index
let mainEl = document.querySelector("main");
console.log(mainEl);

//const main_bg= document.documentElement.style.getPropertyValue("--main-bg");

mainEl.style.backgroundColor = "var(--main-bg)";


mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.

mainEl.classList.add("flex-ctr");


//Part 2: Creating a Menu Bar

// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.

let topMainEl = document.getElementById("top-menu");

console.log(topMainEl);

topMainEl.style.height = "100%";

topMainEl.style.backgroundColor = "var(--top-menu-bg)";


//Part 3: Adding Menu Buttons

// Part 3: Adding Menu Buttons
// Very often, you will be working with data provided by external sources in a variety of ways. 
// For this project, copy the following data structure to the top of your index.js file;
// you will use it to create your menu buttons.

