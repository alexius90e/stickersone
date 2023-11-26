const headerHamburger = document.querySelector('.header__hamburger');

const headerCloseButton = document.querySelector('.header__nav-close-button');

const headerNav = document.querySelector('.header__nav');

const headerLayout = document.querySelector('.header__layout');

headerHamburger.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  headerLayout.classList.toggle('active');
});

headerCloseButton.addEventListener('click', () => {
  headerNav.classList.remove('active');
  headerLayout.classList.remove('active');
});

headerLayout.addEventListener('click', () => {
  headerNav.classList.remove('active');
  headerLayout.classList.remove('active');
});

const mainSwiper = new Swiper('.main-slider .swiper', {
  loop: true,
  autoplay: {
    delay: 10000,
  },

  pagination: {
    el: '.main-slider .swiper-pagination',
  },

  navigation: {
    nextEl: '.main-slider .swiper-button-next',
    prevEl: '.main-slider .swiper-button-prev',
  },
});
