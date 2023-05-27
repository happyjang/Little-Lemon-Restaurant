import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


// const initializeTimes = {availableTimes:  ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}

// test('Renders the BookingForm heading', () => {
//   render(<BookingForm times={initializeTimes} />);
//   const headingElement = screen.getByText("Choose a date");
//     expect(headingElement).toBeInTheDocument();

// });

// test('Check the initializeTimes', () => {
//   render(<BookingForm times={initializeTimes} />);
//   const checkInitial = screen.getByText("17:00");
//     expect(checkInitial).toBeInTheDocument();

// });

test('Renders heading in Header', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();


  const checkButton = screen.getByRole("button");
  fireEvent.click(checkButton);


})

test('Check the initializeTimes', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const checkInitial = screen.getByText("17:00");
  expect(checkInitial).toBeInTheDocument();
})











