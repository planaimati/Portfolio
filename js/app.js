const menu = new Menu(
  document.querySelector(".navbar__burger"),
  document.querySelector(".navbar__menu")
);

const projects = new Projects(
  document.querySelectorAll(".projects__container-menu-item"),
  document.querySelectorAll(".projects__container-project"),
  document.querySelector(".projects__container")
);

menu.init();
projects.init();
