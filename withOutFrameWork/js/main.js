/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hide
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER SNEAKERS ===============*/
let swiperImages = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperTitles = new Swiper(".home__titles", {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,
});

swiperImages.controller.control = swiperTitles;
swiperTitles.controller.control = swiperImages;

/*=============== CHANGE BACKGROUND HEADER ===============*/
