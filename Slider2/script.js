
function updateTime() {
    const sliderItem = document.querySelectorAll('.slider-item') = new Date().toTimeString();
    for (let i = 0; i < sliderItem.length; i++) {
        const item = sliderItem[i];
        if (item.classList.contains('active')) {
            item.classList.remove('active')
            const indexItem = sliderItem.length - 1 === i ? 0 : i + 1;
            sliderItem[indexItem].classList.add('active')
           break;     
        }   
        setInterval(updateTime, 2000);   
    }
}




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