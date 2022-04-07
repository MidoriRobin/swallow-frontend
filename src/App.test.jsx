import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const linkElement = screen.getAllByRole('navigation').find((element) => {
    element.classList.contains('nav-wrapper');
    return element;
  });
  expect(linkElement).toBeInTheDocument();
});
