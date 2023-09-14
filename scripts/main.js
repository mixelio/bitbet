'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const menuOpener = document.querySelector('.header__menu-opener');
// const menuCloser = document.querySelector('.');
const body = document.querySelector('.page__body');
// const menuLinks = document.querySelectorAll('.');
const mainMenu = document.querySelector('.header__navigation');
const scrolWidth = window.innerWidth - document.body.clientWidth;

if (menuOpener) {
  menuOpener.addEventListener('click', (e) => {
    menuOpener.classList.toggle('_active');
    menuOpener.classList.toggle('_inactive');
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}



$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    // Настройки слайдера
    loop: false, // Зациклить слайды
    margin: 16, // Отступ между слайдами
    nav: false, // Показать навигацию (кнопки "Вперед" и "Назад")
    center: true,
    items: 1,
    autoWidth: false,
    dots: true,
    stagePadding: 40,
    loop: false,

    responsive: {
      768: {
        items: 2,
        center: false,
        stagePadding: 56,
        margin: 20,
      },
      1280: {
        items: 4,
        center: false,
        stagePadding: 40,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
      },

      1440: {
        items: 5,
        center: false,
        stagePadding: 60,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
      },
    },
  });
});