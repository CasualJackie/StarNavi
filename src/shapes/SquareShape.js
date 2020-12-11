import PropTypes from 'prop-types';

export const SquareShape = {
  field: PropTypes.arrayOf(PropTypes.number).isRequired,
  historyHover: PropTypes.arrayOf(PropTypes.string).isRequired,
  setHistoryHover: PropTypes.func.isRequired,
}.isRequired;
