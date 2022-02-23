"use strict";

export const allObservers = function () {
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("main-header");
  const sections = document.querySelectorAll("section");

  const stickyNav = function (entries) {
    const [entry] = entries;

    console.log("hoi");

    if (!entry.isIntersecting) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
  };

  const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.2,
    rootmargin: 0,
  });

  //  Show section on scroll

  sections.forEach((section) => {
    section.classList.add("section__hidden");
  });

  const obsShowSection = function (entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      if (entry.isIntersecting) {
        entry.target.classList.remove("section__hidden");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(obsShowSection, {
    root: null,
    threshold: 0.35,
  });

  headerObserver.observe(header);
  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
};
