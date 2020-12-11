import React from 'react';
import './History.scss';
import { HistoryShape } from '../../shapes/HistoryShape';

export const History = ({ historyHover }) => (
  <div className="history">
    <h3 className="history__title">History</h3>
    {historyHover.map(item => (
      <div key={item} className="history__item">{item}</div>
    ))}
  </div>
);

History.propTypes = HistoryShape;
