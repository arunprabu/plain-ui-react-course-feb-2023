// Test Pattern: AAA (Arrange, Act, Assert)
// Arrange
import { render, screen } from '@testing-library/react';
import App from './App'; // sample taken for testing

/* test case */
test('App comp has Success text', () => {
  // Act
  // writing the logic to test whether the app comp has success text or not
  render(<App />); // Render into a container which is appended to document.body.
  const successText = screen.getByText('Success!'); // DOM Querying

  // Assert
  expect(successText).toBeInTheDocument();
});

