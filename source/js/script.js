const navMain = document.querySelector('.main-nav');
const navToggle = navMain.querySelector('.main-nav__toggle');
const popup = document.querySelector('.modal');
const popupLinks = document.querySelectorAll('.button__modal-open');

// Mobile menu

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click',() => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  };
});

// Modal

if (popupLinks.length > 0) {
  popupLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      popup.classList.add('modal--show');
    });
  })
};

popup.addEventListener ('click', (evt) => {
  if (!evt.target.closest('.modal__window')) {
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    };
  };
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      popup.classList.remove('modal--show');
    };
  };
});

// Slideshow

let position = 0;
const slidesToShow = 1;
const slidesToScroll  = 1;
const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.slider__list');
const sliderItem = sliderList.querySelectorAll('.slider__item');
const prevButton = slider.querySelector('.reviews__prev');
const nextButton = slider.querySelector('.reviews__next');
const itemWidth= slider.offsetWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

sliderItem.forEach((item) => item.style.minWidth = `${itemWidth}px`);

prevButton.addEventListener('click', () => {
  position += movePosition;
  setPosition();
  checkButton();
});

nextButton.addEventListener('click', () => {
  position -= movePosition;
  setPosition();
  checkButton();
});

const setPosition = () => {
  sliderList.style.transform = `translateX(${position}px)`;
};

const checkButton = () => {
  prevButton.disabled = position === 0;
  nextButton.disabled = position <= -(sliderItem.length - slidesToShow) * itemWidth;
};
checkButton()
