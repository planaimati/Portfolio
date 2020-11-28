class Menu {
  constructor(burger, menu) {
    this.burger = burger;
    this.menu = menu;
  }

  init = () => {
    this.addListeners();
  };

  addListeners = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 688) {
        this.menu.classList.remove("open");
        this.burger.classList.remove("active");
      }
    });
    this.burger.addEventListener("click", () => {
      this.menu.classList.toggle("open");
      this.burger.classList.toggle("active");
    });
  };
}
