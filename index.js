/* When the user clicks on hamburger menu, toggle between hiding and showing the dropdown menu */

const menu = document.getElementById("nav");
const hamburgerButton = document.querySelector(".toggle-menu");

hamburgerButton.addEventListener("click", function (e) {
  menu.classList.toggle("show");
  setAriaExpanded();
  e.stopPropagation();
});

/* When clicked outside of dropdown menu menu closes */

document.addEventListener("click", function (e) {
  if (e.target != menu && e.target.parentNode != menu) {
    menu.classList.remove("show");
    setAriaExpanded();
  }
});

/* Set aria expanded on menu button */

const setAriaExpanded = function () {
  var x = hamburgerButton.getAttribute("aria-expanded");
  if (x == "false") {
    x = "true";
  } else {
    x = "false";
  }
  hamburgerButton.setAttribute("aria-expanded", x);
};

