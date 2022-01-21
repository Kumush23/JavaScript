let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset += 450;
    if (offset > 4300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.getElementsByClassName('.slider-prev').addEventListener('click', function () {
    offset -= 450;
    if (offset < 0) {
        offset = 4200;
    }
    sliderLine.style.left = -offset + 'px';
})