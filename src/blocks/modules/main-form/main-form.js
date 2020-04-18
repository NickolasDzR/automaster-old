const mainFormInputs = document.querySelectorAll('.main-form__form-input');

mainFormInputs.forEach((el) => {
    el.addEventListener('focus', () => {
        el.parentElement.classList.add('active');
    })
})

mainFormInputs.forEach((el) => {
    el.addEventListener('blur', () => {
        if (el.value < 1) {
            el.parentElement.classList.remove('active');
        }
    })
})