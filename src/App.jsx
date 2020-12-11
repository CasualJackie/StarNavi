import React, { useState, useEffect } from 'react';
import './App.scss';
import { Square } from './components/Square/Square';
import { History } from './components/History/History';

export const App = () => {
  const [field, setField] = useState([]);
  const [historyHover, setHistoryHover] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const number = 5;
      const squares = [];

      for (let i = 1; i <= number; i += 1) {
        squares.push(i);
      }

      setField(squares);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <Square
        field={field}
        historyHover={historyHover}
        setHistoryHover={setHistoryHover}
      />

      <History historyHover={historyHover} />
    </div>
  );
};
