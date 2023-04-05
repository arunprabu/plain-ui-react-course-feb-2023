// TEST PATTERN: AAA
import { render, screen } from '@testing-library/react';
// Let's load the sample
import UnitTestingDemoPage from './UnitTestingDemoPage';

// TEST SUITE = group of related test cases
describe('UnitTestingDemoPage', () => {
  // test case or test spec
  it("has heading with text 'Unit Testing Examples'", () => {
    // Act
    render(<UnitTestingDemoPage />);
    const heading = screen.getByText('Unit Testing Examples');
    // Assert
    expect(heading).toBeInTheDocument();
  });

  it("has a link with text 'Unit Testing Reference'", () => {
    render(<UnitTestingDemoPage />);
    // using regex to find text with case insensitive
    const link = screen.getByText(/unit testing reference/i);

    expect(link).toBeTruthy();
  });
});

// findAllBy, findBy
// getAllBy, getBy
// queryAllBy, queryBy
