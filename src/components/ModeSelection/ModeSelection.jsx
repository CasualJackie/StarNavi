import React, { useState, useEffect, memo, useCallback } from 'react';
import './ModeSelection.scss';
import ClassName from 'classnames';
import { ModeSelectionShape } from './ModeSelectionShape';
import { loadData } from '../../api/getData';

export const ModeSelection = memo(({
  setField,
  setOpenSquare,
  setHistoryHover,
}) => {
  const [modes, setModes] = useState([]);
  const [disabledStatus, setDisabledStatus] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await loadData();
      const result = Object.entries(response);

      setModes(result);
    }

    fetchData();
  }, []);

  const handleSelect = useCallback((event) => {
    const { value } = event.target;

    value === 'Pick mode'
      ? setDisabledStatus(true)
      : setDisabledStatus(false);

    setOpenSquare(false);
    setHistoryHover([]);
    loadField(value);
  }, []);

  const handleButton = useCallback(() => {
    setOpenSquare(true);
  }, []);

  const loadField = useCallback((numberOfCells) => {
    const squares = [];

    for (let i = 1; i <= numberOfCells; i += 1) {
      squares.push(i);
    }

    setField(squares);
  }, []);

  return (
    <form className="form">
      <select className="form__select" onChange={handleSelect}>
        <option>Pick mode</option>

        {modes.map(mode => (
          <option key={mode[0]} value={mode[1].field}>
            {mode[0]}
          </option>
        ))}
      </select>

      <button
        className={ClassName('form__button', {
          'form__button--disabled': disabledStatus,
        })}
        type="button"
        onClick={handleButton}
        disabled={disabledStatus}
      >
        START
      </button>
    </form>
  );
});

ModeSelection.propTypes = ModeSelectionShape;
