import PropTypes from 'prop-types';

export const ModeSelectionShape = {
  setField: PropTypes.func.isRequired,
  setOpenSquare: PropTypes.func.isRequired,
  setHistoryHover: PropTypes.func.isRequired,
  setLoadingError: PropTypes.func.isRequired,
}.isRequired;
