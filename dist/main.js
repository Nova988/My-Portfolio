"use strict";

import { allObservers } from "./modules/animations.js";

const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");

const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuOverlay.classList.toggle("open");

  navLink.forEach((i) => {
    i.addEventListener("click", () => {
      menuBtn.classList.remove("open");
      menuOverlay.classList.remove("open");
    });
  });
});

allObservers();

// Navbar scrolling fixed
let scrolling = false;

// window.onscroll = () => {
//   if (Math.round(window.scrollY > 100)) {
//     navbar.classList.add("scroll");
//     if (!scrolling) {
//       navbar.style.transform = "translateY(-80px)";
//     }

//     setTimeout(() => {
//       navbar.style.transform = "translateY(0px)";
//       scrolling = true;
//     }, 200);
//   } else {
//     navbar.classList.remove("scroll");
//     scrolling = false;
//   }
// };

// Navigation smooth scrolling
navMenu.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    e.preventDefault();
    const nav = e.target.getAttribute("href");
    document.querySelector(nav).scrollIntoView({
      behavior: "smooth",
    });
  }
});
