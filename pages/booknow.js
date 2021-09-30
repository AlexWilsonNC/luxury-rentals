function calculateTotal() {
    const daysEntered = document.getElementById('numder-days').value;
    const total = 0; 
    for (let i = 1; i < total.length; i++) {
        const carPrice = document.getElementById('_');
        // Where is carPrice coming from?
        total += parseInt(carPrice.value) * parseInt(daysEntered);
    }
}

document.getElementById('total-purchase').innerHTML = 'Rental Total $' + total;