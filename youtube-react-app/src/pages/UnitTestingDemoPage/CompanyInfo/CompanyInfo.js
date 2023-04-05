import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CompanyInfo = ({ foundedYear }) => {
  const [countryName, setCountryName] = useState('USA');

  return (
    <div>
      <h2>Company Info! | Testing Props, Styles, Placeholder, Events, States and Snapshot</h2>
      <h3 data-testid='companyName'>Company Name: Cognizant</h3>
      <p
        data-testid='foundedYear'
        style={{
          color: 'rgb(0, 255, 0)',
          backgroundColor: 'black'
        }}>
        Founded in: {foundedYear}
      </p>
      <button className='btn btn-primary'>JOIN COGNIZANT</button>
      <hr />

      <input
        type='text'
        placeholder='Enter Your Country Name!'
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid='visitWebsite'>Please visit Cognizant {countryName} Website</p>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string
};

export default CompanyInfo;
