export function setStorageValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageValue(key) {
  const value = window.localStorage.getItem(key);

  const parsedValue = JSON.parse(value);
  return parsedValue;
}
