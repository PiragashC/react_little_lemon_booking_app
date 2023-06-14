import React, { useState } from 'react';
import './bookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    if (!name || !email || !date || !time) {
      setError('Please fill in all the fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!validateDateTime(date, time)) {
      setError('Please select a future date and time');
      return;
    }

    // Form is valid, proceed with form submission logic here
    setError('');
    setSuccessMessage('Table booked successfully!');
    setName('')
    setEmail('')
    setDate('')
    setTime('')

    // Handle form submission logic, e.g., making API calls to validate the booking
  };
  

  const validateEmail = (value) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validateDateTime = (selectedDate, selectedTime) => {
    // Get the current date and time
    const currentDate = new Date();
    const currentDateTime = currentDate.toISOString();

    // Concatenate the selected date and time
    const selectedDateTime = `${selectedDate}T${selectedTime}:00`;

    // Compare the selected date and time with the current date and time
    return selectedDateTime > currentDateTime;
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
