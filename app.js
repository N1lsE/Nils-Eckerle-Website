// smothe scrolling in safari
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

// navbar toggle code was coppied from https://www.youtube.com/watch?v=3-2Pj5hxwrw
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbarMenu");
const navLogo = document.querySelector("#navbarLogo");

// display mobile menu
const mobileMenu = () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Close Mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 820 && menuBars) {
      menu.classList.toggle("is-active");
      menuLinks.classList.remove("active");
    }
  };
  
  menuLinks.addEventListener("click", hideMobileMenu);
  navLogo.addEventListener("click", hideMobileMenu);
// End of stealing code