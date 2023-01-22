export const getInitialState = () =>
  JSON.parse(window.localStorage.getItem("state")) || {};

export const saveStorage = (store) => (next) => (action) => {
  next(action);
  window.localStorage.setItem("state", JSON.stringify(store.getState()));
};
