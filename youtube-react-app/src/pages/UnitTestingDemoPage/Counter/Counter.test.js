import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has counter with initial value 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');
  });

  it('has properly working increment button', () => {
    render(<Counter />);
    // fetching counter element
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');

    // find the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click event on incrementBtn
    fireEvent.click(incrementBtn);
    // fetch the counter value again
    expect(counterValue.textContent).toEqual('1');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toEqual('4');
  });

  // TODO: test whether the comp has properly working decrement button

  it('has counter with max value of 10 upon increment', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }

    // incrementing 11th time
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toEqual('10');
  });

  // it('has counter with min value of 0 upon decrement', () => {
  //   render(<Counter />);
  //   const counterValue = screen.getByTestId('counterValue');
  //   const incrementBtn = screen.getByTestId('incrementBtn');
  //   const decrementBtn = screen.getByTestId('decrementBtn');

  //   expect(counterValue.textContent).toEqual('0');
  //   fireEvent.click(decrementBtn);
  //   expect(counterValue.textContent).toEqual('0');
  //   for (let i = 0; i < 10; i++) {
  //     fireEvent.click(incrementBtn);
  //   }
  //   expect(counterValue.textContent).toEqual('10');

  //   for (let i = 0; i < 10; i++) {
  //     fireEvent.click(decrementBtn);
  //   }
  //   // decrementing 11th time
  //   fireEvent.click(decrementBtn);
  //   expect(counterValue.textContent).toEqual('0');
  // });
});
