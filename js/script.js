"use strict";

let arqedMenu = document.querySelectorAll(".fp__arqed-menu");

arqedMenu.forEach(el => {
  el.addEventListener("click", function () {
    this.classList.toggle("active");
    el.nextElementSibling.classList.toggle("active");
  });
});
