class Projects {
  constructor(projectsButtons, projects) {
    this.projectsButtons = projectsButtons;
    this.projects = projects;
  }

  init() {
    this.addListeners();
  }

  addListeners = () => {
    this.projectsButtons.forEach((button) => {
      button.addEventListener("click", (e) => this.showProjects(e));
    });
  };

  toggleActive = () => {};

  showProjects = (e) => {
    this.projectsButtons.forEach((button) => {
      button.classList.remove("active");
      e.target.classList.add("active");
    });

    if (e.target.textContent === "JavaScript") {
      this.projects.forEach((project) => {
        if (!project.classList.contains("js")) {
          project.style.display = "none";
        } else {
          project.style.display = "block";
        }
      });
    } else if (e.target.textContent === "Wszystko") {
      e.target.classList.add("active");
      this.projects.forEach((project) => {
        project.style.display = "block";
      });
    } else if (e.target.textContent === "React") {
      e.target.classList.add("active");
      this.projects.forEach((project) => {
        if (!project.classList.contains("react")) {
          project.style.display = "none";
        } else {
          project.style.display = "block";
        }
      });
    }
  };
}

class Popup {
  constructor(
    popupButton,
    popup,
    closeButton,
    img,
    name,
    desc,
    container,
    github,
    live
  ) {
    this.popupButton = popupButton;
    this.popup = popup;
    this.closeButton = closeButton;
    this.img = img;
    this.name = name;
    this.desc = desc;
    this.container = container;
    this.github = github;
    this.live = live;
  }

  init = () => {
    this.addListeners();
  };

  addListeners = () => {
    this.popupButton.forEach((button) => {
      button.addEventListener("click", (e) => this.showPopup(e));
    });

    this.closeButton.addEventListener("click", () => this.closePopup());
  };

  showPopup = (e) => {
    console.log(e.target.dataset.id);
    if (e.target.dataset.id === "reactshop") {
      this.img.src = "https://i.ibb.co/X2dZdjr/ballerbay.png";
      this.name.innerText = "BallerBay";
      this.desc.innerText =
        "Projekt który realizowałem w ramach pracy inżynierskiej, napisany w React.js, z wykorzystaniem Styled Components, oraz biblioteki Redux która odpowiada za zarządzanie stanem aplikacji. Zawartość sklepu pobierana jest z NetlifyCMS, który umożliwia dynamiczne zarządzanie treścią";
      this.github.href = "https://github.com/planaimati/BallerBay";
      this.live.href = "https://ballerbay.netlify.app/";
    } else if (e.target.dataset.id === "portfolio") {
      this.img.src = "https://i.ibb.co/6sRHm55/portfolio.png";
      this.name.innerText = " Portfolio ";
      this.desc.innerText =
        "Projekt napisany w JS z użyciem preprocesora Sass i biblioteki AOS która odpowiada za animacje, planuję wrzucać tutaj ciekawsze projekty które uda mi się stworzyć w przyszłości ";
      this.github.href = "https://github.com/planaimati/portfolio";
      this.live.href = "#";
    } else if (e.target.dataset.id === "tictactoe") {
      this.img.src = "https://i.ibb.co/9pzCkvL/tictactoe.png";
      this.name.innerText = " Kółko i krzyżyk ";
      this.desc.innerText = "Prosta gra w kółko i krzyżyk, napisana w JS";
      this.github.href = "https://github.com/planaimati/kolko-krzyzyk";
      this.live.href = "https://planaimati.github.io/kolko-krzyzyk/";
    }

    this.popup.classList.add("activePopup");
  };

  closePopup = () => {
    console.log("chuj");
    this.popup.classList.remove("activePopup");
  };
}

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

const projects = new Projects(
  document.querySelectorAll(".projects__container-menu-item"),
  document.querySelectorAll(".projects__container-project")
  //document.querySelector(".projects__container"),
);

const popup = new Popup(
  document.querySelectorAll(".popup-button"),
  document.querySelector(".popup"),
  document.querySelector(".popup__container-items-buttons-closeButton"),
  document.querySelector(".popupImg"),
  document.querySelector(".headerName"),
  document.querySelector(".popupDesc"),
  document.querySelector(".container"),
  document.querySelector(".git"),
  document.querySelector(".live")
);

menu.init();
projects.init();
popup.init();
