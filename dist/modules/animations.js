"use strict";

export const allObservers = function () {
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("main-header");

  const stickyNav = function (entries) {
    const [entry] = entries;

    console.log("hoi");

    if (!entry.isIntersecting) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.95,
    rootmargin: 0,
  });

  headerObserver.observe(header);
};
