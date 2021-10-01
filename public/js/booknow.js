// function calculateTotal() {
//     const daysEntered = document.getElementById('numder-days').value;
//     const total = 0; 
//     for (let i = 1; i < total.length; i++) {
//         const carPrice = document.getElementById('_');
//         // Where is carPrice coming from?
//         total += parseInt(carPrice.value) * parseInt(daysEntered);
//     }
// }

// document.getElementById('total-purchase').innerHTML = 'Rental Total $' + total;

const confirmBtnEl = document.querySelector('.confirm-btn');

const bookNowFormHandler = async (event) => {
    event.preventDefault();
  
    const location_id = document.querySelector('#location-selector').value.trim();
    const car_id = document.querySelector('#vehicle-selector').value.trim();
    const start_date = new Date();
    const end_date = new Date(2021, 9, 2);
  
    console.log(location_id, car_id, start_date, end_date);
    if (location_id && car_id && start_date && end_date) {
      const response = await fetch('/api/book-now', {
        method: 'POST',
        body: JSON.stringify({ location_id, car_id, start_date, end_date }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to book');
      }
    }
  };

confirmBtnEl.addEventListener('click', bookNowFormHandler);