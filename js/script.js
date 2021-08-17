"use strict";

const iconMenu = document.querySelector(".menu__icon");

if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");

  iconMenu.addEventListener("click", () => {
    document.body.classList.toggle("disabled");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}
