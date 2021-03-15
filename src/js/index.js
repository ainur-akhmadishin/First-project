import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import '../scss/style.scss';


import Swiper from 'swiper/bundle';

let flag = false;

let button = document.querySelector('.button-show');
let buttonBrend = document.getElementById('buttonBrend');
let buttonTech = document.getElementById('buttonTech');


let box = document.querySelector('.about-company__description');
let brendBox = document.querySelector('.brend__wrapper');
let techBox = document.querySelector('.tech__wrapper');
let span = document.querySelector('.show-icon');
let buttonMenu = document.querySelector('.button--menu');
let menu = document.querySelector('.side-menu');
let menuClose = document.getElementById("menu-close");
let closeFeedback = document.getElementById("closeFeedback");
let closeCallback = document.getElementById("closeCallback");
let buttonMessage = document.querySelector('.button--message');
let buttonCall = document.querySelector('.button--call');


/*СВАЙПЕР*/
if (document.documentElement.clientWidth < 768) {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 1.25,
        spaceBetween: 16,
    });

    const swiperPrice = new Swiper('.price__container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        slidesPerView: 1.22,
        spaceBetween: 16,

    });
}







/*ВЫПОДАЮЩИЕ БЛОКИ*/

button.onclick = function () {
    box.classList.toggle('about-company__description--heigth');
    span.classList.toggle('show-icon--rotate');
    if (button.textContent == 'Показать все') {
        button.textContent = 'Скрыть'
    } else {
        button.textContent = 'Показать все'
    }
}

buttonBrend.onclick = function () {
    let iconBrend = document.getElementById('iconBrend')
    brendBox.classList.toggle('brend__wrapper--heigth');
    iconBrend.classList.toggle('show-icon--brend');
    if (buttonBrend.textContent == 'Показать все') {
        buttonBrend.textContent = 'Скрыть'
    } else {
        buttonBrend.textContent = 'Показать все'
    }
}

buttonTech.onclick = function () {
    let iconTech = document.getElementById('iconTech');
    techBox.classList.toggle('tech__wrapper--heigth');
    iconTech.classList.toggle('show-icon--tech');
    if (buttonTech.textContent == 'Показать все') {
        buttonTech.textContent = 'Скрыть'
    } else {
        buttonTech.textContent = 'Показать все'
    }
}


/*МЕНЮ И МОДАЛЬНЫЕ ОКНА*/
function blurBody() {
    const header = document.querySelector('.header-page');
    const pageWrapper = document.querySelector('.main-page__wrapper');
    const brend = document.querySelector('.brend');
    const tech = document.querySelector('.tech');
    const price = document.querySelector('.price');
    const offer = document.querySelector('.offer');
    const footerPage = document.querySelector('.footer-page');
    const sideMenu = document.querySelector('.side-menu');

    header.classList.add('body-blur');
    pageWrapper.classList.add('body-blur');
    brend.classList.add('body-blur');
    tech.classList.add('body-blur');
    price.classList.add('body-blur');
    offer.classList.add('body-blur');
    footerPage.classList.add('body-blur');
    if (document.documentElement.clientWidth >= 1440) {
        sideMenu.classList.add('body-blur');
    }


}




function blurBodyClose() {
    const header = document.querySelector('.header-page');
    const pageWrapper = document.querySelector('.main-page__wrapper');
    const brend = document.querySelector('.brend');
    const tech = document.querySelector('.tech');
    const price = document.querySelector('.price');
    const offer = document.querySelector('.offer');
    const footerPage = document.querySelector('.footer-page');
    const sideMenu = document.querySelector('.side-menu');

    header.classList.remove('body-blur');
    pageWrapper.classList.remove('body-blur');
    brend.classList.remove('body-blur');
    tech.classList.remove('body-blur');
    price.classList.remove('body-blur');
    offer.classList.remove('body-blur');
    footerPage.classList.remove('body-blur');
    if (document.documentElement.clientWidth >= 1440) {
        sideMenu.classList.remove('body-blur');
    }


}


buttonMenu.onclick = function () {
    menu.classList.add('side-menu--show');

    if (document.documentElement.clientWidth >= 768) {
        blurBody();
        document.querySelector('.feedback').classList.add('feedback--open');
    }
    event.stopPropagation();
    btnDisabled('none');

}

menuClose.onclick = function () {

    menu.classList.remove('side-menu--show');
    if ((document.documentElement.clientWidth >= 768)) {
        document.querySelector('.feedback').classList.remove('feedback--open');
    }
    blurBodyClose();
    btnDisabled('auto');
    btnDisabled('auto');
    buttonMessage.style.pointerEvents = 'auto';
    buttonCall.style.pointerEvents = 'auto';

}

closeFeedback.onclick = function () {
    let feedback = document.querySelector('.feedback');
    let message = document.querySelector('.modal__feedback');
    message.classList.remove('modal__feedback--show');
    blurBodyClose();
    if (document.documentElement.clientWidth >= 768) {
        feedback.classList.remove('body-blur');
        feedback.classList.remove('feedback--open');
    }
    buttonMenu.disabled = false;
    btnDisabled('auto');
    buttonMessage.style.pointerEvents = 'auto';
    buttonCall.style.pointerEvents = 'auto';

}

closeCallback.onclick = function () {
    let feedback = document.querySelector('.feedback');
    let message = document.querySelector('.modal__callback');
    message.classList.remove('modal__callback--show');
    blurBodyClose();
    if (document.documentElement.clientWidth >= 768) {
        feedback.classList.remove('body-blur');
        feedback.classList.remove('feedback--open');
    }

    btnDisabled('auto');
    buttonMessage.style.pointerEvents = 'auto';
    buttonCall.style.pointerEvents = 'auto';

}

buttonMessage.onclick = function () {
    let message = document.querySelector('.modal__feedback');
    let feedback = document.querySelector('.feedback');
    menu.classList.remove('side-menu--show');
    message.classList.add('modal__feedback--show');
    window.scrollTo(pageYOffset, 0);

    if (document.documentElement.clientWidth >= 768) {
        blurBody();
        feedback.classList.add('body-blur');
    }
    event.stopPropagation();
    btnDisabled('none');
    buttonMessage.style.pointerEvents = 'none';
    buttonCall.style.pointerEvents = 'none';

}

buttonCall.onclick = function () {
    let message = document.querySelector('.modal__callback');

    let feedback = document.querySelector('.feedback');
    menu.classList.remove('side-menu--show');
    message.classList.add('modal__callback--show');
    window.scrollTo(pageYOffset, 0);

    if (document.documentElement.clientWidth >= 768) {
        blurBody();
        feedback.classList.add('body-blur');
    }
    btnDisabled('none');
    buttonMessage.style.pointerEvents = 'none';
    buttonCall.style.pointerEvents = 'none';
    event.stopPropagation();
}


/*УБИРАЕМ BLUR*/

const header = document.querySelector('.header-page');



header.onclick = function () {
    removeBlur();
}


const pageWrapper = document.querySelector('.main-page__wrapper');

pageWrapper.onclick = function () {
    removeBlur();
}

const brend = document.querySelector('.brend');

brend.onclick = function () {
    removeBlur();;

}
const tech = document.querySelector('.tech');

tech.onclick = function () {
    removeBlur();

}
const price = document.querySelector('.price');

price.onclick = function () {
    removeBlur();

}

const offer = document.querySelector('.offer');

offer.onclick = function () {
    removeBlur();

}
const footerPage = document.querySelector('.footer-page');

footerPage.onclick = function () {
    removeBlur();
}

function removeBlur() {
    let feedback = document.querySelector('.feedback');
    let messageCall = document.querySelector('.modal__callback');
    let messageFeed = document.querySelector('.modal__feedback');
    if ((document.querySelector('.side-menu').classList.contains('side-menu--show')) || (document.querySelector('.modal__callback').classList.contains('modal__callback--show')) ||
        (document.querySelector('.modal__feedback').classList.contains('modal__feedback--show'))) {
        blurBodyClose();
        menu.classList.remove('side-menu--show');
        feedback.classList.remove('feedback--open');
        feedback.classList.remove('body-blur');
        messageCall.classList.remove('modal__callback--show');
        messageFeed.classList.remove('modal__feedback--show');

    }
    btnDisabled('auto');
    buttonMessage.style.pointerEvents = 'auto';
    buttonCall.style.pointerEvents = 'auto';
}


function btnDisabled(a) {
    let btnShow = document.querySelectorAll('.button-show');
    let swiperSlide = document.querySelectorAll('.swiper-slide');
    let btnVisible = document.querySelectorAll('.button--visible');
    let menuLink = document.querySelectorAll('.menu__link');
    let offerLink = document.querySelector('.offer__link');
    let footerLink = document.querySelector('.footer-page__link');
    buttonMenu.style.pointerEvents = a;
    offerLink.style.pointerEvents = a;
    footerLink.style.pointerEvents = a;

    for (let i = 0; i < btnShow.length; i++) {
        btnShow[i].style.pointerEvents = a;
    }

    for (let k = 0; k < swiperSlide.length; k++) {
        swiperSlide[k].style.pointerEvents = a;
    }

    for (let m = 0; m < btnVisible.length; m++) {
        btnVisible[m].style.pointerEvents = a;
    }

    for (let n = 0; n < menuLink.length; n++) {
        menuLink[n].style.pointerEvents = a;
    }
}
