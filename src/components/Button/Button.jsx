import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
