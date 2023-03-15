import React, { Component } from 'react';

export class ContactUsPage extends Component {
  state = {
    fullName: '',
    email: '',
    phone: '',
    query: ''
  };

  searchInput = React.createRef();

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    console.log('Submitted');
    event.preventDefault(); // stopping the page refresh
    // read the form data
    console.log(this.state);
    // send the above form data to the back end
    // 1. What's the Backend REST API URL? https://jsonplaceholder.typicode.com/users
    // 2. What's the Http Method? POST
    // 3. What's the REST API Client Tool? Axios or Fetch

    // get the resp from the backend and display it it UI
  };

  handleSearch = (event) => {
    event.preventDefault(); // stopping the page refresh
    console.log(this.searchInput.current.value);
  }

  render() {
    return (
      <>
        <div className='row justify-content-center'>
          <h1>Contact Us Page</h1>
          <h2>Controlled Components Demo in form inputs</h2>
          <div className='col-md-4'>
            <form onSubmit={this.handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='nameInput' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='fullName'
                  id='nameInput'
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='emailInput' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  id='emailInput'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='phoneInput' className='form-label'>
                  Phone
                </label>
                <input
                  type='tel'
                  className='form-control'
                  name='phone'
                  id='phoneInput'
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='queryInput' className='form-label'>
                  Query / Suggestions / Feedback
                </label>
                <textarea
                  className='form-control'
                  id='queryInput'
                  name='query'
                  rows='4'
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Send
              </button>
            </form>
          </div>
        </div>
        <div className='row justify-content-center'>
          <h2>Uncontrolled Components Demo in form inputs</h2>
          <div className='col-md-4'>
            <form onSubmit={this.handleSearch}>
              <div className='mb-3'>
                <label htmlFor='searchInput' className='form-label'>
                  Search Query:
                </label>
                <input
                  type='text'
                  id='searchInput'
                  placeholder='Enter Search Query'
                  className='form-control'
                  ref={this.searchInput}
                />
              </div>
              <input type='submit' value='Search' className='btn btn-info' />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUsPage;
