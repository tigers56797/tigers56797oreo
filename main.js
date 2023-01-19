// menu show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
// active and remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
  //   Remove menu mobile

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*scrollreveal animation*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// // scroll home
// sr.reveal(".home__title", {});
// sr.reveal(".button", { delay: 200 });
// sr.reveal(".home__img", { delay: 400 });
// sr.reveal(".home__social-icon", { interval: 200 });

// // scroll about
// sr.reveal(".about__img", {});
// sr.reveal(".about__subtitle", { delay: 200 });
// sr.reveal(".about__text", { delay: 400 });

// // scroll skills
// sr.reveal(".skills__subtitle", {});
// sr.reveal(".skills_text", { delay: 200 });
// sr.reveal(".skills_data", { interval: 200 });
// sr.reveal(".skills_img", { delay: 400 });

// // scroll work
// sr.reveal(".work_img", { interval: 200 });

// // scroll contact
// sr.reveal(".contact__input", { interval: 200 });

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
