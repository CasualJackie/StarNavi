const BASE_URL = 'https://demo1030918.mockable.io/';

export const loadData = async() => {
  const response = await fetch(BASE_URL);
  const result = response.json();

  return result;
};
