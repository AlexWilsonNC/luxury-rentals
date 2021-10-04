const elem = document.getElementById('date-picker');
const rangepicker = new DateRangePicker(elem, {
  // ...options
});

function getRentalPeriod(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  const diff = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
  return diff + 1;
};