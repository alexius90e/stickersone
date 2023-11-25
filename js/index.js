const headerHamburger = document.querySelector('.header__hamburger');

const headerCloseButton = document.querySelector('.header__nav-close-button');

const headerNav = document.querySelector('.header__nav');

headerHamburger.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});

headerCloseButton.addEventListener('click', () => {
  headerNav.classList.remove('active');
});

// headerNav.addEventListener('click', (event) => {
//   const isCurrentTarget = event.target.classList.contains('.header__nav');
//   if (!isCurrentTarget) headerNav.remove('active');
//   console.log(isCurrentTarget);
// });

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
