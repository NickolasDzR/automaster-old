import 'nodelist-foreach-polyfill';
const backgroundImageExt = document.querySelectorAll('[data-background]');

const extensionAr = ['webp', 'jpg'];

if (Modernizr.webp) {
    backgroundImageExt.forEach(el => {
        el.style.backgroundImage = 'url(img/' + el.dataset.background + '.' + extensionAr[0] + ')';
        el.removeAttribute('data-background');
    });
} else {
    backgroundImageExt.forEach(el => {
        el.style.backgroundImage = 'url(img/' + el.dataset.background + '.' + extensionAr[1] + ')';
        el.removeAttribute('data-background');
    });
}