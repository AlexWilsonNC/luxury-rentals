const card = document.querySelectorAll('.card');
let imgOverlay = document.getElementsByClassName('image-overlay');
card.forEach(function (el) {
    el.addEventListener("mouseover", function () {
        const parent = el.querySelector('.image');
        const imgOverlay = parent.querySelector('.image-overlay');
        imgOverlay.style.opacity = '1';
    })
    el.addEventListener("mouseleave", function () {
        const parent = el.querySelector('.image');
        const imgOverlay = parent.querySelector('.image-overlay');
        imgOverlay.style.opacity = '0';
    })
});