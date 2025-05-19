
const burgerIcon = document.querySelector(".burger__menu");
const headerMenu = document.querySelector(".header__menu");

if (burgerIcon) {
  burgerIcon.addEventListener("click", function (e) {
    burgerIcon.classList.toggle("_active");
    headerMenu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}
const menuLinks = document.querySelectorAll(".header__link");
menuLinks.forEach((link) => {
  link.addEventListener("click", onLinkClick);
});
function onLinkClick(e) {
  if (burgerIcon.classList.contains("_active")) {
    burgerIcon.classList.remove("_active");
    headerMenu.classList.remove("_active");
    document.body.classList.remove("_lock");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const headerItems = document.querySelectorAll(".header__item");
  headerItems.forEach(function (item, index) {
    const delay = (index + 1) * 0.1 + 0.15;
    item.style.transitionDelay = delay + "s";
  });
});