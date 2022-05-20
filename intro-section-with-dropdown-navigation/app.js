const menu1 = document.getElementById("menu-1");
const sub1 = document.querySelector(".sub-menu-1");
let timer1 = null;
let timer2 = null;

const menu2 = document.getElementById("menu-2");
const sub2 = document.querySelector(".sub-menu-2");

const mobileMenuOpen = document.getElementById("open-mobile-menu");
const mobileMenuClose = document.getElementById("close-mobile-menu");
const mobileWrapper = document.getElementById("mobile-wrapper");

const mobileMenu1 = document.getElementById("mobile-menu-1");
const mobileSub1 = document.querySelector(".mobile-sub-menu-1");
const mobileMenu2 = document.getElementById("mobile-menu-2");
const mobileSub2 = document.querySelector(".mobile-sub-menu-2");

menu1.addEventListener("mouseover", () => {
  console.log("menu1: ", menu1);
  clearTimeout(timer1);
  sub1.classList.add("sub__menu-show");
});

menu1.addEventListener("mouseout", () => {
  timer1 = setTimeout(() => {
    sub1.classList.remove("sub__menu-show");
  }, 500);
});

menu2.addEventListener("mouseover", () => {
  clearTimeout(timer2);
  sub2.classList.add("sub__menu-show");
});

menu2.addEventListener("mouseout", () => {
  timer2 = setTimeout(() => {
    sub2.classList.remove("sub__menu-show");
  }, 500);
});

function blackBg() {
  setTimeout(() => {
    mobileWrapper.classList.toggle("active");
  }, 150);
}
mobileMenuOpen.addEventListener("click", () => {
  const mobileMenuElement = document.querySelector(".navigation__mobile");
  mobileMenuElement.classList.toggle("navigation__mobile--show");
  blackBg();
});

mobileMenuClose.addEventListener("click", () => {
  const mobileMenuElement = document.querySelector(".navigation__mobile");
  mobileMenuElement.classList.toggle("navigation__mobile--show");
  blackBg();
});

mobileMenu1.addEventListener("click", () => {
  mobileSub1.classList.toggle("mobile-sub__menu-show");
});
mobileMenu2.addEventListener("click", () => {
  mobileSub2.classList.toggle("mobile-sub__menu-show");
});
