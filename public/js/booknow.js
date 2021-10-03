const confirmBtnEl = document.querySelector('.confirm-btn');
const locationSelector = document.querySelector('#location-selector');
const carSelector = document.querySelector('#vehicle-selector');

const charlotteCars = [];
const ferrari = [];

const defaultSelector = () => {
  const city = window.location.pathname.split('/')[2];
  const car = window.location.pathname.split('/')[3];

  console.log(city, car);
  for (var i, j = 0; i = locationSelector.options[j]; j++) {
    if (i.value == city) {
      locationSelector.selectedIndex = j;
      break;
    };
  };
  for (var i, j = 0; i = carSelector.options[j]; j++) {
    if (i.value == car) {
      carSelector.selectedIndex = j;
      break;
    };
  };
};

const selectCityHandler = () => {
  console.log(locationSelector.value);
  if(parseInt(locationSelector.value) === 0) {
    console.log("set all to display");
    return;
  };

  // fetch request to get car ids by location id
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