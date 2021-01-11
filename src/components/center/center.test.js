import { render, screen } from '@testing-library/react';
import center from './center';

test('renders learn react link', () => {
  render(<center />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
