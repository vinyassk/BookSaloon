// Booking page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Preselect service if passed from services or history
    const params = new URLSearchParams(window.location.search);
    const preselectedService = params.get('service');
    if (preselectedService) {
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.value = preselectedService;
        }
    }

    const bookingForm = document.getElementById('bookingForm');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const timeSlot = document.getElementById('timeSlot').value;

        const appointment = {
            id: Date.now(),
            service: service,
            date: date,
            timeSlot: timeSlot,
            status: 'booked'
        };

        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        // Show success toast
        const toast = new bootstrap.Toast(document.getElementById('successToast'));
        toast.show();

        // Redirect after a short delay
        setTimeout(() => {
            window.location.href = 'history.html';
        }, 2000);
    });
});