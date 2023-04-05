import { render, screen, fireEvent } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';
import renderer from 'react-test-renderer';

describe('CompanyInfo', () => {
  // test spec
  it('has Cognizant as company name', () => {
    // act
    render(<CompanyInfo />);
    const companyName = screen.getByTestId('companyName');
    console.log(companyName.textContent);
    // assert
    expect(companyName.textContent).toBe('Company Name: Cognizant');
  });

  // testing props -- must
  it('receives foundedYear prop and displays in JSX', () => {
    render(<CompanyInfo foundedYear='2012'/>);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear).toHaveTextContent('Founded in: 2012');
  });

  // testing inline styles
  it('has foundedYear with text color green -- inline styles', () => {
    render(<CompanyInfo foundedYear='2012' />);
    const foundedYear = screen.getByTestId('foundedYear');
    // recommended to use color code in hexa or rgb -- not the color name
    expect(foundedYear).toHaveStyle('color: #00ff00');
  });

  // TODO: testing whether a button has css class btn-primary
  // the button should have text -- JOIN COGNIZANT
  // use data-testid
  // you can also have multiple expectations

  // let's find out whether the input has the right placeholder or not.

  it('has an input with `Enter Your Country Name` as placeholder', () => {
    render(<CompanyInfo />);
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name!');
    expect(countryInput).toBeTruthy();
  });

  it('displays countryName USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);
    // finding input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name!');
    console.log(countryInput.value);
    expect(countryInput.value).toBe('USA');

    // now checking whether the onChange event handler is working or not
    // setting up mock event obj
    const mockEventObj = {
      target: {
        value: 'UK'
      }
    }

    // as the comp is rendered in test runner we can't use mouse or keyboard as input devices.
    // so, let's trigger the event thru program
    fireEvent.change(countryInput, mockEventObj);
    // finally let's check if the input element is showing the change
    expect(countryInput.value).toBe('UK');

    expect(screen.getByTestId('visitWebsite')).toHaveTextContent(
      'Please visit Cognizant UK Website'
    );
  });

  // snapshot testing
  it('has right snapshot with all requirements completed', () => {
    // to take snapshot we need a react-test-renderer  // npm i react-test-renderer -D
    // taking snapshot and converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible props as well as props children
    const snapshotInJson = renderer.create(<CompanyInfo foundedYear='2006' />).toJSON();
    // let's assert with toMatchSnapshot
    expect(snapshotInJson).toMatchSnapshot();
  });
});
