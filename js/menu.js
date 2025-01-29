const headerMain = document.querySelector('.header__menu');
const btnMenu = document.querySelector('.header__button');
const headerLine = document.querySelector('.header__container');
const btnClose = document.querySelector('.header__button__close');

const toggleMenu = () => {
    headerMain.classList.toggle('header__menu__on');
    headerLine.classList.toggle('headeroff');
    document.body.classList.toggle('no-scroll');
};

btnMenu.addEventListener('click', toggleMenu);
btnClose.addEventListener('click', toggleMenu);
