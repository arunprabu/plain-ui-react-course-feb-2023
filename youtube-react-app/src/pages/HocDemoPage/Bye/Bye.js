import PropTypes from 'prop-types';

const Bye = ({ name }) => {
  return <h2>Bye, {name}!</h2>;
};
Bye.propTypes = {
  name: PropTypes.string
};

export default Bye;
