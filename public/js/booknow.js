const confirmBtnEl = document.querySelector('.confirm-btn');
const locationSelector = document.querySelector('#location-selector');
const carSelector = document.querySelector('#vehicle-selector');

const defaultSelector = () => {
  const city = window.location.pathname.split('/')[2];
  const car = window.location.pathname.split('/')[3];

  console.log(city, car);
  for (let i, j = 0; i = locationSelector.options[j]; j++) {
    if (i.value == city) {
      locationSelector.selectedIndex = j;
      break;
    };
  };
  for (let i, j = 0; i = carSelector.options[j]; j++) {
    if (i.value == car) {
      carSelector.selectedIndex = j;
      break;
    };
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

const bookNowFormHandler = async (event) => {
  event.preventDefault();

  const location_id = locationSelector.value;
  const car_id = carSelector.value;
  const start_date = new Date();
  const end_date = new Date(2021, 9, 6);

  console.log(location_id, car_id, start_date, end_date);
  if (location_id && car_id && start_date && end_date) {
    const response = await fetch('/api/book-now', {
      method: 'POST',
      body: JSON.stringify({ location_id, car_id, start_date, end_date }),
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
confirmBtnEl.addEventListener('click', bookNowFormHandler);
locationSelector.addEventListener('change', selectCityHandler);