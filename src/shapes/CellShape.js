import PropTypes from 'prop-types';

const cells = PropTypes.arrayOf(PropTypes.shape({
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
})).isRequired;

export const CellShape = {
  row: cells,
  square: cells,
  handleHover: PropTypes.func.isRequired,
}.isRequired;
