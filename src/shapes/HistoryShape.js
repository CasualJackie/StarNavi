import PropTypes from 'prop-types';

export const HistoryShape = {
  historyHover: PropTypes.arrayOf(PropTypes.shape({
    point: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}.isRequired;
