import React, { useState } from 'react';
import './App.scss';
import { ModeSelection } from './components/ModeSelection/ModeSelection';
import { Square } from './components/Square/Square';
import { History } from './components/History/History';

export const App = () => {
  const [field, setField] = useState([]);
  const [historyHover, setHistoryHover] = useState([]);
  const [openSquare, setOpenSquare] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  return (
    <div className="container">
      <ModeSelection
        setField={setField}
        setOpenSquare={setOpenSquare}
        setHistoryHover={setHistoryHover}
        setLoadingError={setLoadingError}
      />

      {loadingError && (
        <div className="container__error">
          Failed to load data. Reload the page!
        </div>
      )}

      {openSquare && (
        <div className="container__main">
          <Square
            field={field}
            historyHover={historyHover}
            setHistoryHover={setHistoryHover}
          />

          <History historyHover={historyHover} />
        </div>
      )}
    </div>
  );
};
