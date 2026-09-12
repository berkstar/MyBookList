import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page and authentication links', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'BOOKLAB' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/login');
  expect(screen.getByRole('link', { name: 'SignUp' })).toHaveAttribute('href', '/register');
});
