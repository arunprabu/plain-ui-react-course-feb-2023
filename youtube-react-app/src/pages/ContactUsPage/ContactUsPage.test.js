import { fireEvent, render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage';

describe('ContactUsPage', () => {
  it('has proper contact form', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Phone');
    const queryInput = screen.getByLabelText('Query / Suggestions / Feedback');
    const submitBtn = screen.getByTestId('submitBtn');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(queryInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });

  // nagative spec
  it('has the submit button in disabled state when fullName is empty', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const submitBtn = screen.getByTestId('submitBtn');

    // mock event object
    const mockEvent = {
      // preparing the mock event obj with target.value
      target: {
        value: ''
      }
    }

    fireEvent.change(nameInput, mockEvent);
    expect(submitBtn).toHaveAttribute('disabled');
  });

  // positive spec
  it('has the submit button in enabled state when fullName is not empty', () => {
    render(<ContactUsPage />);
    const nameInput = screen.getByLabelText('Name');
    const submitBtn = screen.getByTestId('submitBtn');

    // mock event object
    const mockEvent = {
      // preparing the mock event obj with target.value
      target: {
        value: 'John'
      }
    };

    fireEvent.change(nameInput, mockEvent);
    expect(submitBtn).not.toHaveAttribute('disabled');
  });

  // TODO: trigger the submit btn click and check whether success msg is present or not
});
