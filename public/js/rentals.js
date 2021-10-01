const bookBtnEl = document.querySelectorAll('.book-btn');

bookBtnEl.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();

        var cityId = window.location.pathname.split('/')[2];
        var carId = event.target.id.split('-')[1];
        console.log(carId);

        document.location.replace('/book-now/' + cityId + '/' + carId);
    });
});