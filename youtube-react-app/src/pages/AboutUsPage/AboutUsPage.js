import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PageContext } from '../../contexts/PageContext';

const AboutUsPage = (props) => {
  // console.log(props);
  // console.log(props.test);

  const userStatus = useContext(PageContext);
  console.log(userStatus);

  // TODO: learn about nested /child routing

  return (
    <div>
      {/* FIXME: enable the following line to see error boundary in action */}
      {/* <h2>AboutUsPage {props.test()}</h2> */}
      {/* TODO: Nested Routing */}
      <h1>Nested Routing comes here</h1>

      <hr/>
      <h2>Data Received via Page Context using Context API</h2>
      <p>Logged In Status: {userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>
    </div>
  );
};

AboutUsPage.propTypes = {
  test: PropTypes.func
};

export default AboutUsPage;
