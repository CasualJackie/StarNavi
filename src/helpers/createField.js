import { v4 as uuidv4 } from 'uuid';

export const createField = (cells) => {
  const squares = [];

  for (let i = 1; i <= cells; i += 1) {
    squares.push({
      value: i,
      id: uuidv4(),
    });
  }

  return squares;
};
