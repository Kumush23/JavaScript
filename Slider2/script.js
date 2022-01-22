// setInterval(() => {
//     document.querySelector('.slider-next').click();
// }, 2000);

document.querySelector('.slider-next').addEventListener('click', function () {
    const sliderItem = document.querySelectorAll('.slider-item');
    for (let i = 0; i < sliderItem.length; i++) {
        const item = sliderItem[i];
        if (item.classList.contains('active')) {
            item.classList.remove('active')
            const indexItem = sliderItem.length - 1 === i ? 0 : i + 1;
            sliderItem[indexItem].classList.add('active')
            break;
        }
    }
})

document.querySelector('.slider-prev').addEventListener('click', function () {
    const sliderItem = document.querySelectorAll('.slider-item');
    for (let i = 0; i < sliderItem.length; i++) {
        const item = sliderItem[i];
        if (item.classList.contains('active')) {
            item.classList.remove('active')
            const indexItem = i === 0 ? sliderItem.length - 1 : i - 1;
            sliderItem[indexItem].classList.add('active')
            break;
        }

    }
})

document.querySelector('.slide1').addEventListener('click', function (e) {
    const sliderItem = document.querySelectorAll('.slider-item');
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
    }
    const id = e.target.attributes['data-indicator-id'].value
    sliderItem[id].classList.add('active');
}
)


document.querySelector('.slide2').addEventListener('click', function (e) {
    const sliderItem = document.querySelectorAll('.slider-item');
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
    }
    const id = e.target.attributes['data-indicator-id'].value
    sliderItem[id].classList.add('active');
}
)

document.querySelector('.slide3').addEventListener('click', function (e) {
    const sliderItem = document.querySelectorAll('.slider-item');
    for (let i = 0; i < sliderItem.length; i++) {
        sliderItem[i].classList.remove('active');
    }
    const id = e.target.attributes['data-indicator-id'].value
    sliderItem[id].classList.add('active');
}
)