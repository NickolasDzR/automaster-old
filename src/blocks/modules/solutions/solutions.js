import enquire from "enquire.js/dist/enquire";
import Swiper from 'swiper';

const solutionsBlock = document.querySelector('.solutions');
const solutionsWrapper = document.querySelector('.solutions__wrapper');
const solutionsInner = document.querySelector('.solutions__inner');
const solutionItems = solutionsInner.querySelectorAll('.solutions__item');

let solutionSwiper = undefined;

const initSolutionSwiper = () => {
    solutionSwiper = new Swiper('.solutions__wrapper .swiper-container', {
        slidesPerView: 3,
        // spaceBetween: 15,
        breakpoints: {
            768: {
                spaceBetween: 15,
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        }
    });
}

const createSolutionsSlider = () => {
    const container = document.createElement('div');
    container.className = "swiper-container";
    solutionsWrapper.appendChild(container);
    container.appendChild(solutionsInner);
    solutionsInner.classList.add('swiper-wrapper');
    solutionItems.forEach(el => {
        el.classList.add('swiper-slide');
    });
}

enquire.register("screen and (max-width: 992px)", {
    match: () => {
        createSolutionsSlider();
        initSolutionSwiper();
    },
    unmatch: () => {
        solutionSwiper.destroy(true, true);
    }
});