//import Datepicker from './Datepicker.js';


//var daysInMonth = ["1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31"];
//var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const elem = document.getElementById('foo');
const rangepicker = new DateRangePicker(elem, {
  // ...options
});


//const elem = document.querySelector('input[name="calendar"]');
//const datepicker = new Datepicker(elem, {
//Date: "mm/dd/yyy"
//}); 

function getRentalPeriod(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  const diff = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
  return diff + 1;
}
//function getDaysInMonth(month, year) {

//}

// does something when a date is clicked
//reservation_window.frmCalendar.submit();
//function dateClicked(day, month, year) {
  //  document.forms.calendar.date.value = day + '/' + month + '/' + year;

//}

/* var settings = {
  DateTimeShow: true,
  NavShow: true,
  NavVertical: false,
  NavShow: true,
  NavLocation: '',
  EventClick: '',
  DateTimeFormat: 'mmm, yyyy',
  DatetimeLocation: '',
  EventTargetWholeDay: true,
  DisabledDays: [],
  ModelChange: model
}



*/