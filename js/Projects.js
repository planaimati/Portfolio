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
    } else if (e.target.textContent === "ALL") {
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
