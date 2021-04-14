let header__burger = document.querySelector('.header__burger');
let header__list = document.querySelector('.header__list');
let header__icon = document.querySelector('.header__icon');
let body = document.querySelector('body');
let html = document.querySelector('html');
let nav__link = document.querySelectorAll('.nav__link');

header__burger.addEventListener('click', function() {
    header__list.classList.toggle('active');
    header__icon.classList.toggle('active');
    body.classList.toggle('lock');
    body.classList.toggle('after');
    html.classList.toggle('lock');
    html.classList.toggle('after');

})

// body lock start

setTimeout(() => {
    document.documentElement.style.overflow = 'auto';
}, 2500);
// body lock end

window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    let img = document.querySelector('.navbar__Logo');
    let image = document.querySelector('.navbar__logo');
    let active = document.querySelector('.nav__link.active');
    let icon = document.querySelector('.header__icon');
    if (window.pageYOffset > 200) {
        img.classList.add('fixed');
        header.classList.add('fixed');
        image.classList.add('fixed');
        active.classList.add('fixed');
        icon.classList.add('fixed');
        for (let i = 0; i < nav__link.length; i++) {
            nav__link[i].classList.add('color');
        }
    } else {
        img.classList.remove('fixed');
        image.classList.remove('fixed');
        header.classList.remove('fixed');
        active.classList.remove('fixed');
        icon.classList.remove('fixed');
        for (let i = 0; i < nav__link.length; i++) {
            nav__link[i].classList.remove('color');
        }
    }
})

// fixed end