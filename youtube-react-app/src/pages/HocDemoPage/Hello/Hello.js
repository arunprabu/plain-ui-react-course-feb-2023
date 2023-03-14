import PropTypes from 'prop-types';

const Hello = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};
Hello.propTypes = {
  name: PropTypes.string
};

export default Hello;
