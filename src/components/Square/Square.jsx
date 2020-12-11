import React, { memo, useCallback } from 'react';
import './Square.scss';
import { SquareShape } from './SquareShape';

export const Square = memo(({ field, historyHover, setHistoryHover }) => {
  const handleHover = useCallback((event) => {
    const { target } = event;

    setHistoryHover([...historyHover, target.dataset.place]);
  }, [historyHover]);

  return (
    <div className="square">
      {field.map(row => (
        <div key={row} className="square__row">
          {field.map(square => (
            // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
            <button
              className="square__item"
              key={row + square}
              type="button"
              data-place={`row ${row} col ${square}`}
              onMouseOver={handleHover}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

Square.propTypes = SquareShape;
