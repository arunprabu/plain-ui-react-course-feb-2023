import { render, screen } from '@testing-library/react';
import Posts from './Posts';
import { mockFetch } from './mocks/mockFetch';

describe('Posts', () => {
  // setting up a spy
  beforeEach(() => {
    // prepare to attach spy
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
  });

  // tearing down
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('[SPYING]: renders posts properly', async () => {
    render(<Posts />);

    const postTitle = await screen.findByText('cricket match #1 -- result - lose');
    expect(postTitle).toBeInTheDocument();
  });
});
