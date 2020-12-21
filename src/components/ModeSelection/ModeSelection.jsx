import React, { useState, useEffect, memo, useCallback } from 'react';
import './ModeSelection.scss';
import ClassName from 'classnames';
import { ModeSelectionShape } from '../../shapes/ModeSelectionShape';
import { loadData } from '../../api/getData';
import { createField } from '../../helpers/createField';

export const ModeSelection = memo(({
  setField,
  setOpenSquare,
  setHistoryHover,
  setLoadingError,
}) => {
  const [modes, setModes] = useState([]);
  const [disabledStatus, setDisabledStatus] = useState(true);

  useEffect(async() => {
    try {
      const response = await loadData();
      const result = Object.entries(response);

      setModes(result);
      setLoadingError(false);
    } catch {
      setLoadingError(true);
    }
  }, []);

  const handleSelect = useCallback((event) => {
    const { value } = event.target;

    value === 'Pick mode'
      ? setDisabledStatus(true)
      : setDisabledStatus(false);

    setOpenSquare(false);
    setHistoryHover([]);

    const field = createField(value);

    setField(field);
  }, []);

  const handleButton = useCallback(() => {
    setOpenSquare(true);
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
