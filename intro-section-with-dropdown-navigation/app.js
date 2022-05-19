const menu1 = document.getElementById("menu-1");
const sub1 = document.querySelector(".sub-menu-1");
let timer1 = null;
let timer2 = null;

const menu2 = document.getElementById("menu-2");
const sub2 = document.querySelector(".sub-menu-2");

menu1.addEventListener("mouseover", () => {
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
