import { render, screen } from '@testing-library/react';
import bottom from './bottom';

test('renders learn react link', () => {
  render(<bottom />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
