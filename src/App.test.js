import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

const initializeTimes = {availableTimes:  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}

test('Renders the BookingForm heading', () => {
  render(<BookingForm times={initializeTimes} />);
  const headingElement = screen.getByText("Choose Date");
    expect(headingElement).toBeInTheDocument();
  
});

test('Check the initializeTimes', () => {
  render(<BookingForm times={initializeTimes} />);
  const checkInitial = screen.getByText("17:00");
    expect(checkInitial).toBeInTheDocument();
  
});



