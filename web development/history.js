// History page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    loadAppointments();

    // helper toast instance for notifications
    const toastElement = document.getElementById('historyToast');
    if (toastElement) {
        window.historyToast = new bootstrap.Toast(toastElement);
    }

    const rescheduleForm = document.getElementById('rescheduleForm');
    rescheduleForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const id = document.getElementById('rescheduleId').value;
        const newDate = document.getElementById('rescheduleDate').value;
        const newTime = document.getElementById('rescheduleTime').value;

        let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const index = appointments.findIndex(app => app.id == id);
        if (index !== -1) {
            appointments[index].date = newDate;
            appointments[index].timeSlot = newTime;
            localStorage.setItem('appointments', JSON.stringify(appointments));
            loadAppointments();
            const modal = bootstrap.Modal.getInstance(document.getElementById('rescheduleModal'));
            modal.hide();
            showHistoryToast('Appointment rescheduled successfully');
        }
    });
});

function loadAppointments() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';

    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<p class="text-center">No appointments found.</p>';
        return;
    }

    appointments.forEach(app => {
        const card = document.createElement('div');
        card.className = 'col-md-6 mb-4';
        card.innerHTML = `
            <div class="appointment-card h-100">
                <h5>${app.service}</h5>
                <p>Date: ${app.date}</p>
                <p>Time: ${app.timeSlot}</p>
                <p>Status: ${app.status}</p>
                <div class="mt-3 d-flex flex-wrap gap-2">
                    <button class="btn btn-primary btn-sm" onclick="bookAgain('${app.service}')">Book Again</button>
                    <button class="btn btn-warning btn-sm" onclick="rescheduleAppointment(${app.id}, '${app.date}', '${app.timeSlot}')">Reschedule</button>
                    <button class="btn btn-danger btn-sm ms-auto" onclick="cancelAppointment(${app.id})">Cancel</button>
                </div>
            </div>
        `;
        appointmentsList.appendChild(card);
    });
}

function cancelAppointment(id) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const updated = appointments.filter(app => app.id != id);
    localStorage.setItem('appointments', JSON.stringify(updated));
    loadAppointments();
    showHistoryToast('Appointment deleted');
}

function rescheduleAppointment(id, currentDate, currentTime) {
    document.getElementById('rescheduleId').value = id;
    document.getElementById('rescheduleDate').value = currentDate;
    document.getElementById('rescheduleTime').value = currentTime;
    const modal = new bootstrap.Modal(document.getElementById('rescheduleModal'));
    modal.show();
}

function bookAgain(service) {
    const params = new URLSearchParams({ service });
    window.location.href = 'booking.html?' + params.toString();
}

function showHistoryToast(message) {
    const toastElement = document.getElementById('historyToast');
    if (!toastElement) return;
    toastElement.querySelector('.toast-body').textContent = message;
    const toast = window.historyToast || new bootstrap.Toast(toastElement);
    toast.show();
}