const itemsBanner = document.querySelector('.items-banner');
const itemsSlide = document.querySelector('.items-slide');

itemsBanner.addEventListener('click', function () {
    itemsSlide.classList.toggle('items-slide_visible');
    itemsBanner.classList.toggle('items-banner_hover');
})