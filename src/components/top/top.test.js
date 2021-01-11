import { render, screen } from '@testing-library/react';
import top from './top';

test('renders learn react link', () => {
  render(<top />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
