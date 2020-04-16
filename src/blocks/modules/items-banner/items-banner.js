const itemsBanner = document.querySelector('.items-banner');
const itemsSlide = document.querySelector('.items-slide');
const metaPage = document.querySelector('.meta-page');

itemsBanner.addEventListener('click', function () {
    itemsSlide.classList.toggle('items-slide_visible');
    itemsBanner.classList.toggle('items-banner_hover');
    if (itemsSlide.classList.contains('items-slide_visible')) {
        metaPage.classList.remove('active');
    }
})