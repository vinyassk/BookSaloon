# 💇‍♀️ SalonBook – Online Salon Appointment System

SalonBook is a simple, client-side web application that allows users to browse salon services, book appointments, and manage their appointment history — all stored locally in the browser.  
It also supports a persistent dark mode across pages.

This project is suitable for mini projects, academic submissions, and frontend practice. No backend or database is required.

---

## 🚀 Features

- Multi-page layout:
  - Home
  - Services
  - Book Appointment
  - Appointment History
- Service catalog with images and pricing
- One-click “Book Now” from services into the booking form
- Appointment booking with date and time-slot selection
- Local storage of appointments in the browser (no backend required)
- Appointment history with:
  - Cancel appointment
  - Reschedule (modal with new date/time)
  - Book again (pre-fills booking form)
- Dark / Light theme toggle persisted across pages
- Responsive layout using Bootstrap
- Simple asset management helper script

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Bootstrap 5  
- Bootstrap Icons  
- Browser LocalStorage  

---

## 🧭 Pages Overview

### 🏠 Home (index.html)
- Landing page with introduction
- Call-to-action buttons for booking
- Highlights key features of the system

### 💆 Services (services.html)
- Displays available salon services
- Shows images and pricing
- “Book Now” button redirects to booking page with selected service

### 📅 Book Appointment (booking.html)
- Appointment booking form
- Select service, date, and time slot
- Saves appointment details to LocalStorage

### 📜 Appointment History (history.html)
- Displays all booked appointments
- Cancel appointments
- Reschedule appointments using modal
- Book again using pre-filled form data

---

## 🌙 Dark Mode Support

- Toggle between Light and Dark themes
- Theme preference stored in LocalStorage
- Theme remains consistent across all pages

---

## ▶️ How to Run the Project

1. Download or clone the repository:
   ```bash
   git clone https://github.com/vinyassk/SalonBook.git
