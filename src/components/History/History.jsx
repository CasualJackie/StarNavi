import React, { memo } from 'react';
import './History.scss';
import { HistoryShape } from './HistoryShape';

export const History = memo(({ historyHover }) => (
  <div className="history">
    <h3 className="history__title">History</h3>
    {historyHover.map(({ point, id }) => (
      <div key={id} className="history__item">{point}</div>
    ))}
  </div>
));

History.propTypes = HistoryShape;
