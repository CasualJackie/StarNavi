import React, { memo, useCallback } from 'react';
import './Square.scss';
import { v4 as uuidv4 } from 'uuid';
import { SquareShape } from './SquareShape';

export const Square = memo(({ field, historyHover, setHistoryHover }) => {
  const handleHover = useCallback((event) => {
    const { place } = event.target.dataset;

    if (event.type === 'focus') {
      return;
    }

    const coordinates = {
      point: place,
      id: uuidv4(),
    };

    setHistoryHover([...historyHover, coordinates]);
  }, [historyHover]);

  return (
    <div className="square">
      {field.map(row => (
        <div key={row.id} className="square__row">
          {field.map((square, index) => {
            const key = row.id + index;

            return (
              <button
                className="square__item"
                key={key}
                type="button"
                data-place={`row ${row.value} col ${square.value}`}
                onMouseOver={handleHover}
                onFocus={handleHover}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
});

Square.propTypes = SquareShape;
