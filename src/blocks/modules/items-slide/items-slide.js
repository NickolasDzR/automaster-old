import 'nodelist-foreach-polyfill';
import enquire from "enquire.js/dist/enquire";

import Swiper from 'swiper';
const metaPage = document.querySelector('.meta-page');
const itemsSlideItems = document.querySelectorAll('.items-slide__item');
const itemsBanner = document.querySelector('.items-banner');

const metaPageClose = document.querySelector('.meta-page__title a');

itemsSlideItems.forEach(el => {
    el.addEventListener('click', e => {
        metaPage.classList.add('active');
        itemsBanner.style.pointerEvents = 'none';
    })
})

if (document.querySelector('.meta-page__title a')) {
    metaPageClose.addEventListener('click', e => {
        e.preventDefault();
        if (metaPage.classList.contains('active')) {
            metaPage.classList.remove('active');
            itemsBanner.style.removeProperty('pointer-events');
        }
    });
}

if (document.querySelector('.items-slide__slider')) {
    const itemsSlideSlider = document.querySelector('.items-slide__slider');
    const itemsSlideFeatures = itemsSlideSlider.querySelector('.items-slide__features');
    const slideItems = itemsSlideSlider.querySelectorAll('.items-slide__item');
    const itemsSlideWrapper = document.querySelector('.items-slide__wrapper');

    let mainBlockSlider = undefined;
    const initItemSwiper = () => {
        mainBlockSlider = new Swiper('.items-slide__slider', {
            slidesPerView: 1,
            slidesPerColumnFill: 'row',
            slidesPerColumn: 3,
            containerModifierClass: 'items-slider ',
            allowTouchMove: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
                modifierClass: 'swiper-pagination__width ',
                bulletClass: 'swiper-pagination__line '
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 3,
                    spaceBetween: 0,
                },
                576: {
                    slidesPerView: 2,
                    slidesPerColumn: 3,
                    spaceBetween: 0,
                },
            }
        });
    }

    const addItemsSliderClasses = () => {
        itemsSlideSlider.classList.add('swiper-container');
        itemsSlideFeatures.classList.add('swiper-wrapper');
        slideItems.forEach((el) => {
            el.classList.add('swiper-slide');
        });
        const navigationButton = document.createElement('div');
        navigationButton.className = 'swiper-pagination';
        itemsSlideSlider.appendChild(navigationButton);
    }

    const removeItemsSliderClasses = () => {
        itemsSlideSlider.classList.remove('swiper-container');
        itemsSlideFeatures.classList.remove('swiper-wrapper');
        slideItems.forEach((el) => {
            el.classList.remove('swiper-slide');
        });
        const swiperPagination = document.querySelector('.swiper-pagination');
        itemsSlideSlider.removeChild(swiperPagination);
    }

    enquire.register("screen and (max-width: 992px)", {
        match: () => {
            addItemsSliderClasses();
            initItemSwiper();
        },
        unmatch: () => {
            if (mainBlockSlider) {
                mainBlockSlider.destroy(true, true);
                removeItemsSliderClasses();
            }
        }
    });

};