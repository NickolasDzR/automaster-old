import 'nodelist-foreach-polyfill';
import Swiper from 'swiper';

let changeSlide = undefined;

if (document.querySelector('.slider-controls')) {
    const sliderControls = document.querySelector('.slider-controls');
    const sliderControlsItems = sliderControls.querySelectorAll('.swiper-slide');
    const sliderControlsItemsLength = sliderControlsItems.length - 1;


    changeSlide = (i) => {
        sliderControlsItems.forEach(el => {
            el.classList.remove('swiper-slide-active');
            el.classList.remove('swiper-slide-next');
        });
        if ((i + 1) > sliderControlsItemsLength) {
            sliderControlsItems[0].classList.add('swiper-slide-next');
        } else {
            sliderControlsItems[i + 1].classList.add('swiper-slide-next');
        }
        sliderControlsItems[i].classList.add('swiper-slide-active');
    }
}

let swiperBg = undefined;

if (document.querySelector('.main-slider-bg')) {
    swiperBg = new Swiper('.main-slider-bg', {
        touchRation: 0,
        effect: 'fade',
        allowTouchMove: false,
        on: {
            slideChange: () => {
                changeSlide(swiperBg.activeIndex);
            },
        },
    });
};

let swiperTitle = undefined;

if (document.querySelector('.main-slider-title')) {
    swiperTitle = new Swiper('.main-slider-title', {
        virtualTranslate: false,
        speed: 1000,
        spaceBetween: 300,
        loop: true,
        loopedSlides: 3,
        autoplay: {
            delay: 2000,
        },
        thumbs: {
            swiper: swiperBg,
        },
        scrollbar: '.slider-controls',
    });
}

let swiperControls = undefined;

if (document.querySelector('.slider-controls')) {
    swiperControls = new Swiper(document.querySelectorAll('.slider-controls .swiper-container'), {
        loop: false,
        slidesPerView: 3,
        width: 1218,
        spaceBetween: 32,
        allowSlidePrev: true,
        slidePrevClass: 'swiper-slide-prev',
    });
}