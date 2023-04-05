import { render, screen } from '@testing-library/react';
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
});
