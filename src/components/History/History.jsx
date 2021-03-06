import React, { memo } from 'react';
import './History.scss';
import { HistoryShape } from '../../shapes/HistoryShape';

export const History = memo(({ historyHover }) => (
  <div className="history">
    <h3 className="history__title">History</h3>

    <div className="history__scroll">
      {historyHover.map(({ point, id }) => (
        <div key={id} className="history__item">{point}</div>
      ))}
    </div>
  </div>
));

History.propTypes = HistoryShape;
