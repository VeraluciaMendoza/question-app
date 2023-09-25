/* Obtener local storage */
const getLocalStorage = (key)=> {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return undefined;
};

/* Setear local storage */
const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/* Remover local storage */
const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

const clearLocalStorage = () => {
  window.localStorage.clear();
};

const existsInLocalStorage = (key) => {
  return !!getLocalStorage(key);
};

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  existsInLocalStorage,
};
