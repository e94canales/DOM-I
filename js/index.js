const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//SELECTORS ////////

const siteTitle = document.querySelector("head title");
const midImg = document.getElementById("middle-img");
const ctaText = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.getElementById("cta-img");
const logo = document.getElementById("logo-img");
const navLinks = document.querySelectorAll("nav a");
const nav = document.querySelector("nav");
const navTitles = Object.values(siteContent["nav"]);
const h4s = document.querySelectorAll(".main-content h4");
const h4Context = document.querySelectorAll(".main-content p");
const mainKeys = Object.entries(siteContent["main-content"]);
const contactH4 = document.querySelector(".contact h4");
const contactPs = document.querySelectorAll(".contact p");
const footer = document.querySelector("footer p");

// IMAGES ///
logo.setAttribute('src', siteContent["nav"]["img-src"]);
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// NAV ///
for (let i = 0; i < navLinks.length; i++){
  navLinks[i].text = navTitles[i]
}

// CTA ///
ctaText.innerHTML = siteContent["cta"]["h1"];
ctaButton.innerHTML = siteContent["cta"]["button"];



// MAIN CONTENT ///

// H4 //////////////////
let h4Titles = [];
// FILTERS KEYS CONTAINING H4
for (let i = 0 ; i < mainKeys.length ; i++){
  if (mainKeys[i][0].includes('h4')){
    h4Titles.push(mainKeys[i])
  }
}
// SETS H4 VALUES
for (let i = 0 ; i < h4Titles.length ; i++){
  h4s[i].innerHTML = h4Titles[i][1]
}

// H4 CONTENTS ///////////
let h4Content = [];
for (let i = 0 ; i < mainKeys.length ; i++){
  if (mainKeys[i][0].includes("content")){
    h4Content.push(mainKeys[i][1])
  }
}
for (let i = 0 ; i < h4Content.length ; i++){
  h4Context[i].innerHTML = h4Content[i];
}

// CONTACT /////////
let contP = Object.values(siteContent["contact"])
contactH4.innerHTML = siteContent["contact"]["contact-h4"]
for (let i = 0 ; i < contactPs.length ; i++){
  contactPs[i].innerHTML = contP[i + 1]
}

// FOOTER ////////
footer.innerHTML = siteContent["footer"]["copyright"];


// STRETCHH ///



let newAnchor = document.createElement("a");
newAnchor.href = "#";
newAnchor.text = "Sign Up!"

let newAnchor2 = document.createElement("a");
newAnchor2.href = "#";
newAnchor2.text = "Login";

nav.appendChild(newAnchor);
nav.appendChild(newAnchor2);

for (let i = 0 ; i < navLinks.length ; i++){
  navLinks[i].style.color = "green"
  navLinks[i].style.fontSize = "17px"
  navLinks[i].style.textDecoration = "none"
  navLinks[i].setAttribute("onmouseover", "this.style.color = 'red'")
}
