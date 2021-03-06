const bookBtnEl = document.querySelectorAll('.card');

bookBtnEl.forEach(function (el) {
    el.addEventListener('click', function (event) {
        event.preventDefault();

        if (window.location.pathname.split('/')[2]) {
            var cityId = window.location.pathname.split('/')[2];
        } else {
            var cityId = 0;
        }

        var carId = event.target.closest('a').id.split('-')[1];
        console.log(carId);

        document.location.replace('/book-now/' + cityId + '/' + carId);
    });
});