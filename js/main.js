// Selecting objects from the DOM

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of the Menu nav
let showMenu = false;

// Adding event Listener to the menu button
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");

        // for the links
        navItems.forEach(items => items.classList.add("show")); 

        // Reset the menu state 
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");

        // for the links
        navItems.forEach(items => items.classList.remove("show")); 

        // Reset the menu state 
        showMenu = false;
    }
}