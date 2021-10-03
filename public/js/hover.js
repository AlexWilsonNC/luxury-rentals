let card = document.getElementsByClassName('card');
let imgOverlay = document.getElementsByClassName('image-overlay');

card.onmouseover = () => {
    imgOverlay.style.opacity = '1';
}

card.onmouseleave = () => {
    imgOverlay.style.opacity = '0';
}

card.forEach(onmouseover);
card.forEach(onmouseleave);
