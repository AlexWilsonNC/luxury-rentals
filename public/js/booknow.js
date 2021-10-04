const confirmBtnEl = document.querySelector('.confirm-btn');
const locationSelector = document.querySelector('#location-selector');
const carSelector = document.querySelector('#vehicle-selector');
const imgEl = document.querySelector('#img-right');
const priceEl = document.querySelector('#price-generator');
const totalEl = document.querySelector('#total-purchase');
const startDateEl = document.querySelector('#start-date');
const endDateEl = document.querySelector('#end-date');

const defaultSelector = () => {
  const city = window.location.pathname.split('/')[2];
  let car = window.location.pathname.split('/')[3];

  for (let i, j = 0; i = locationSelector.options[j]; j++) {
    if (i.value == city) {
      locationSelector.selectedIndex = j;
      break;
    };
  };

  if (car === '0') {
    fetch('/api/car')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let available = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].locations.length === 4) {
            available.push(data[i].id);
          }
        };
        car = available[Math.floor(Math.random() * available.length)];
        for (let i, j = 0; i = carSelector.options[j]; j++) {
          if (i.value == car) {
            carSelector.selectedIndex = j;
            break;
          };
        };

        selectCarHandler();
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    for (let i, j = 0; i = carSelector.options[j]; j++) {
      if (i.value == car) {
        carSelector.selectedIndex = j;
        break;
      };
    };
  }
};

const dateChangeHandler = () => {
  if (startDateEl.value && endDateEl.value) {
    const dates = rangepicker.getDates();
    const rentalPeriod = getRentalPeriod(dates[0], dates[1]);

    const price = priceEl.getAttribute('value');
    if (price) {
      const totalPrice = price * rentalPeriod;
      totalEl.setAttribute('value', totalPrice);
      totalEl.textContent = `Total: \$${totalPrice.toLocaleString('en-US')} for ${rentalPeriod} Day(s)`;
    }
  };
};

const selectCityHandler = () => {
  const locId = locationSelector.value;
  if (locId === '0') {
    for (let i = 1; i < carSelector.options.length; i++) {
      let selected = document.querySelector(`#car-${carSelector.options[i].value}`);
      selected.classList.remove('hidden');;
    };
    return;
  };

  fetch(`/api/location/${locId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      let stock = [];
      for (let i = 0; i < data.cars.length; i++) {
        stock.push(data.cars[i].id);
      };

      for (let j = 1; j < carSelector.options.length; j++) {
        let selected = document.querySelector(`#car-${carSelector.options[j].value}`);
        if (!stock.includes(parseInt(carSelector.options[j].value))) {
          selected.classList.add('hidden');
        } else {
          selected.classList.remove('hidden');
        }
      };

      if (carSelector.options[carSelector.selectedIndex].classList.contains('hidden')) {
        carSelector.selectedIndex = 0;
      };

    })
    .catch(function (error) {
      console.error(error);
    });

};

const selectCarHandler = () => {
  const carId = carSelector.value;
  if (carId === '0') {
    imgEl.removeAttribute('src');
    imgEl.removeAttribute('alt');

    priceEl.removeAttribute('value');
    totalEl.removeAttribute('value');

    priceEl.textContent = '';
    totalEl.textContent = '';

    for (let i = 1; i < locationSelector.options.length; i++) {
      let selected = document.querySelector(`#city-${locationSelector.options[i].value}`);
      selected.classList.remove('hidden');;
    };
    return;
  };

  fetch(`/api/car/${carId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      imgEl.setAttribute('src', data.image);
      imgEl.setAttribute('alt', data.make + ' ' + data.model);

      let rentalPeriod = 1;
      const dates = rangepicker.getDates();
      if (dates[0] && dates[1]) {
        rentalPeriod = getRentalPeriod(dates[0], dates[1]);
      }

      priceEl.setAttribute('value', data.price);
      priceEl.textContent = `\$${data.price.toLocaleString('en-US')} per Day`;
      const totalPrice = data.price * rentalPeriod;
      totalEl.setAttribute('value', totalPrice);
      totalEl.textContent = `Total: \$${totalPrice.toLocaleString('en-US')} for ${rentalPeriod} Day(s)`;

      let availability = [];
      for (let i = 0; i < data.locations.length; i++) {
        availability.push(data.locations[i].id);
      };

      for (let j = 1; j < locationSelector.options.length; j++) {
        let selected = document.querySelector(`#city-${locationSelector.options[j].value}`);
        if (!availability.includes(parseInt(locationSelector.options[j].value))) {
          selected.classList.add('hidden');
        } else {
          selected.classList.remove('hidden');
        }
      };

    })
    .catch(function (error) {
      console.error(error);
    });

};

const bookNowFormHandler = async (event) => {
  event.preventDefault();

  const location_id = locationSelector.value;
  const car_id = carSelector.value;
  const dates = rangepicker.getDates();
  const start_date = dates[0];
  const end_date = dates[1];
  const rental_period = getRentalPeriod(start_date, end_date);
  const total_price = totalEl.getAttribute('value');

  console.log(location_id, car_id, start_date, end_date, rental_period, total_price);
  if (location_id && car_id && start_date && end_date && rental_period && total_price) {
    const response = await fetch('/api/book-now', {
      method: 'POST',
      body: JSON.stringify({ location_id, car_id, start_date, end_date, rental_period, total_price }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/account');
    } else {
      alert('Failed to book');
    }
  }
};

defaultSelector();
selectCityHandler();
selectCarHandler();
locationSelector.addEventListener('change', selectCityHandler);
carSelector.addEventListener('change', selectCarHandler);
confirmBtnEl.addEventListener('click', bookNowFormHandler);
startDateEl.addEventListener('changeDate', dateChangeHandler);
endDateEl.addEventListener('changeDate', dateChangeHandler);