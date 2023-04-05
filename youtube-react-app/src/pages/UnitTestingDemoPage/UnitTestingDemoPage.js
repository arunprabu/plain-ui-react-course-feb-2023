import React from 'react'
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';

const UnitTestingDemoPage = () => {
  return (
    <div>
      <h1>Unit Testing Examples</h1>
      <a
        href='https://17.reactjs.org/docs/testing.html'>Unit Testing Reference</a>

      <hr/>
      <CompanyInfo foundedYear="1994" />

      <hr/>
      <Counter />

      <hr/>
      <h4>Note: For Testing Forms -- Refer ContactUsPage.test.js</h4>
    </div>
  );
}

export default UnitTestingDemoPage
