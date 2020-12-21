import React from 'react';
import './Cell.scss';
import { CellShape } from '../../shapes/CellShape';

export const Cell = ({ row, square, handleHover }) => (
  <button
    className="cell"
    type="button"
    data-place={`row ${row.value} col ${square.value}`}
    onMouseOver={handleHover}
    onFocus={handleHover}
  />
);

Cell.propTypes = CellShape;
