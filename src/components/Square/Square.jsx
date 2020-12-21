import React, { memo, useCallback } from 'react';
import './Square.scss';
import { v4 as uuidv4 } from 'uuid';
import { SquareShape } from '../../shapes/SquareShape';
import { Cell } from '../Cell/Cell';

export const Square = memo(({ field, setHistoryHover }) => {
  const handleHover = useCallback((event) => {
    const { place } = event.target.dataset;

    if (event.type === 'focus') {
      return;
    }

    const coordinates = {
      point: place,
      id: uuidv4(),
    };

    setHistoryHover(previous => ([
      coordinates,
      ...previous,
    ]));
  }, []);

  return (
    <div className="square">
      {field.map(row => (
        <div key={row.id} className="square__row">
          {field.map((square, index) => {
            const key = row.id + index;

            return (
              <Cell
                key={key}
                row={row}
                square={square}
                handleHover={handleHover}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
});

Square.propTypes = SquareShape;
