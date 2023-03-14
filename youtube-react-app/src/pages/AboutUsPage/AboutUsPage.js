import React from 'react'
import PropTypes from 'prop-types';

const AboutUsPage = (props) => {
  console.log(props);
  console.log(props.test);

  // TODO: learn about nested /child routing

  return (
    <div>
      {/* FIXME: enable the following line to see error boundary in action */}
      {/* <h2>AboutUsPage {props.test()}</h2> */}
      {/* TODO: Nested Routing */}
      <h1>Nested Routing comes here</h1>
    </div>
  );
}

AboutUsPage.propTypes = {
  test: PropTypes.func
};

export default AboutUsPage
