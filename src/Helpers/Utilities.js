// Get a key from Local Storage
const get = key => {
  return localStorage.getItem(key);
};

// Set Key Value in Local Storage
const set = (key, value) => {
  localStorage.setItem(key, value);
};

// Remove Key from Local Storage
const remove = key => {
  return localStorage.removeItem(key);
};

export { get, set, remove };
