const metaPage = document.querySelector('.meta-page');
const itemsSlideBlock = document.querySelector('.items-slide__features');
const itemsSlideItems = document.querySelectorAll('.items-slide__item');
const itemsSlideItem = document.querySelector('.items-slide__item');

const metaPageClose = document.querySelector('.meta-page__title a');

itemsSlideItems.forEach(el => {
    el.addEventListener('click', e => {
        metaPage.classList.add('active');
    })
})

if (document.querySelector('.meta-page__title a')) {
    metaPageClose.addEventListener('click', e => {
        e.preventDefault();
        if (metaPage.classList.contains('active')) {
            metaPage.classList.remove('active');
        }
    });
}