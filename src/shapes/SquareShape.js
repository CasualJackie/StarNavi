import PropTypes from 'prop-types';

export const SquareShape = {
  field: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  setHistoryHover: PropTypes.func.isRequired,
}.isRequired;
