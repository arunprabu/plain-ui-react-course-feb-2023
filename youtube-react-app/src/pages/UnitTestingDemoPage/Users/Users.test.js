import { render, screen } from '@testing-library/react';
import Users from './Users';
import { fetchApi } from '../../../utils/fetchApi';

// setting up mock for fetchApi
// mocking a module with automocked version when needed
jest.mock('../../../utils/fetchApi');

describe('Users', () => {
  /* The following is NOT RECOMMENDED -- This is known as anti-pattern */
  /*
  it('fetches userList via rest api call', async () => {
    render(<Users />);
    const nameElement = await screen.findByText('Leanne Graham');
    expect(nameElement).toBeInTheDocument();
  });
  */

  /* 3 Disadvantages / Challenges in testing the API calls with above approach
    1. Time consuming
    2. Data Inconsistency (no guarantee for the sample data like Leanne Graham to be available)
    3. Availability of REST API ( may be down or still in dev)
  */

  /* The solution for the above Problem is: Mocking REST API Data */
  // NOTE: The above test spec should be removed. Only then the following test can tested
  // POSITIVE TEST SPEC
  it('[MOCKING]: fetches userList via rest api call', async() => {
    // 1. prepare the mock data for the comp
    const mockUserList = [
      {
        id: 1,
        name: 'Kevin',
        email: 'k@l.com'
      },
      {
        id: 2,
        name: 'Steve',
        email: 's@t.com'
      }
    ];
    // 2. Resolve the Http req with the above mock data as successful res
    // 2.1 setup mock for fetchApi (see before describe block)
    // 2.2 resolve the req
    fetchApi.mockResolvedValue(mockUserList);
    // 3. Render the comp
    render(<Users />);
    // 4. Assert
    const nameElement = await screen.findByText('Kevin');
    expect(nameElement).toBeInTheDocument();
  });

  // NEGATIVE SPEC
  it('[MOCKING]: renders error properly during API call', async() => {
    // 1. prepare the mock error for the comp
    const error = 'Error occurred';
    // 2. Reject the Http req with the above error
    fetchApi.mockRejectedValue(error);
    // 3. Render the comp
    render(<Users />);
    // 4. Assert
    const errorMsg = await screen.findByText('Some Error Occured. Try again later.');
    expect(errorMsg).toBeInTheDocument();
  });
});
