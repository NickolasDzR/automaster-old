const hamburger = document.querySelector('.hamburger');
const navTransform = document.querySelector('nav');


hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.toggle('active');
    navTransform.classList.toggle('active');
    document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? '' : 'hidden';
})

