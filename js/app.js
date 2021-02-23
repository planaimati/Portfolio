class Menu {
  constructor(burger, menu, scrollTopBtn, navbar, home, fa) {
    this.burger = burger;
    this.menu = menu;
    this.scrollTopBtn = scrollTopBtn;
    this.navbar = navbar;
    this.home = home;
    this.fa = fa;
  }
  currentSection = 0;

  //funkcja inicjalizująca
  init = () => {
    this.addListeners();
  };
  // funkcja nadająca listenery
  addListeners = () => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 688) {
        this.menu.classList.remove("open");
        this.burger.classList.remove("active");
      }
    });
    this.burger.addEventListener("click", () => {
      this.menu.classList.toggle("open");
      this.fa.classList.toggle("fa-bars");
      this.fa.classList.toggle("fa-times");
    });

    window.addEventListener("scroll", (e) => {
      this.changeBgcColor(e);
    });

    this.scrollTopBtn.addEventListener("click", () => {
      this.scrollTop();
    });
  };

  // scroll top
  scrollTop = () => {
    window.scrollTo(0, 0);
  };
  //zmiana koloru navigacji
  changeBgcColor = (e) => {
    if (window.scrollY >= this.home.scrollHeight - this.navbar.offsetHeight) {
      this.navbar.style.background = "black";
      this.navbar.style.width = "100%";
      this.fa.style.color = "black";
    } else {
      this.navbar.style.background = "transparent";
      this.fa.style.color = "white";
    }

    if (window.innerWidth <= 688) {
      this.navbar.style.background = "transparent";
    }
  };
}

AOS.init({
  offset: 150,
  duration: 1000,
});

const menu = new Menu(
  document.querySelector(".navbar__burger"),
  document.querySelector(".navbar__menu"),
  document.querySelector(".footer__scroll"),
  document.querySelector(".navbar"),
  document.querySelector(".home"),
  document.querySelector(".fas")
);

menu.init();
projects.init();
popup.init();
