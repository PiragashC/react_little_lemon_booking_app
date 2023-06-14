import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './bookingForm';

describe('BookingForm', () => {
  test('renders form inputs', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Time:')).toBeInTheDocument();
  });

  test('submits form data', () => {
    render(<BookingForm />);
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const dateInput = screen.getByLabelText('Date:');
    const timeInput = screen.getByLabelText('Time:');
    const submitButton = screen.getByRole('button', { name: 'Book Table' });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(dateInput, { target: { value: '2023-06-15' } });
    fireEvent.change(timeInput, { target: { value: '18:30' } });
    fireEvent.click(submitButton);

    // Add your form submission assertion here
  });
});
