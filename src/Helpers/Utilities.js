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

const detectPreferedColorScheme = () => {
  // if browser doesn't support prefers-color-color scheme -> default to dark
  if (!window.matchMedia) return "theme-dark";

  // use light if they prefer light
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "theme-dark";
  }
  // default to dark theme
  return "theme-dark";
};

export { get, set, remove, detectPreferedColorScheme };
