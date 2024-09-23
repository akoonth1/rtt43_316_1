
// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },

//       { text: 'catalog', href: '#', subLinks: [
//         { text: 'all', href: '/catalog/all' },
//         { text: 'top selling', href: '/catalog/top' },
//         { text: 'search', href: '/catalog/search' }
//       ]},

//     { text: 'orders', href: '#', subLinks: [
//         { text: 'new', href: '/orders/new' },
//         { text: 'pending', href: '/orders/pending' },
//         { text: 'history', href: '/orders/history' }
//       ]
//     },

//     { text: 'account', href: '#', subLinks: [ 
//         { text: 'profile', href: '/account/profile' },
//         { text: 'sign out', href: '/account/signout' }
//       ]
//     },

//   ];



  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

topMainEl.classList.add("flex-around");



//Part 3: Adding Menu Buttons

// Part 3: Adding Menu Buttons
// Very often, you will be working with data provided by external sources in a variety of ways. 
// For this project, copy the following data structure to the top of your index.js file;
// you will use it to create your menu buttons.

// for(let i=0; i<menuLinks.length; i++){
//     let a = document.createElement("a");
//     a.textContent = menuLinks[i].text;
//     console.log(a);
//     a.href = menuLinks[i].href;
//     topMainEl.appendChild(a);
// }

menuLinks.forEach((link) => {
  let newlink = document.createElement("a");
  newlink.setAttribute("href", link.href);
  newlink.textContent = link.text;
  topMainEl.appendChild(newlink);

});







//Part4

//Later

//====================================
//graded part

// Part 1: Getting Started

//Looks good


// Part 2: Adding Additional HTML and CSS

//Add in additional HTML and CSS to the project

// Part 3: Creating the Sub-Menu
let subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;


// Part 4: Adding Menu Interaction

let topMenuLinks = topMainEl.getElementsByTagName("a");

console.log(topMenuLinks);

topMainEl.addEventListener("click", (e) => {
    e.preventDefault();
 //console.log(e.target + " was clicked");

    if (e.target.nodeName !=="A") return;  //Why does it return a capital A?

    // Remove the active class from each <a> element in topMenuLinks
    for (let link of topMenuLinks) {
      if(e.target === link){ 

       // console.log(link.textContent); 
      let internal_link_ref = menuLinks.find(link => link.text === e.target.textContent);
      console.log(internal_link_ref.subLinks);

        if( internal_link_ref.subLinks !== undefined){
        subMenuEl.style.top = "100%"
        buildSubmenu(internal_link_ref.subLinks);
      
      
      
      } else{
          subMenuEl.style.top = "0";
      }
        continue};

        link.classList.remove("active");
    }

    // Toggle the active class on the clicked <a> element


    if(e.target.classList.contains("active")){
      e.target.classList.remove("active")
      subMenuEl.style.top = "0";

    }
    else{
      e.target.classList.add("active");
    }


    if (e.target.textContent === "ABOUT") {
      mainEl.innerHTML = "<h1>About</h1>";
  } else {
      mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
  }
});

// });

function buildSubmenu(links) {
  // Clear existing submenu items
  subMenuEl.innerHTML = '';

  // Iterate over each link in the input array
  links.forEach(link => {
    let newlink = document.createElement("a");
    //newlink.setAttribute("href", "#");
    newlink.textContent = link.text;
    subMenuEl.appendChild(newlink);
  });
}


subMenuEl.addEventListener("click", (e) => {

  e.preventDefault();
console.log(e.target + " was clicked sub");

  if (e.target.nodeName !=="A") return; 

  // e.target.classList.toggle("active");

  if(e.target.classList.contains("active")){
    e.target.classList.remove("active")
    subMenuEl.style.top = "0";
  }

//console.log(e.target.parentNode.classList)

//remove active class from all top menu links
for (let link of topMenuLinks) {
  link.classList.remove("active");
}


for (let link of subMenuEl.getElementsByTagName("a")) {
  link.classList.remove("active");
}
  
   e.target.classList.remove("active");
  if(e.target.classList.contains("active")){
    e.target.classList.remove("active")
    subMenuEl.style.top = "0";
  }

  else{
    e.target.classList.add("active");
  }

  console.log(e.target.textContent);

  // if ( subMenuEl.style.top == "0") {
  //   mainEl.innerHTML = "<h1>About</h1>";
  // }

  mainEl.innerHTML = `<h1>${e.target.text}</h1>`;

  console.log(e.target.parentNode.textContent);
});





