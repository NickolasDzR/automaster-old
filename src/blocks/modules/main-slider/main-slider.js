import 'nodelist-foreach-polyfill';
import Swiper from 'swiper';

if (!Modernizr.webp) {
    const sliderBG = document.querySelectorAll('.main-slider-bg__item');
    for (let i = 0; i < sliderBG.length; i += 1) {
        sliderBG[i].style.backgroundImage = `url('img/main-slider-bg/slide-image-${i}.jpg')`;
    }
}

const changeActiveSlides = (active, next) => {
    const sliderControlsItem = document.querySelectorAll('.slider-controls__item');
    sliderControlsItem.forEach((el) => {
        if (el.classList.contains('swiper-slide-active')) {
            el.classList.remove('swiper-slide-active')
        }
        if (el.classList.contains('swiper-slide-next')) {
            el.classList.remove('swiper-slide-next')
        }
    });
    sliderControlsItem[active].classList.add('swiper-slide-active');
    sliderControlsItem[next].classList.add('swiper-slide-next');
}


const animateSpan = (el) => {
    let indexAnimate = 0;
    const animateCont = () => {
        el.style.width = indexAnimate + "%";
        indexAnimate += 1;
        if (indexAnimate > 100) {
            stopAnimate();
        }
    }
    const stopAnimate = () => {
        clearInterval(animate);
        indexAnimate = 0;
    }
    const animate = setInterval(animateCont, 20);
    const prevSlideSpan = document.querySelector('.swiper-slide-prev .slider-controls__decorative-span')
    if (prevSlideSpan.style.width.split('%')[0] > 0) {
        stopAnimate();
    }
}

const deleteSpan = (el) => {
    let widthIndex = el.style.width.split('%')[0];
    const deleteCont = () => {
        el.style.width = widthIndex + "%";
        widthIndex -= 1;
        if (widthIndex < 0) {
            stopAnimte();
        }
    }
    const animate = setInterval(deleteCont, 10);
    const stopAnimte = () => {
        clearInterval(animate);
    }
}

const mainSwiperIsExist = () => {
    if (document.querySelector('.main-slider') && document.querySelector('.main-slider-bg') && document.querySelector('.slider-controls')) {
        const swiperBg = new Swiper('.main-slider-bg', {
            touchRation: 0,
            effect: 'fade',
            allowTouchMove: false,
            on: {
                slideChange: function () {
                    if (swiperTitle.realIndex === 2) {
                        changeActiveSlides(swiperTitle.realIndex, 0)
                    } else {
                        changeActiveSlides(swiperTitle.realIndex, swiperTitle.realIndex + 1)
                    }

                    const sliderControlsItem = document.querySelectorAll('.slider-controls__item');
                    sliderControlsItem.forEach((el) => {
                        el.classList.remove('swiper-slide-prev');
                        if (!el.classList.contains('swiper-slide-active') && !el.classList.contains('swiper-slide-next')) {
                            el.classList.add('swiper-slide-prev');
                        }
                    });

                    sliderControlsItem.forEach((el) => {
                        if (el.classList.contains('swiper-slide-prev')) {
                            deleteSpan(el.querySelector('.slider-controls__decorative-span'));
                        }
                        if (!el.classList.contains('swiper-slide-prev') && !el.classList.contains('swiper-slide-next')) {
                            animateSpan(el.querySelector('.slider-controls__decorative-span'));
                        }
                    });

                }
            }
        });

        const swiperTitle = new Swiper('.main-slider-title', {
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

        // swiperTitle.autoplay.stop();
        // setTimeout(() => {
        //     swiperTitle.autoplay.start();
        // }, 1000)

        const swiperControls = new Swiper(document.querySelectorAll('.slider-controls .swiper-container'), {
            loop: false,
            slidesPerView: 3,
            width: 1218,
            spaceBetween: 32,
            allowSlidePrev: true,
        });
    }
}

window.onload = () => {
    mainSwiperIsExist();
}