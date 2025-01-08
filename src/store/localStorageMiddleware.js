export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
  return result;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
