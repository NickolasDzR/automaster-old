import Swiper from 'swiper';

var swiperBg = new Swiper('.main-slider-bg', {
    loop: true,
    loopedSlides: 3,
    touchRation: 0,
    effect: 'fade',
});

var swiperTitle = new Swiper('.main-slider-title', {
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
});