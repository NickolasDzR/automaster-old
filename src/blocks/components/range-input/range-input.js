import rem from '../../../js/import/functions'

const rangeInput = document.querySelector('.range-input');
const btnLeft = document.querySelector('.range-input__button_left');
const btnRight = document.querySelector('.range-input__button_right');
const rangeInputWrp = document.querySelector('.range-input__wrp');
const rangeInputLine = document.querySelector('.range-input__line');
const btnWidth = rem(12);
const rangeInputWrpWidth = rem(rangeInput.offsetWidth);
let btnLeftPosition = 0;
let btnRightPosition = rem(rangeInput.offsetWidth);

btnRight.style.left = (btnRightPosition - btnWidth) + 'rem';

const linePosition = () => {
    rangeInputLine.style.left = btnLeftPosition + 'rem';
    rangeInputLine.style.width = (btnRightPosition - btnLeftPosition) + 'rem';
}


const costSpanEnd = document.querySelector('.range-input__span:nth-child(3)')

const calculateStartCost = () => {
    const constSpanEndValue = Number(costSpanEnd.innerHTML.split(' ').join(''));
    console.log(constSpanEndValue * ((btnRightPosition * 16) / 50000000))
    // costSpanEnd.innerHTML = constSpanEndValue - ((btnRightPosition * 16) * 50000000);
}

btnLeft.onmousedown = function (event) {
    event.preventDefault();

    let shiftX = event.clientX - btnLeft.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let btnPosition = rem(event.clientX - shiftX - rangeInputWrp.getBoundingClientRect().left);

        if (btnPosition < 0) {
            btnPosition = 0;
        }
        if (btnPosition > btnRightPosition - btnWidth) {
            btnPosition = btnRightPosition - btnWidth;
        }

        btnLeft.style.left = btnPosition + 'rem';
        btnLeftPosition = btnPosition;
        linePosition();
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

btnLeft.ondragstart = function () {
    return false;
};

btnRight.onmousedown = function (event) {
    event.preventDefault();

    let shiftX = event.clientX - btnRight.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let btnPosition = rem(event.clientX - shiftX - rangeInputWrp.getBoundingClientRect().left);

        if (btnPosition < btnLeftPosition + btnWidth) {
            btnPosition = btnLeftPosition + btnWidth;
        }
        if (btnPosition > rangeInputWrpWidth - btnWidth) {
            btnPosition = rangeInputWrpWidth - btnWidth;
        }

        btnRight.style.left = btnPosition + 'rem';
        btnRightPosition = btnPosition;
        linePosition();
        calculateStartCost();
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

btnRight.ondragstart = function () {
    return false;
};